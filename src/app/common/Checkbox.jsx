import React from "react";

function Checkbox({label,id,name,value,onChange,checked}) {
  return (
    <div>
      <input type="checkbox"
      id={id}
      name={name}
      checked={checked}
      value={value}
      onChange={onChange}
      className="cursor-pointer form-checkbox rounded-[5px] border-none bg-green-700 w-4 h-4 checked:text-green-900"
      />
      <label className="cursor-pointer">{label}</label>
    </div>
  );
}

export default Checkbox;