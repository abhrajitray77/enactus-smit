import Image from "next/image";
import React from "react";
import bgimg from "../../public/imgs/we are enactus.png";


const Banner = () => {
  return (
    <div className="absolute -z-10 top-0 left-0 h-screen">
      <Image
        src={bgimg}
        width={1920}
        height={1080}
     //   style={{ objectFit: "cover", width: "100%", height: "100%" }}
        alt="bg"
      />
    </div>
  );
};

export default Banner;
