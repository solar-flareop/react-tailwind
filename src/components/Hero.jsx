import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center items-center">
        <p className="text-[#00df9a]">GROWING WITH DATA ANALYTICS</p>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-6 ">
          Grow with data
        </h1>
        <div className="flex ">
          <p className="font-bold mr-2 mt-1  text-xl sm:text-4xl md:text-5xl">
            Fast, flexible financing for
          </p>
          <Typed
            className="font-bold mt-1 text-xl sm:text-4xl md:text-5xl"
            strings={["BTB", "SASS", "BTC"]}
            typeSpeed={120}
            backSpeed={100}
            loop
          />
        </div>
        <p className="mt-1 font-semibold text-gray-500 md:text-2xl">
          Monitor your data analytics to increase revenue fot BTB , BTC & SASS
          🚀
        </p>
        <button className="my-6 w-32 bg-[#00df9a] rounded-md text-black font-semibold p-2">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
