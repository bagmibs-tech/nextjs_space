'use client';
import { useEffect } from 'react';

const CHUNK_RE = /Loading chunk|ChunkLoadError|Loading CSS chunk|dynamically imported module/i;

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[app error]', error);
    // Stale cached build: reload once to fetch fresh chunks.
    if (CHUNK_RE.test(error?.message || '') && !sessionStorage.getItem('chunk-reloaded')) {
      sessionStorage.setItem('chunk-reloaded', '1');
      window.location.reload();
    }
  }, [error]);
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">Service temporarily unavailable</h1>
      <p className="text-muted-foreground">Something went wrong on our side. Please try again.</p>
      <button onClick={reset} className="rounded-md bg-primary px-5 py-2 text-primary-foreground">Retry</button>
    </main>
  );
}
