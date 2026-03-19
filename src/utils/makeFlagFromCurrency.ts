export function makeFlagFromCurrency(code: string): string | undefined {
  const region = code === "EUR" ? "EU" : code.slice(0, 2);























