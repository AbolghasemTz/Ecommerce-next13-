 
import React from "react";

function TextField({ label, name, onChange,value }) {
  return (
    <div className="my-[24px] relative">
      <label htmlFor={name} className="textFiled_label">
        {label}
      </label>
      <input type="text" id={name} name={name} onChange={onChange} value={value} className="textFiled_input" />
    </div>
  );
}

export default TextField;
