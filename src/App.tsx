import React, { useMemo, useState } from "react";
import AmountInput from "./components/AmountInput";
import CurrencySelect from "./components/CurrencySelect";
import SwapButton from "./components/SwapButton";
import Result from "./components/Result";
import { fetchCurrencies } from "./api/fetchCurrencies";
import { getRates } from "./api/getRates";
import { makeFlagFromCurrency } from "./utils/makeFlagFromCurrency";
import { convertAmount } from "./utils/convertAmount";


function App() {
  const [amount, setAmount] = useState<string>("1");
  const [from, setFrom] = useState<string>("USD");
  const [to, setTo] = useState<string>("NPR");
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasConverted, setHasConverted] = useState(false);
  const [currencies, setCurrencies] = useState<
    { code: string; name: string; flag?: string; flagUrl?: string }[]
  >([]);


  React.useEffect(() => {
    const controller = new AbortController();
    async function loadSymbols() {
      try {
        const data = await fetchCurrencies(controller.signal);
        const list = Object.entries(data)
          .map(([code, name]) => {
            const region = code === "EUR" ? "EU" : code.slice(0, 2);
            const isValidRegion = /^[A-Za-z]{2}$/.test(region);
            const flagUrl = isValidRegion
              ? `https://flagcdn.com/24x18/${region.toLowerCase()}.png`
              : undefined;


            return {
              code,
              name,
              flag: makeFlagFromCurrency(code),
              flagUrl,
            };
          })
          .sort((a, b) => a.code.localeCompare(b.code));
        setCurrencies(list);
        const codes = list.map((c) => c.code);
        if (!codes.includes(from) || !codes.includes(to) || from === to) {
          setFrom(codes[0]);
          setTo(codes.find((c) => c !== codes[0]) || codes[0]);
        }
      } catch (e) {
        // keep silent
      }
    }
    loadSymbols();
    return () => controller.abort();
  }, []);

    React.useEffect(() => {
    setTotal(null);
    setError(null);
    setHasConverted(false);
  }, [amount, from, to]);






