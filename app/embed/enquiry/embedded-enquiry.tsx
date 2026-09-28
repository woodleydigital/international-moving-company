"use client";

import { useEffect } from "react";
import { QuoteForm, type EnquirySource } from "../../quote-form";

/**
 * Reports the form's height to the host page so the iframe can grow and shrink
 * with each step instead of scrolling inside itself, and tells the host when an
 * enquiry has been sent (for its analytics). Messages carry no personal data.
 */
function post(message: Record<string, unknown>) {
  if (window.parent !== window) window.parent.postMessage({ source: "imc-enquiry", ...message }, "*");
}

export function EmbeddedEnquiry(props: { origin?: EnquirySource; initialDestination?: string }) {
  useEffect(() => {
    const report = () => post({ type: "height", height: Math.ceil(document.documentElement.scrollHeight) });
    const observer = new ResizeObserver(report);
    observer.observe(document.body);
    report();
    return () => observer.disconnect();
  }, []);

  return <QuoteForm {...props} onSent={() => post({ type: "sent" })} />;
}
