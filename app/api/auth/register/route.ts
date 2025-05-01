import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { generateToken } from '@/lib/auth';

const registerSchema = z.object({
  email: z.string().email(),
  walletAddress: z.string().min(42).max(42),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, walletAddress } = registerSchema.parse(body);

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { walletAddress },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        walletAddress,
        role: 'user',
      },
    });

    // Generate JWT token
    const token = generateToken(user);

    return NextResponse.json(
      { user, token },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors },
        { status: 400 }
      );
    }

    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 