import React from "react";
import Validate from "../utils/Validate";
import { useRef } from "react";
import { useState } from "react";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = Validate(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  return (
    <>
      <div className="w-full h-full overflow-hidden ">
        <img
          className="z-20 absolute w-full h-full object-cover  "
          src="./imgs/Login_page.jpg"
          alt="img not found"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute text z-30  flex flex-col   gap-14 left-1/3 top-[9rem] ml-[22rem] "
        >
          <h1 className="text-[17px]  font-serif mt-[3rem]">
            LOG INTO YOUR ACCOUNT
          </h1>
          <div className="">
            <input
              ref={email}
              type=" text"
              placeholder="Email address"
              className="p-2  rounded w-[350px]  border-b-4 top-"
            />

            <input
              ref={password}
              type=" password"
              placeholder="Password"
              className="p-2  rounded w-[350px] bg-transparent border-b-4 mt-[2rem] flex"
            />
            <p className="text-red-500 font-bold">{errorMessage}</p>
            <button
              className=" rounded-lg bg-black text-white w-[350px] font-serif border-2 p-2 hover:bg-yellow-500 mt-[4rem] "
              onClick={handleButtonClick}
            >
              LOG IN
            </button>
          </div>

          <div className=" cursor-pointer flex flex-row font-serif mt-[-3rem] gap-5 font-semibold text-sm ">
            <p className="hover:text-orange-500">Forgot Password?</p>
            <p className="hover:text-orange-500">Reset Password?</p>
          </div>

          <div className="font-serif  flex flex-row gap-24   w-[23rem] p-2">
            <h2 className="uppercase ">Need An Account ? </h2>
            <button className="  font-bold hover:text-orange-500">
              {" "}
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
