import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function ExpandablePanel({ header, children }) {
  const [expanded, setExpended] = useState(true);
  const handleClick = () => setExpended(!expanded);
  return (
    <div className=" mb-2 border">
      <div className="flex items-center justify-between px-3 bg-gray-100">
        {header}
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>

      <div className="p-2 border-t">{expanded && children }</div>
    </div>
  );
}

export default ExpandablePanel;
