import React from "react";

const Front = () => {
  return (
    <>
      <div className="w-full h-screen  ">
        <img
          className="top-0 left-0 w-full h-screen object-cover  "
          src="https://www.istockphoto.com/photo/get-some-summer-in-your-life-gm820873998-132689575?searchscope=image%2Cfilm"
          alt=""
        />
        <div className="bg-black/50 absolute top-0 left-0  w-full h-screen "></div>

        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white" >
          <div  className="md:left-[10%] max-w-[1100px] m-auto absolute p-4  " >
            <p  >All Inclusive</p>
            <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl " >Private Beaches and Gateways </h1>
            <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl  " >
              If you want to be a software engineer, you have to become
              comfortable building things without all the experience you need to
              build them.
            </p>
            <button className="bg-white text-black " >Reserved Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;
