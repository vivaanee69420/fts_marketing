"use client";

import Script from "next/script";
import { GHL_EMBED_SCRIPT, GHL_FORM_ID } from "@/lib/site";

/**
 * GoHighLevel form embed. Reused for booking, contact, and dentist referral
 * by passing a different `formId`. The embed script is loaded lazily so it
 * never blocks initial render (facade pattern).
 */
export function GHLEmbed({
  formId = GHL_FORM_ID,
  height = 520,
  title = "Book your free consultation",
  className,
}: {
  formId?: string;
  height?: number;
  title?: string;
  className?: string;
}) {
  return (
    <>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        // reserve height so the iframe can't shift layout (CLS protection)
        style={{ width: "100%", height, border: "none", borderRadius: 8 }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name={title}
        data-form-id={formId}
        title={title}
        className={className}
      />
      <Script src={GHL_EMBED_SCRIPT} strategy="lazyOnload" />
    </>
  );
}
