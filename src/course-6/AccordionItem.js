import { useState } from "react";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

function AccordionItem({ items }) {
  const [expandedIndex, setExpendedIndex] = useState(0);

  const renderedItems = items.map((item, idx) => {
    const isExpanded = idx === expandedIndex;

    const icon = (
      <span className="text-xl">
        {" "}
        {isExpanded ? <AiFillCaretDown /> : <AiFillCaretRight />}
      </span>
    );

    const handleClick = (idx) => {
      if (idx === expandedIndex) {
        setExpendedIndex("close all")
      } else {
        setExpendedIndex(idx);
      }
    };

    return (
      <div key={idx}>
        <b
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(idx)}
        >
          {icon}
          {item.label}
        </b>
        <p className="bg-gray-20 m-2 border-x pl-3">
          {isExpanded && item.content}
        </p>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default AccordionItem;
