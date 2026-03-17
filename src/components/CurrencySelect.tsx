import React from "react";

type CurrencyOption = {
  code: string;
  name?: string;
  flag?: string;
  flagUrl?: string;
};


type Props = {
  label: string;
  value: string;
  onChange: (code: string) => void;
  currencies: CurrencyOption[];
  id: string;
  disabledCodes?: string[];
};


export default function CurrencySelect({
  label,
  value,
  onChange,
  currencies,
  id,
  disabledCodes = [],
}: Props) {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);





































