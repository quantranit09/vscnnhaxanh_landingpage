// ─── Google Ads Conversion Tracking ──────────────────────────────────────────
// Conversion ID  : AW-11498445959
// Phone Click    : AW-11498445959/YgxtCKzBpZYcEIe58eoq
// Form Submit    : (cập nhật khi có label)
// ──────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GOOGLE_ADS_ID = 'AW-11498445959'

export const CONVERSION = {
  PHONE_CLICK: `${GOOGLE_ADS_ID}/YgxtCKzBpZYcEIe58eoq`,
  FORM_SUBMIT:  `${GOOGLE_ADS_ID}/FORM_LABEL_PENDING`,  // TODO: điền label từ Google Ads
} as const

/**
 * Fire Google Ads conversion event
 * Gọi khi user thực hiện hành động quan trọng (click phone, submit form)
 */
export function fireConversion(sendTo: string, valueCurrency = 'VND') {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', {
    send_to: sendTo,
    currency: valueCurrency,
  })
}

/** Shortcut: track phone click */
export function trackPhoneClick() {
  fireConversion(CONVERSION.PHONE_CLICK)
}

/** Shortcut: track form submit */
export function trackFormSubmit() {
  if (CONVERSION.FORM_SUBMIT.includes('PENDING')) return // chưa có label
  fireConversion(CONVERSION.FORM_SUBMIT)
}
