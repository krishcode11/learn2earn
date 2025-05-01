import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Content moderation
export async function POST(req: Request) {
  try {
    const { content, type, status } = await req.json();
    
    const moderatedContent = await prisma.content.create({
      data: {
        content,
        type,
        status,
        version: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(moderatedContent);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to moderate content' }, { status: 500 });
  }
}

// Content versioning
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const contentId = searchParams.get('contentId');
    
    if (!contentId) {
      const allContent = await prisma.content.findMany({
        orderBy: { updatedAt: 'desc' },
      });
      return NextResponse.json(allContent);
    }

    const content = await prisma.content.findUnique({
      where: { id: contentId },
      include: { versions: true },
    });

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

// Content translation
export async function PUT(req: Request) {
  try {
    const { contentId, language, translatedContent } = await req.json();
    
    const translation = await prisma.contentTranslation.create({
      data: {
        contentId,
        language,
        translatedContent,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(translation);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to translate content' }, { status: 500 });
  }
} 