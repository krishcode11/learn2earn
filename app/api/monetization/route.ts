import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Subscription management
export async function POST(req: Request) {
  try {
    const { userId, plan, features } = await req.json();
    
    const subscription = await prisma.subscription.create({
      data: {
        userId,
        plan,
        status: 'active',
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
        features,
      },
    });

    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create subscription' }, { status: 500 });
  }
}

// Token transactions
export async function PUT(req: Request) {
  try {
    const { userId, amount, type, description } = await req.json();
    
    const transaction = await prisma.tokenTransaction.create({
      data: {
        userId,
        amount,
        type,
        description,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process token transaction' }, { status: 500 });
  }
}

// Corporate training programs
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const companyId = searchParams.get('companyId');
    
    if (!companyId) {
      const programs = await prisma.corporateTraining.findMany({
        orderBy: { startDate: 'desc' },
      });
      return NextResponse.json(programs);
    }

    const programs = await prisma.corporateTraining.findMany({
      where: { companyId },
      orderBy: { startDate: 'desc' },
    });

    return NextResponse.json(programs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch corporate training programs' }, { status: 500 });
  }
}

// Certification management
export async function PATCH(req: Request) {
  try {
    const { userId, courseId, fee } = await req.json();
    
    const certification = await prisma.certification.create({
      data: {
        userId,
        courseId,
        status: 'pending',
        fee,
        issueDate: new Date(),
      },
    });

    return NextResponse.json(certification);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create certification' }, { status: 500 });
  }
}

// API access management
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const apiKey = searchParams.get('apiKey');
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key is required' }, { status: 400 });
    }

    await prisma.apiAccess.delete({
      where: { apiKey },
    });

    return NextResponse.json({ message: 'API access revoked successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to revoke API access' }, { status: 500 });
  }
} 