import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

const courseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  content: z.string().min(1),
  rewardAmount: z.number().positive(),
});

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        _count: {
          select: {
            progress: true,
          },
        },
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user || user.role !== 'admin') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const courseData = courseSchema.parse(body);

    const course = await prisma.course.create({
      data: courseData,
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }

    console.error('Error creating course:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 