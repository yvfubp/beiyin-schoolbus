const cacheName = 'bus-schedule-v1';
const appShellFiles = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// 安装时缓存所有必需文件
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(appShellFiles);
  })());
});

// 每次打开优先从缓存读取，实现秒开和离线访问
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    if (r) return r;
    const response = await fetch(e.request);
    return response;
  })());
});
