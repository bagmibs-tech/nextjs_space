import { NextRequest, NextResponse } from 'next/server';

// Next.js adaptation of the requested Express 404/502 middleware.
// res.on('finish') cannot redirect after a response is sent, and redirecting every
// 404 to "/" creates soft-404s, so we block scanner probes early and 301 only known legacy paths.
const PROBE_PATTERNS: RegExp[] = [
  /\/\.env/i, /\.php\d?$/i, /\/\.git/i, /\/wp-(admin|login|content|includes)/i,
  /\/userfiles\//i, /\/cgi-bin\//i, /::\$DATA/i, /\/\.(aws|ssh|svn|htaccess|DS_Store)/i,
  /\/(phpmyadmin|vendor\/phpunit|xmlrpc)/i, /\.(sql|bak|old|swp|ini|log)$/i,
];

const LEGACY_REDIRECTS: Record<string, string> = {
  '/home': '/', '/index': '/', '/index.html': '/',
  '/about-us': '/about', '/service': '/services', '/our-services': '/services',
  '/how-it-works': '/how-we-work', '/process': '/how-we-work',
  '/contact-us': '/contact', '/news': '/blog', '/articles': '/blog',
};
const LOCALES = ['en', 'de', 'ar'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PROBE_PATTERNS.some((re) => re.test(pathname))) {
    console.warn(`[probe blocked] ${req.method} ${pathname}`);
    return new NextResponse('Not Found', { status: 404, headers: { 'Cache-Control': 'public, max-age=3600' } });
  }

  // Strip locale prefixes (/en/about -> /about); the site handles language client-side.
  const seg = pathname.split('/')[1]?.toLowerCase();
  let target = pathname;
  if (seg && LOCALES.includes(seg)) target = pathname.slice(seg.length + 1) || '/';
  if (target.length > 1 && target.endsWith('/')) target = target.slice(0, -1);
  target = LEGACY_REDIRECTS[target.toLowerCase()] ?? target;

  if (target !== pathname) {
    const url = req.nextUrl.clone();
    url.pathname = target;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|robots.txt|sitemap.xml).*)'],
};
