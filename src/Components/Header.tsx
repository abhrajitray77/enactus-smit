import Image from "next/image";
import React from "react";
import logo from "../../public/imgs/enactus.png"

const Header = () => {
  return (
    <header className=" bg-slate-600">
      <div className="flex items-center py-6">
        <Image
          className="cursor-pointer object-contain"
          src={logo}
          height={50}
          width={60}
          alt="enactus_logo"
        />

        <ul className="flex px-6 space-x-4">
          <li>Who we are</li>
          <li>What we do</li>
          <li>Our Team</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
