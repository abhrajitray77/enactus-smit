import Image from "next/image";
import React from "react";
import logo from "../../public/imgs/enactus.png"

const Header = () => {
  return (
    <header className="relative flex flex-row py-4 bg-slate-300/30 z-10 backdrop-blur-sm">
      <div className="flex items-center space-x-2 md:px-4 lg:px-6 md:space-x-10">
        <Image
          className="cursor-pointer object-contain"
          src={logo}
          height={50}
          width={50}
          alt="enactus_logo"
        />

        <ul className="flex md:px-2 lg:px-6 space-x-10 text-slate-100 font-medium 
        cursor-pointer lg:space-x-20">
          <li>Who we are</li>
          <li>What we do</li>
          <li>Our Teams</li>
          <li>Updates</li>
        </ul>
      </div>
      <div className="hidden md:inline md:absolute md:py-4 md:px-4 md:inset-y-0 md:right-0
      ">
        <button className=" bg-yellow-400 rounded-md p-3 text-sm font-medium text-slate-800
        hover:text-black hover:shadow-[0_1px_4px_4px] hover:shadow-yellow-300 hover:transition hover:duration-[.8s]">
          Donate Now</button>
      </div>
    </header>
  );
};

export default Header;
