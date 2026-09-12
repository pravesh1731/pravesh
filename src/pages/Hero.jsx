import React from "react";
import HeroImage from "../assets/Hero.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-row items-center justify-center">
        <img
          src={HeroImage}
          alt="Hero Image"
          className="w-[30vw] h-[30vw] max-w-[250px] max-h-[250px] rounded-full object-cover border-1 border-gray-200"
        />
        <div>
          <h1 className="text-4xl font-medium pl-12 pb-1">Pravesh Chaudhary</h1>
          <h1 className="text-3xl font-medium pl-12 pb-4">
            A Software Developer
          </h1>
          <p className="text-md pl-12 text-gray-600">
            I am a passionate software developer with hand on professional
            experience in building App and Web applications form scratch to
            production.
          </p>
          <div className="pl-12 pt-4">
            <div className="group flex items-center gap-2 cursor-pointer pt-2">
              <Button px="px-4" py="py-1" title="Contact Me" />
              <span className="pl-2"></span>

              <Button px="px-7" py="py-1" title="Resume" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
