import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="rounded-md bg-primary px-5 py-2 text-primary-foreground">Back to home</Link>
    </main>
  );
}
