
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withErrorHandling } from '@/lib/api-handler';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

async function handlePost(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, company, formType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject: subject || null,
        message,
        phone: phone || null,
        company: company || null,
        formType: formType || 'contact',
        status: 'new',
      },
    });

    return NextResponse.json({ success: true, data: submission }, { status: 201 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const POST = withErrorHandling(handlePost);
