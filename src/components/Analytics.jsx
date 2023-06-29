import React from "react";

const Analytics = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-96 mx-auto my-4" src="/laptop.jpg" alt="laptop" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl font-bold py-2  sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel voluptates libero rem aliquam quis, quidem alias, eligendi,
            maiores fuga ut vero odio. Magnam itaque soluta a laborum, et
            veritatis?
          </p>
          <button className="my-6 w-32  text-[#00df9a] rounded-md bg-black font-semibold p-2 mx-auto md:ml-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
