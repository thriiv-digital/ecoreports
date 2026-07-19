(() => {
  const base = '.';
  const v = Date.now();
  for (const p of ['tokens/colors.css', 'tokens/typography.css', 'tokens/spacing.css', 'tokens/base.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p + '?v=' + v;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js?v=' + v;
  document.head.appendChild(s);
})();