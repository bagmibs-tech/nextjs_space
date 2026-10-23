import { NextResponse } from 'next/server';

type Handler<R extends Request> = (req: R, ctx?: any) => Promise<Response> | Response;

/** Wraps an API route so unexpected failures return JSON 503 instead of crashing. */
export function withErrorHandling<R extends Request>(handler: Handler<R>): Handler<R> {
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
