import React from "react";
import HeroImage from "../assets/Hero.png";

const hero = () => {
  return (
    <div className="flex flex-row bg-gray-100 ">
      <img
        src={HeroImage}
        alt="Hero Image"
        className="w-[30vw] h-[30vw] max-w-[280px] max-h-[280px] rounded-full object-cover"
      />
      <h1 className="text-3xl font-bold pl-12">Pravesh Chaudhar</h1>
    </div>
  );
};

export default hero;
