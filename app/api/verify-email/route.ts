import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ error: 'Token is required' }, { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: { id: '1' },
  });

  if (!user) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { emailVerified: new Date() },
  });

  return NextResponse.json({ message: 'Email verified successfully' });
}
