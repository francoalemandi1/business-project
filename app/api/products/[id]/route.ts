import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(product);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const product = await prisma.product.update({
    where: { id: params.id },
    data: body,
  });
  return NextResponse.json(product);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await prisma.product.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'Product deleted' });
}