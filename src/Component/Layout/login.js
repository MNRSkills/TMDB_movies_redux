import React from "react";

const LoginModal = ({ open, toggleModal, onSubmit, lcreds, onChange }) => {
  //   console.log("PROSPS", toggleModal);
  if (!open) return null;
  return (
    <div className="bg-gray-500 w-1/2 h-full absolute z-10 top-0 inset-px m-auto">
      <button className="w-5" onClick={toggleModal}>
        Remove
      </button>
      <form action="" onSubmit={onSubmit} className="ml-4 border border-red-300 shadow-xl capitalize z-10 absolute w-1/2 h-1/2 flex items-center justify-center flex-col">
        <label htmlFor="" className="text-xl text-white ">email</label>
        <input type="text" name="email" onChange={(e) => onChange(e)} className="w-1/2 p-2 border-solid border-4 border-inherit"/>
        <label htmlFor="" className="text-xl text-white mt-4 mb-2">password</label>
        <input type="text" name="password" onChange={(e) => onChange(e)} className="w-1/2 p-2 border-solid border-4 border-inherit"/>
        <button type="submit" className="mt-10 p-4 bg-inherit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
