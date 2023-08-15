import React from "react";

function Checkbox({label,id,name,value,onChange,checked}) {
  return (
    <div className="flex justify-start items-center mb-2 px-2">
      <input type="checkbox"
      id={id}
      name={name}
      checked={checked}
      value={value}
      onChange={onChange}
      className="cursor-pointer form-checkbox rounded-[5px] border-none bg-green-700 w-4 h-4 checked:text-green-900"
      />
      <label className="cursor-pointer mr-2">{label}</label>
    </div>
  );
}

export default Checkbox;
