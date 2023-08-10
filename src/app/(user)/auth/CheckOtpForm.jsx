
import React from "react";
import OtpInput from "react-otp-input";

function CheckOtpForm({ otp, setOtp, onBack, time, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="my-[24px] ">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputStyle={{
            width: "34px",
            height: "32px",
            padding: "",
            border: "1px solid #717171",
            borderRadius: "0.5rem",
            color: "#353535",
            outline: "none",
          }}
          containerStyle="flex gap-x-2 justify-center"
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
        />
        <div className="flex justify-between items-center text-[10px] mt-[8px] text-[#717171] md:px-0 px-2">
          {time > 0 ? (
            <p>
              <span>{time}</span> تادریافت کد مجدد
            </p>
          ) : (
            <p className="text-[#417F56]">ارسال کد مجدد</p>
          )}
          <p onClick={onBack}>ویرایش</p>
        </div>
        <button type="submit" className="mt-[24px] w-full h-[40px] btn">
          تایید
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
