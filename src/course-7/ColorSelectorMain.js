import { useState } from "react";
import Dropdown from "./Dropdown";

export default function ColorSelectorMain() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Change to blue", value: "blue" },
    { label: "Change to yellow", value: "yellow" },
    { label: "Change to green", value: "green" },
  ];
  return (
    <>
      <Dropdown
        options={options}
        curValue={selection}
        onChange={handleSelect}
      />
      <Dropdown
        options={options}
        curValue={selection}
        onChange={handleSelect}
      />
    </>
  );
}
