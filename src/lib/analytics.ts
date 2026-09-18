/**
 * Suivi léger des clics d'achat.
 * Compatible avec une future intégration Meta Pixel / Meta Conversion API :
 * si `window.fbq` est présent, l'événement lui est également transmis.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackCheckoutClick(source: string) {
  if (typeof window === 'undefined') return;

  const detail = { source, url: window.location.href, timestamp: Date.now() };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'checkout_click', ...detail });

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', { content_name: source });
  }

  window.dispatchEvent(new CustomEvent('checkout_click', { detail }));
}
