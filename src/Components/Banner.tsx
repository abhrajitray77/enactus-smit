import Image from "next/image";
import React from "react";
import bgimg from "../../public/imgs/we are enactus.png";
import entext from "../../public/imgs/enactus.png";


const Banner = () => {
  return (
    <div className="relative flex w-full justify-end">
      <div className="absolute box-border flex flex-col z-20 left-6 md:left-10 lg:left-14 h-full justify-center">
        <Image className="w-[30px] md:w-[80px] lg:w-[100px]"
        src = {entext}
        width={100}
        height={100}
        alt="enactus-text-logo"
         />
        <h1 className="text-[3.2rem] md:text-[5rem] lg:text-[7rem] text-yellow-500 font-semibold leading-tight">Enactus</h1>
        <h2 className="text-[2.1rem] md:text-[4rem] lg:text-[4rem] text-orange-600 font-semibold leading-tight">SMIT</h2>
      </div>
      <div className="absolute bg-gradient-to-r from-black via-zinc-900 w-full h-full z-0"></div>
    <div className="inline-flex h-100% ">
      <Image className=""
        src={bgimg}
        width={900}
        height={500}
        alt="bg"
      />
    </div>
  </div>
  );
};

export default Banner;
