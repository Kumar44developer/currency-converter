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





















