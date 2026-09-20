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
  return (
    <div className="select-group">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {currencies.map((c) => {
          const disabled = disabledCodes.includes(c.code);
          const flagPart = c.flag ? `${c.flag} ` : "";
          const namePart = c.name ? ` - ${c.name}` : "";
          return (
            <option key={c.code} value={c.code} disabled={disabled}>
              {flagPart}{c.code}{namePart}
            </option>
          );
        })}
      </select>
    </div>
  );
}


















