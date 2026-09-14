"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MovingSizeSelect({ value, sizes, onValueChange }: {
  value: string;
  sizes: string[];
  onValueChange: (value: string) => void;
}) {
  return <Select value={value} onValueChange={onValueChange}>
    <SelectTrigger id="move-size" aria-labelledby="move-size-label" className="quote-select"><SelectValue placeholder="Select your moving size"/></SelectTrigger>
    <SelectContent className="quote-size-menu" position="popper" align="start" sideOffset={6} collisionPadding={16}>
      {sizes.map(size => <SelectItem className="quote-size-option" key={size} value={size}>{size}</SelectItem>)}
    </SelectContent>
  </Select>;
}
