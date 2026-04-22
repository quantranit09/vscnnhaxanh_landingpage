// ─── Google Ads Conversion Tracking ──────────────────────────────────────────
// Conversion ID  : AW-11498445959
// Phone Click    : AW-11498445959/gROpCJTu5pccEIe58eoq        ✅
// Form Submit    : AW-11498445959/8iHXCIDNlpYcEIe58eoq         ✅
// ──────────────────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GOOGLE_ADS_ID = "AW-11498445959";

export const CONVERSION = {
  PHONE_CLICK: `${GOOGLE_ADS_ID}/gROpCJTu5pccEIe58eoq`,
  FORM_SUBMIT: `${GOOGLE_ADS_ID}/8iHXCIDNlpYcEIe58eoq`,
} as const;

export function fireConversion(sendTo: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag("event", "conversion", {
    send_to: sendTo,
    value: 1.0,
    currency: "VND",
  });
}

const FORMSPREE_ID = "xbdpyjdg";

/**
 * Silently submit a Formspree lead when user clicks a phone link.
 * Fires-and-forgets — does NOT block navigation.
 */
export function submitPhoneLead(phoneNumber = "0934.997.265") {
  if (typeof window === "undefined") return;
  const data = new FormData();
  data.append("name", "Gọi điện trực tiếp");
  data.append("phone", phoneNumber);
  data.append(
    "message",
    `[AUTO] Khách bấm gọi từ landing page: ${window.location.href}`,
  );
  data.append("_source", "phone-click");
  // Best-effort POST — ignore errors to never break the call flow
  fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  }).catch(() => {});
}

/** Fire khi user click số điện thoại, giữ nguyên callback chuyển hướng theo snippet của Google Ads */
export function trackPhoneClick(url?: string) {
  if (typeof window === "undefined") return false;

  const callback = () => {
    if (typeof url !== "undefined") {
      window.location.href = url;
    }
  };

  if (typeof window.gtag !== "function") {
    callback();
    return false;
  }

  window.gtag("event", "conversion", {
    send_to: CONVERSION.PHONE_CLICK,
    value: 1.0,
    currency: "VND",
    event_callback: callback,
  });

  window.setTimeout(callback, 1000);
  return false;
}

/** Fire khi Formspree xác nhận form submit thành công — fire cả 2 actions */
export function trackFormSubmit() {
  fireConversion(CONVERSION.FORM_SUBMIT);
}
