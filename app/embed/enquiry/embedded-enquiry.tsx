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
    // Measure the form's own box, not the document: the document is at least
    // as tall as the iframe, so reporting it would let the frame grow but
    // never shrink back when a step gets shorter.
    const shell = document.querySelector(".embed-shell");
    if (!shell) return;
    const report = () => post({ type: "height", height: Math.ceil(shell.getBoundingClientRect().height) });
    const observer = new ResizeObserver(report);
    observer.observe(shell);
    report();
    return () => observer.disconnect();
  }, []);

  return <QuoteForm {...props} onSent={() => post({ type: "sent" })} />;
}
