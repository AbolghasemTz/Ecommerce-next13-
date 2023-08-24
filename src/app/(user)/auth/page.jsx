"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";

// icons
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
// import { PiWarningCircleDuotone } from "react-icons/pi";
// import { CiTimer } from "react-icons/ci";

// components
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";

// react-query
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { checkOtp, getOtp } from "../../services/AuthServices";
import Modal from "../../common/Modal";

const RESEND_TIME = 90;

function AuthPage({ isOpenModal, onClose }) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const { isLoading, mutateAsync: mutateGetOtp } = useMutation({
    mutationFn: getOtp,
  });
  const { data, mutateAsync: mutateCheckOtp } = useMutation({
    mutationFn: checkOtp,
  });

  const { user } = data || {};
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  // mutationFn  ارسال یک اطلاعاتی یا ریکوستی است به سمت بک اند
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateGetOtp({ phoneNumber });
      toast.success(message);
      setStep(2);
      setTime(RESEND_TIME);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      if (user?.isActive) {
        router.push("/");
        
      } else {
        router.push("complete-profile");
        
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);
  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            isLoading={isLoading}
            onSubmit={sendOtpHandler}
            onChange={phoneNumberHandler}
            phoneNumber={phoneNumber}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            onBack={() => setStep((s) => s - 1)}
            time={time}
            setOtp={setOtp}
            otp={otp}
            onSubmit={checkOtpHandler}
          />
        );
      default:
        return null;
    }
  };
  return (
    <>
    {!user?.isVerifiedPhoneNumber && <Modal isOpenModal={isOpenModal} onClose={onClose}>
      <div className="md:w-[392px]  md:h-[302px] w-[95vw] ">
        <div className="px-[24px] md:block hidden">
          <div className="flex justify-between items-center pt-[24px] pb-[16px]">
            {step === 2 ? (
              <div>
                <IoIosArrowForward
                  size={24}
                  color="#717171"
                  onClick={() => setStep((s) => s - 1)}
                />
              </div>
            ) : (
              <div className="" onClick={() => setStep((s) => s + 1)}>
                x
              </div>
            )}
            <div>
              <Image src="/svg/logo.svg" width={102} height={32} alt="logo" />
            </div>
            <div onClick={() => onClose(false)}>
              <IoMdClose size={24} color="#717171" />
            </div>
          </div>
          <div className="text-center">
            {step === 1 ? (
              <h3 className="text-[#353535] text-[16px] font-[400] ">
                ورود / ثبت نام
              </h3>
            ) : (
              <h3 className="text-[#353535] text-[16px] font-[400] ">
                کد تایید
              </h3>
            )}
            {step === 1 ? (
              <p className="text-[#717171] text-[12px] font-[400] pt-[8px]">
                با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
              </p>
            ) : (
              <p className="text-[#717171] text-[12px] font-[400] pt-[8px]">
                کد تایید پنج‌رقمی به شماره 09354947002 ارسال خواهد شد.
              </p>
            )}

            <p className="text-[#717171] text-[12px] font-[400] block md:hidden pt-[8px]">
              شماره همراه خود را وارد کنید.
            </p>
          </div>
          {renderSteps()}
          <div>
            {step === 1 && (
              <div className="text-center pb-[12px] mt-[16px] ">
                <p className="text-[#353535] md:text-[11px] text-[10px] font-[400] ">
                  ورود و عضویت در فروشگاه امید به منزله قبول{" "}
                  <span className="text-[#417F56]">قوانین و مقررات</span> است
                </p>
              </div>
            )}
          </div>
        </div>
       
       <div>
       </div>
        {/* mobile */}
        <div className="md:hidden block">
          <div className="flex justify-between items-center pt-[44px] px-[20px]  ">
            {step === 2 ? (
              <div>
                <IoIosArrowForward
                  size={24}
                  color="#717171"
                  onClick={() => setStep((s) => s - 1)}
                />
              </div>
            ) : (
              <div className="opacity-0">x</div>
            )}

            <div onClick={() => onClose(false)}>
              <IoMdClose size={24} color="#717171" />
            </div>
          </div>
          <div className="flex justify-center mt-[112px]">
            <Image src="/svg/logo.svg" width={148} height={71} alt="logo" />
          </div>
          <div className="text-center mt-[80px]">
            {step === 1 ? (
              <h3 className="text-[#353535] text-[16px] font-[400] ">
                ورود / ثبت نام
              </h3>
            ) : (
              <h3 className="text-[#353535] text-[16px] font-[400] ">
                کد تایید
              </h3>
            )}
            {step === 1 ? (
              <p className="text-[#717171] text-[14px] font-[400] py-[24px]">
                شماره همراه خود را وارد کنید.
              </p>
            ) : (
              <p className="text-[#717171] text-[12px] font-[400] pt-[8px]">
                کد تایید پنج‌رقمی به شماره 09354947002 ارسال خواهد شد.
              </p>
            )}
          </div>

          <div className="w-[90%] mx-auto">{renderSteps()}</div>
          <div className="text-center pb-[50px] mt-[16px] ">
            <p className="text-[#353535] md:text-[11px] text-[10px] font-[400] ">
              ورود و عضویت در ترخینه به منزله قبول{" "}
              <span className="text-[#417F56]">قوانین و مقررات</span> است
            </p>
          </div>
        </div>
      </div>
    </Modal>}
    
  
    </>
  
  );
}

export default AuthPage;
