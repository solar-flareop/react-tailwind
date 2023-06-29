import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-white py-16 px-4 w-full bg-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 lg:mx-auto">
        <div className="lg:col-span-2">
          <h1 className="font-bold py-2 text-2xl sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow ?
          </h1>
          <p>Sign up to our newsletter and stay upto date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter email"
              name="email"
              id="emailId"
            />
            <button className="my-6 w-32  bg-[#00df9a] ml-4 rounded-md text-black font-semibold p-2">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className=" text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
