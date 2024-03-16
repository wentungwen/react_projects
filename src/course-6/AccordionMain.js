import { useState } from "react";
import AccordionItem from "./AccordionItem"

function Accordian() {
  const items = [
    { label: "item1", content: "item1 content" },
    { label: "item2", content: "item2 content" },
    { label: "item3", content: "item3 content" },
  ];

  return (
    <div>
      <AccordionItem items={items}/>
    </div>
  );
}

export default Accordian;
