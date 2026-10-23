
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withErrorHandling } from '@/lib/api-handler';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

async function handlePost(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, companyName, industryType, companySize, responses, scores, overallScore, recommendations } = body;

    if (!email || !responses || !scores || overallScore === undefined) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      );
    }

    const assessment = await prisma.assessmentResult.create({
      data: {
        email,
        companyName: companyName || null,
        industryType: industryType || null,
        companySize: companySize || null,
        responses,
        scores,
        overallScore: parseFloat(overallScore.toString()),
        recommendations,
      },
    });

    return NextResponse.json({ success: true, data: assessment }, { status: 201 });
  } catch (error) {
    console.error('Assessment error:', error);
    return NextResponse.json(
      { error: 'Failed to save assessment' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const POST = withErrorHandling(handlePost);
