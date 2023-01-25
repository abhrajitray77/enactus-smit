import Head from 'next/head'
import React from 'react'
import Image from "next/image";
import kunal from "../../public/imgs/Kunal.png";
import ahana from "../../public/imgs/Ahana.png";
import yash from "../../public/imgs/Yash.png";


const partners = () => {
  return (
    
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="relative flex bg-gradient-to-r from-purple-400">
        <article className="flex flex-col ml-8 mt-6 mb-10 lg:flex lg:flex-col lg:ml-20 w-[80%] md:w-[65%] lg:w-[50%] lg:mt-16 lg:mb-24 z-10">
        <h1 className="flex justify-center whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[5.2rem] font-semibold text-gray-900 
      bg-gradient-to-r from-purple-900 via-stone-900  to-black mt-16 drop-shadow-md shadow-black
          bg-clip-text text-transparent">Our Partners</h1>
        </article>
        </section>
      </div>




      
     
      
      
  )
}

export default partners