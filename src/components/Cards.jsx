import React from "react";

const Cards = () => {
  return (
    <div className="bg-white py-36 px-4 w-full">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-4/5 mx-auto shadow-2xl flex flex-col  p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]"
            src="/single.png"
            alt="img"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send upto 2GB</p>
          </div>
          <button className="my-6 w-32 mx-auto  bg-[#00df9a]  rounded-md  font-semibold p-2 ">
            Start Trial
          </button>
        </div>

        <div className="w-4/5 mx-auto shadow-2xl flex flex-col  p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] "
            src="/double.png"
            alt="img"
          />
          <h2 className="text-2xl font-bold text-center py-8">Team</h2>
          <p className="text-center font-bold text-4xl">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">750GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted User</p>
            <p className="py-2 border-b mx-8">Send upto 5GB</p>
          </div>
          <button className="my-6 w-32 mx-auto  text-[#00df9a] bg-black rounded-md  font-semibold p-2 ">
            Start Trial
          </button>
        </div>

        <div className="w-4/5 mx-auto shadow-2xl flex flex-col  p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] "
            src="/single.png"
            alt="img"
          />
          <h2 className="text-2xl font-bold text-center py-8">Organization</h2>
          <p className="text-center font-bold text-4xl">$200</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000GB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Send upto 10GB</p>
          </div>
          <button className="my-6 w-32 mx-auto  bg-[#00df9a]  rounded-md  font-semibold p-2 ">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
