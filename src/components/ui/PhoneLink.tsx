"use client";

import type { ComponentPropsWithoutRef, MouseEvent } from "react";
import { trackPhoneClick, submitPhoneLead } from "@/lib/gtag";

type PhoneLinkProps = ComponentPropsWithoutRef<"a">;

export function PhoneLink({ href, onClick, ...props }: PhoneLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !href?.startsWith("tel:")) {
      return;
    }

    // Submit a Formspree lead record for every real phone-click
    submitPhoneLead();
    event.preventDefault();
    trackPhoneClick(href);
  };

  return <a {...props} href={href} onClick={handleClick} />;
}
