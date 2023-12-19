import React from "react";

const Browse = () => {
  return (
    <>
      <div className="relative n">
        <div className="w-full z-10  blur-[1px]  ">
          <video src="/videos/bg-video.mp4" loop muted  autoPlay alt="img not loaded " className= "w-full h-screen object-cover  scale-x-[-1]" />
        </div> 
        <div className="absolute top-[-1rem] flex items-center justify-around w-full z-30">
          <div className="flex-shrink-0">
            <img
              className=" h-64  filter invert w-max  ml-[-6rem]   -mt-9 shadow-sm cursor-pointer"
              src="./imgs/logo.png"
              alt="logo not loaded"
            />
          </div>
          <div className="flex-row gap-14 flex text-center text-4xl font-serif font-bold mt-32 ">
            <h2 className=" hover:scale-x-125 hover:scale-y-125 text-gray-700  hover:text-gray-900   cursor-pointer transition-all ">
                          MEN
            </h2>
            <h2 className="text-gray-700 hover:scale-x-125 hover:scale-y-125 hover:text-gray-900 cursor-pointer transition-all">
                          WOMEN
            </h2>
          </div>
          <div className="flex-row gap-7 flex text-right text-white font-serif  ">
            <p className=" hover:scale-x-110 cursor-pointer transition-all ">
                          LOG IN 
            </p>
            <p className=" hover:scale-x-110 cursor-pointer transition-all ">
                          SHOPPING BAG (0)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
