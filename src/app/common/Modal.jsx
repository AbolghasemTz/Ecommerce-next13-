import React from "react";

const Modal = ({ isOpenModal, onClose, children }) => {
  if (!isOpenModal) return null;

  return (
    <>
      <div
        className="fixed inset-0  bg-gray-900 opacity-50"
        onClick={() => onClose(false)}
      ></div>
      <div className="fixed inset-y-1/3 left-1/2 transform -translate-x-1/2 md:-translate-y-1/3 -translate-y-44">
        <div className="bg-white rounded-lg shadow-md max-w-md  overflow-hidden z-50">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
