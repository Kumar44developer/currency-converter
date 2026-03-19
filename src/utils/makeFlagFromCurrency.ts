export function makeFlagFromCurrency(code: string): string | undefined {
  const region = code === "EUR" ? "EU" : code.slice(0, 2);

  if (!/^[A-Za-z]{2}$/.test(region)) return undefined;






















