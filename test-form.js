// Private preview only: use the duplicated Tally form, not the live form.
if (location.pathname.replace(/\/+$/, '/') === '/start/') {
  const form = document.querySelector('iframe[data-tally-src]');
  if (form) {
    form.setAttribute('data-tally-src', 'https://tally.so/embed/2jKXbb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1');
  }
  const fallback = document.querySelector('.enquiry-fallback a');
  if (fallback) fallback.href = 'https://tally.so/r/2jKXbb';
}
