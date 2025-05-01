import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/auth";
import { z } from "zod";

// Validation schema for progress update
const progressSchema = z.object({
  status: z.enum(["not_started", "in_progress", "completed"]),
  chapterId: z.string().optional(),
});

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const progress = await prisma.courseProgress.findFirst({
      where: {
        userId: user.id,
        courseId: params.courseId,
      },
      include: {
        course: {
          select: {
            title: true,
            rewardAmount: true,
          },
        },
      },
    });

    if (!progress) {
      return new NextResponse("Progress not found", { status: 404 });
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error("[COURSE_PROGRESS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const validatedData = progressSchema.parse(body);

    // Start a transaction
    const result = await prisma.$transaction(async (tx) => {
      // 1. Get or create progress
      const progress = await tx.courseProgress.upsert({
        where: {
          userId_courseId: {
            userId: user.id,
            courseId: params.courseId,
          },
        },
        update: {
          status: validatedData.status,
          completedAt: validatedData.status === "completed" ? new Date() : null,
        },
        create: {
          userId: user.id,
          courseId: params.courseId,
          status: validatedData.status,
          completedAt: validatedData.status === "completed" ? new Date() : null,
        },
      });

      // 2. If course is completed, handle rewards
      if (validatedData.status === "completed") {
        // Get course details
        const course = await tx.course.findUnique({
          where: { id: params.courseId },
          select: {
            id: true,
            rewardAmount: true,
          },
        });

        if (course?.rewardAmount && course.rewardAmount > 0) {
          // Update user balance
          await tx.user.update({
            where: { id: user.id },
            data: {
              balance: {
                increment: course.rewardAmount,
              },
            },
          });

          // Create reward transaction
          await tx.tokenTransaction.create({
            data: {
              userId: user.id,
              amount: course.rewardAmount,
              type: "REWARD",
              description: `Reward for completing course: ${course.id}`,
            },
          });
        }
      }

      return progress;
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid request data", { status: 400 });
    }

    console.error("[COURSE_PROGRESS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
