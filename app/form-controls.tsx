import type { ComponentProps } from "react";

// Small, native controls used by IMC. Complex dropdown behaviour remains in Radix.
export function Input({ className = "", ...props }: ComponentProps<"input">) {
  return <input className={`imc-input ${className}`} {...props}/>;
}

export function Textarea({ className = "", ...props }: ComponentProps<"textarea">) {
  return <textarea className={`imc-textarea ${className}`} {...props}/>;
}

export function Checkbox({ checked, onCheckedChange, className = "", ...props }:
  Omit<ComponentProps<"input">, "type" | "onChange"> & { onCheckedChange: (checked: boolean) => void }) {
  return <input {...props} type="checkbox" className={`imc-checkbox ${className}`} checked={checked}
    data-state={checked ? "checked" : "unchecked"} onChange={event => onCheckedChange(event.target.checked)}/>;
}

export function Progress({ value = 0, className = "", ...props }:
  Omit<ComponentProps<"div">, "children"> & { value?: number }) {
  const percent = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
  return <div {...props} className={`imc-progress ${className}`} data-slot="progress" role="progressbar"
    aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent} aria-valuetext={`${Math.round(percent)}%`}>
    <div data-slot="progress-indicator" style={{ transform: `translateX(-${100 - percent}%)` }}/>
  </div>;
}
