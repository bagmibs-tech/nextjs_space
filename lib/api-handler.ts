import { NextResponse } from 'next/server';

type Handler = (req: Request, ctx?: any) => Promise<Response> | Response;

/** Wraps an API route so unexpected failures return JSON instead of crashing. */
export function withErrorHandling(handler: Handler): Handler {
  return async (req, ctx) => {
    try {
      return await handler(req, ctx);
    } catch (err) {
      console.error(`[API error] ${req.method} ${new URL(req.url).pathname}`, err);
      return NextResponse.json(
        { success: false, message: 'Service temporarily unavailable. Please retry.' },
        { status: 503, headers: { 'Retry-After': '5' } },
      );
    }
  };
}
