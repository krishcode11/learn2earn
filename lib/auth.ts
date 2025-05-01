import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from './prisma';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);

export async function generateToken(user: { id: string; email: string }) {
  return await new SignJWT({ userId: user.id })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
}

export async function getCurrentUser() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) return null;

    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userId = payload.userId as string;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  } catch (error) {
    return null;
  }
} 