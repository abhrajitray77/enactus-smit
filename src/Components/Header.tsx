import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import logo from "../../public/imgs/enactus.png";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDisplayMenu(false);
    } else {
      setTimeout(() => {
        setDisplayMenu(true);
      }, 200);
    }
  };

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

        <ul className="hidden md:flex md:px-2 lg:px-6 space-x-10 text-slate-100 font-medium 
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
      
      {/*navigation panel*/}

      <div className="flex absolute inset-y-0 right-0 top-0 md:hidden">
        <nav className={`${isOpen ? "w-[45vw]" : "w-0"} duration-[.3s] h-screen bg-slate-600/90`}>
        <ul className={`absolute right-0 mr-6 mt-[25vw] space-y-10 text-slate-100 font-medium cursor-pointer 
        md:hidden ${displayMenu ? "inline-block" : "hidden"}`}>
            <li>Who we are</li>
            <li>What we do</li>
            <li>Our Teams</li>
            <li>Updates</li>
          </ul>
        </nav>
      </div>


      {/*nav button*/}

      <div className="inline absolute py-6 px-4￼ inset-y-0 right-0 text-sm font-medium md:hidden">
        <Bars3Icon className={`h-6 w-6 mr-3 fill-yellow-300 transition-transform duration-[.6] ${isOpen ? "rotate-90": "rotate-0"}`} 
        onClick={toggleMenu} />
      </div>


        
    </header>
  );
};

export default Header;
