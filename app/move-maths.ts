export function calculateVolume(length: string, width: string, height: string, quantity: string): { cubicMetres: number; cubicFeet: number } | null {
  const raw = [length, width, height, quantity];
  if (raw.some(value => value.trim() === "")) return null;
  const [l, w, h, q] = raw.map(Number);
  if (![l, w, h, q].every(Number.isFinite) || [l, w, h].some(n => n <= 0 || n > 1000) || !Number.isInteger(q) || q < 1 || q > 10000) return null;
  const cubicMetres = l * w * h * q / 1000000;
  return { cubicMetres, cubicFeet: cubicMetres / 0.028316846592 };
}
