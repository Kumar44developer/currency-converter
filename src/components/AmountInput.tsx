import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  maxIntegerDigits?: number; // limit digits before decimal point
};


export default function AmountInput({
  value,
  onChange,
  maxIntegerDigits = 12,
}: Props) {
  const helpId = "amount-help";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
