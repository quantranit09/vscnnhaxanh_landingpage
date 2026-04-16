// ─── Google Ads Conversion Tracking ──────────────────────────────────────────
// Conversion ID  : AW-11498445959
// Phone Click    : AW-11498445959/gROpCJTu5pccEIe58eoq        ✅
// Form Submit    : AW-11498445959/8iHXCIDNlpYcEIe58eoq         ✅
// ──────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GOOGLE_ADS_ID = 'AW-11498445959'

export const CONVERSION = {
  PHONE_CLICK:   `${GOOGLE_ADS_ID}/gROpCJTu5pccEIe58eoq`,
  FORM_SUBMIT:   `${GOOGLE_ADS_ID}/8iHXCIDNlpYcEIe58eoq`,
} as const

export function fireConversion(sendTo: string) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', 'conversion', { send_to: sendTo, value: 1.0, currency: 'VND' })
}

/** Fire khi user click số điện thoại, giữ nguyên callback chuyển hướng theo snippet của Google Ads */
export function trackPhoneClick(url?: string) {
  if (typeof window === 'undefined') return false

  const callback = () => {
    if (typeof url !== 'undefined') {
      window.location.href = url
    }
  }

  if (typeof window.gtag !== 'function') {
    callback()
    return false
  }

  window.gtag('event', 'conversion', {
    send_to: CONVERSION.PHONE_CLICK,
    value: 1.0,
    currency: 'VND',
    event_callback: callback,
  })

  window.setTimeout(callback, 1000)
  return false
}

/** Fire khi Formspree xác nhận form submit thành công — fire cả 2 actions */
export function trackFormSubmit() {
  fireConversion(CONVERSION.FORM_SUBMIT)
}
