export async function getRates(amount: number, from: string, to: string) {
  const url = new URL("https://api.frankfurter.app/latest");
  url.searchParams.set("amount", String(amount));
  url.searchParams.set("from", from);
  url.searchParams.set("to", to);
  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Frankfurter error: ${res.status}`);
  }
