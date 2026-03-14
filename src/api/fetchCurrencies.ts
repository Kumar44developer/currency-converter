export async function fetchCurrencies(signal?: AbortSignal) {
  const res = await fetch("https://api.frankfurter.app/currencies", { signal });
