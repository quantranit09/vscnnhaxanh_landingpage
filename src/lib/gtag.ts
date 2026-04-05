// ─── Google Ads Conversion Tracking ──────────────────────────────────────────
// Conversion ID  : AW-11498445959
// Phone Click    : AW-11498445959/YgxtCKzBpZYcEIe58eoq  ✅
// Form Submit    : AW-11498445959/8iHXCIDN1pYcEIe58eoq   ✅
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
  FORM_SUBMIT:  `${GOOGLE_ADS_ID}/8iHXCIDN1pYcEIe58eoq`,
} as const

export function fireConversion(sendTo: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', { send_to: sendTo, currency: 'VND' })
}

/** Fire khi user click số điện thoại */
export function trackPhoneClick() {
  fireConversion(CONVERSION.PHONE_CLICK)
}

/** Fire khi Formspree xác nhận form submit thành công */
export function trackFormSubmit() {
  fireConversion(CONVERSION.FORM_SUBMIT)
}
