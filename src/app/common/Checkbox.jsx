import React from "react";

function Checkbox({label,id,name,value,onChange,checked}) {
  return (
    <div class="flex flex-col gap-y-2 px-2">
      <label className="cursor-pointer mr-2">
      <input type="checkbox"
      id={id}
      name={name}
      checked={checked}
      value={value}
      onChange={onChange}

      className="form-checkbox rounded text-[#417F56]  focus:ring-[#417F56]"
      />
      <span class="mr-3">{label}</span></label>
    </div>
  );
}

export default Checkbox;
