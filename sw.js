// 2FA Authenticator Service Worker
// Strategy:
//   - Precache core static assets on install
//   - Cache-first for same-origin static assets (jsQR, manifest, icons)
//   - Stale-while-revalidate for HTML navigations (instant load + bg update)
//   - Never cache cross-origin requests
//   - Bypass non-GET requests

const VERSION = 'v1.0.0-2fa-static';
const PRECACHE = `2fa-precache-${VERSION}`;
const RUNTIME  = `2fa-runtime-${VERSION}`;

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/jsQR.min.js',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml'
];

// ── Install: precache core assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS).catch(err => {
        // Don't fail install if a single asset (e.g. sitemap) 404s
        console.warn('[SW] precache partial fail:', err);
      }))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: clean old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== PRECACHE && k !== RUNTIME)
            .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch strategy ──
self.addEventListener('fetch', event => {
  const req = event.request;

  // Only handle GET
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Only same-origin (keeps the zero-third-party-request promise)
  if (url.origin !== self.location.origin) return;

  // Navigations (HTML pages): stale-while-revalidate
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.open(RUNTIME).then(async cache => {
        const cached = await cache.match('/index.html') || await cache.match(req);
        const networkFetch = fetch(req).then(res => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // Static assets: cache-first, fall back to network, cache on success
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.ok && res.type === 'basic') {
          const clone = res.clone();
          caches.open(RUNTIME).then(cache => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
    })
  );
});

// ── Allow page to trigger immediate update ──
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});
