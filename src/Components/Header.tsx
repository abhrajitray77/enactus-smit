import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import logo from "../../public/imgs/Enactus-SMIT-dark.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const router = useRouter();


  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDisplayMenu(false);
    } else {
      setTimeout(() => {
        setDisplayMenu(true);
      }, 100);
    }
  };

  return (
    <header className="relative flex flex-row py-1 bg-slate-800 z-10 backdrop-blur-sm w-auto">
      <div className="flex items-center md:px-4 lg:px-2 md:space-x-2">
        <Image
          onClick={()=> router.push('/')}
          className="cursor-pointer object-contain"
          src={logo}
          height={60}
          width={110}
          alt="enactus_logo"
        />

        <ul className="hidden md:flex md:px-2 lg:px-6 space-x-10 text-slate-100 font-medium 
         lg:space-x-20">
          <li><Link href="/projects">Our Projects</Link></li>
          <li><Link href="/constitution">Constitution</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className=" hidden md:inline md:absolute md:py-4 md:px-4 md:inset-y-0 md:right-0
      ">
        <button className=" bg-yellow-400 rounded-md p-3 text-sm font-medium text-slate-800
        hover:text-black hover:shadow-[0_1px_4px_4px] hover:shadow-yellow-300 hover:transition hover:duration-[.3s]">
          Donate Now</button>
      </div>
      
      {/*navigation panel*/}

      <div className="flex absolute inset-y-0 right-0 top-0 md:hidden">
        <nav className={`${isOpen ? "w-[45vw]" : "w-0"} duration-[.3s] h-screen bg-slate-600/90`}>
        <ul className={`absolute right-0 mr-6 mt-[25vw] space-y-10 text-slate-100 font-medium
        md:hidden ${displayMenu ? "inline-block" : "hidden"}`} onClick={toggleMenu}>

          <li><Link href="/projects">Our Projects</Link></li>
          <li><Link href="/constitution">Constitution</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>


      {/*nav button*/}

      <div className="inline absolute py-6 px-4 inset-y-0 right-0 text-sm font-medium md:hidden cursor-pointer" >
        <Bars3Icon className={`h-6 w-6 mr-3 fill-yellow-300 transition-transform duration-[.6] ${isOpen ? "rotate-90": "rotate-0"}`} 
        onClick={toggleMenu} />
      </div>


        
    </header>
  );
};

export default Header;
