
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withErrorHandling } from '@/lib/api-handler';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

async function handlePost(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await prisma.newsletterSignup.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { message: 'Email already subscribed' },
        { status: 200 }
      );
    }

    // Create new signup
    const signup = await prisma.newsletterSignup.create({
      data: {
        email,
        name: name || null,
        source: source || 'website',
        status: 'active',
      },
    });

    return NextResponse.json({ success: true, data: signup }, { status: 201 });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const POST = withErrorHandling(handlePost);
