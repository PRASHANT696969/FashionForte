import React from "react";

const Browse = () => {
  return (
    <>
      <div className="relative n">
        <div className="w-full z-10  blur-[1px]  ">
          <img src="./imgs/bkg.jpg" alt="img not loaded" />
        </div> 
        <div className="absolute top-[-1rem] flex items-center justify-around w-full z-30">
          <div className="flex-shrink-0">
            <img
              className=" h-40  w-[25rem]  ml-[-6rem] cursor-pointer"
              src="./imgs/logo.png"
              alt="logo not loaded"
            />
          </div>
          <div className="flex-row gap-14 flex text-center text-4xl font-serif font-bold  mt-20 ">
            <h2 className=" hover:scale-x-125 hover:scale-y-125 text-gray-600 hover:text-gray-800  cursor-pointer transition-all">
              MEN
            </h2>
            <h2 className="text-gray-600 hover:scale-x-125 hover:scale-y-125 hover:text-gray-800 cursor-pointer transition-all">
              WOMEN
            </h2>
          </div>
          <div className="flex-row gap-7 flex text-right text-white font-serif  ">
            <p className=" hover:scale-x-110 cursor-pointer transition-all ">LOG IN </p>
            <p className=" hover:scale-x-110 cursor-pointer transition-all ">
              SHOPPING BAG (0){" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
