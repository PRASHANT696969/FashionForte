import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Validate from "../utils/Validate";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const ConfirmPassword = useRef(null);
  const MobileNumber = useRef(null);
  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(ConfirmPassword.current.value);
    console.log(MobileNumber.current.value);

    const message = Validate(
      email.current.value,
      password.current.value,
      ConfirmPassword.current.value,
      MobileNumber.current.value
    );
    setErrorMessage(message);
  };
  return (
    <>
      <div className="w-full h-full overflow-hidden	 ">
        <img
          className="z-20 absolute w-full h-full object-cover"
          src="./imgs/Login_page.jpg"
          alt="img not found"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute text z-30  flex flex-col   gap-10 left-1/3 top-[9rem] ml-[22rem] "
        >
          <h1 className="text-[19px]  font-serif mt-[3rem]  font-semibold  ">
            Create Your New Account
          </h1>
          <div className="w-[1rem] flex flex-row">
            <input
              type=" text"
              placeholder="First Name"
              className="  rounded p-2 w-[150px]  border-b-4 top- mb-[1rem]"
            />
            <input
              type=" text"
              placeholder="Last Name"
              className="  rounded p-2 ml-[2rem] w-[150px] mb-[1rem]  border-b-4 top-"
            />
          </div>
          <input
            type=" text"
            ref={email}
            placeholder="Email address"
            className=" rounded p-2  w-[350px] mt-[-3rem] border-b-4 top-"
          />

          <input
            ref={password}
            type="  password"
            placeholder="Password"
            className=" rounded p-2 w-[350px] bg-transparent border-b-4  flex mt-[-3rem]"
          />
          <input
            ref={ConfirmPassword}
            type=" password"
            placeholder="Confirm Password"
            className="p-2  rounded w-[350px] bg-transparent border-b-4  flex mt-[-3rem]"
          />
          <input
            ref={MobileNumber}
            type="text"
            placeholder="Mobile Number (for order status update)"
            className="p-2  rounded w-[350px] bg-transparent border-b-4  flex mt-[-3rem]"
          />
          <div className="flex flex-row gap-2 mt-[-2rem] font-serif">
            <h3 className="mr-[2rem] font-serif">Gender</h3>
            <input type="checkbox" name="Male" id="" />
            Male
            <input type="checkbox" name="Male" id="" />
            Female
          </div>

          <button
            onClick={handleButtonClick}
            className=" rounded-lg bg-black text-white w-[350px] font-serif  border-2 p-2 hover:bg-yellow-500 mt-[-2rem] "
          >
            CREATE ACCOUNT
          </button>

          <p className="text-red-500 font-bold ">{errorMessage}</p>

          <div className=" cursor-pointer flex flex-row font-serif mt-[-2rem] gap-7 font-semibold text-sm ">
            <p>Already a Customer?</p>
            <button className=" font-extrabold underline text-[1rem] hover:text-orange-500 ">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
