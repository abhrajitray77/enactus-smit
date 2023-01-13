import Image from "next/image";
import React from "react";
import bgimg from "../../public/imgs/we are enactus.png";


const Banner = () => {
  return (
    <div className="flex bg-gradient-to-r from-black via-slate-400 to-black w-full justify-center">
    <div className=" h-100% ">
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
