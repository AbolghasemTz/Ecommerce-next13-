import React from "react";

function RadioGroup({ label, id, name, value, onChange, checked }) {
  return (
    <div className="flex flex-col gap-y-2 px-2">
      <label htmlFor={id} className="cursor-pointer mr-2">
        <input
          type="radio"
          id={id}
          name={name}
          checked={checked}
          value={value}
          onChange={onChange}
          className="form-radio rounded text-[#417F56]  focus:ring-[#417F56]"
        />
        <span class="mr-3">{label}</span>
      </label>
    </div>
  );
}

export default RadioGroup;
