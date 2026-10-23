import { NextResponse } from 'next/server';

// Frequently requested (440/30d) but not used by the app; return a cheap, explicit 404 JSON.
export function GET() {
  return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
}
