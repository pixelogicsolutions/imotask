import React, { useState } from "react";
import { TiGift as GiftIcon } from "react-icons/ti";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { Button } from "react-bootstrap";

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }
  return (
    <>
    
      
        <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        className="form-control form-control-sm ml-3 w-75"
        placeholder="Search"
          aria-label="Search"
              />
     
      

      
    </>
  );
}
export default FormInput;
