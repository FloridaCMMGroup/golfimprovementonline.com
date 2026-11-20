// Google Tag Manager setup. Kept in its own file because the content security
// policy in _headers does not allow inline scripts. Loaded before gtm.js.
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
// The start event GTM needs for "All Pages" / page view triggers to fire.
dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
