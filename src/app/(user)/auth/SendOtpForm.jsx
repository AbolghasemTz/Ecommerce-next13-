import React from "react";
import TextField from "../../common/TextField";


function SendOtpForm({ isLoading,onSubmit,phoneNumber,onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField label="شماره همراه" name="phoneNumber" value={phoneNumber} onChange={onChange}  />

        {isLoading ? (
          <p className="text-center btn">Loading ...</p>
        ) : (
          <button type="submit" className="md:w-[344px] w-full h-[40px] btn">
            ادامه
          </button>
        )}
      </form>
    </div>
  );
}

export default SendOtpForm;
