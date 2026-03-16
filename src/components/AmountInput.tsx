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
    let cleaned = raw.replace(/[^0-9.]/g, "");
    cleaned = cleaned.replace(/(\..*)\./g, "$1"); 



    const integerPart = cleaned.split(".")[0];
    if (integerPart.length > maxIntegerDigits) {
      return;
    }
    onChange(cleaned);
  };


  return (
    <div>
      <label htmlFor="amount">Enter Amount</label>
      <input
        id="amount"
        type="number"
        inputMode="decimal"
        min={0}
        step={0.01}
        value={value}
        onChange={handleChange}
        className="input"
        placeholder="1"
        aria-describedby={helpId}
        pattern="[0-9]*[.,]?[0-9]*"
      />





    
