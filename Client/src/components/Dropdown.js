import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import "../CSS/Dropdown.css";

export default function Dropdown({ options, onChange, ...rest }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState(null);

  //Closes the dropdown by setting it to the opposite of its current value
  const handleOpenClick = (e) => {
    setIsOpen(!isOpen);
  };

  //Setting the users selection and turning the isOpen state to false so it closes
  const handleOptionClick = (option) => {
    setSelection(option);
    onChange(option.label);
    setIsOpen(false);
  };

  //
  const renderedList = options.map((option) => {
    return (
      <div
        className="dropdown-open"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //Returns a div with the current selection and then shows the rendered list once the isOpen
  //value is set to true through the onClick property on the div
  return (
    <div>
      <input
        {...rest}
        onClick={handleOpenClick}
        className="dropdown-closed"
        placeholder={selection?.label || "Search..."}
        readOnly
      ></input>
      {isOpen && <div className="dropdown-list-container">{renderedList}</div>}
    </div>
  );
}
