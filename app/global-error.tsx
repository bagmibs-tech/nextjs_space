'use client';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('[global error]', error); }, [error]);
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20vh 1rem' }}>
        <h1>Service temporarily unavailable</h1>
        <p>Please try again in a moment.</p>
        <button onClick={reset} style={{ padding: '0.5rem 1.25rem' }}>Retry</button>
      </body>
    </html>
  );
}
