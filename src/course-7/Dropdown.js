import { useEffect, useState, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Panel from "./Panel";

export default function Dropdown({ options, curValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    // Define a handler function that will be called when a click event occurs
    const handler = (e) => {
      // if the divEl is null, then return (to prevent some bugs)
      if (!divEl.current) {
        return;
      }
      // if click outside the component, then close the dropdown
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    // Add an click event listener, then trigger handler function
    document.addEventListener("click", handler, true);
    // clean-up function to remove listenerwhen the component unmounts (to prevents memory leaks and ensures proper cleanup)
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleDropdownClick = () => setIsOpen(!isOpen);
  const handleColorChange = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((color, idx) => (
    <div key={idx} onClick={() => handleColorChange(color)}>
      {color.label}
    </div>
  ));

  return (
    <div ref={divEl} className="w-48 relative">
      <h1 className="text-lg">Color Dropdown</h1>
      <Panel
        onClick={handleDropdownClick}
        className="flex justify-between items-center"
      >
        {curValue?.value || "Select..."}
        <AiFillCaretDown />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full z-50">{renderedOptions}</Panel>
      )}
    </div>
  );
}

