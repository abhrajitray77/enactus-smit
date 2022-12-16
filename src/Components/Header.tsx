import Image from "next/image";
import React from "react";
import logo from "../../public/imgs/enactus.png"

const Header = () => {
  return (
    <header className=" bg-slate-300/30 z-10">
      <div className="flex items-center py-4 space-x-2 md:px-4 lg:px-6 md:space-x-10">
        <Image
          className="cursor-pointer object-contain"
          src={logo}
          height={100}
          width={100}
          alt="enactus_logo"
        />

        <ul className="flex md:px-2 lg:px-6 space-x-10 text-slate-100 font-medium 
        cursor-pointer lg:space-x-20">
          <li>Who we are</li>
          <li>What we do</li>
          <li>Our Teams</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
