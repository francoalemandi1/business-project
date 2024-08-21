import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { JWT } from 'next-auth/jwt';
import { authOptions } from '@/lib/auth/options';

const prisma = new PrismaClient();

const THIRTY_DAYS = 30 * 24 * 60 * 60;
const THIRTY_MINUTES = 30 * 60;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
