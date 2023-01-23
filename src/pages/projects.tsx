import Image from 'next/image'
import React from 'react'
import anna from '../../public/imgs/annadristi.jpeg'

const projects = () => {
  return (
    <div className="relative w-full h-full md:h-[100vh] bg-gradient-to-t from-lime-500 via-transparent">
      <div className="invisible md:visible absolute w-full h-full opacity-0 md:opacity-80 lg:opacity-100 transition-opacity duration-700">
        <span className="absolute flex flex-row h-[130px] w-[96%] mt-16 right-0 bg-lime-600"></span>
        <span className="absolute h-[350px] w-[30%] mt-16 right-0 bg-lime-600"></span>
        <span className="absolute h-[130px] w-[41%] mt-[520px] right-0 bg-lime-600"></span>
        <span className="absolute h-[440px] w-[15%] mt-[150px] right-[374px] bg-lime-600"></span>
      </div>
       <section className="relative flex md:flex-row flex-col py-10 md:py-0">
        <article className="flex flex-col ml-8 md:ml-14 mt-16 mb-10 lg:flex lg:flex-col lg:ml-20 w-[80%] md:w-[65%] lg:w-[50%] lg:mt-16 lg:mb-24 z-10">
          <h1 className="whitespace-nowrap text-[3rem] md:text-[3.5rem] lg:text-[5.2rem] font-semibold text-slate-900">अन्न-Drishti</h1>
          <p className="text-justify md:text-[1.2rem] lg:text-[1.5rem] text-gray-900 font-medium indent-20 mt-8 leading-relaxed">
            <span className="text-[1.3rem] md:text-[1.7rem] lg:text-[2rem] font-semibold">We, at Enactus SMIT, </span> 
             through our project<span className="lg:text-[1.6rem] font-semibold"> अन्न-Drishti</span>, aim to eliminate
            food wastage by processing the wasted food into useful manures and
            fertilisers.
            The project will contact our hostel mess to give us the food thrown away
            every day. Apart from this, we will also be contacting local restaurants and
            colleges for the same.
            Once collected, our team will process it into manure and biogas with the
            help of local communities around us thus promoting Social
            Entrepreneurship.
            The produced biogas and manure will then be sold to local businesses,
            tea-estates and online.
          </p>
        </article>
        <div className="relative ml-auto mr-auto md:ml-12 w-[300px] md:mt-52 lg:mt-28 lg:ml-20 lg:w-[500px] lg:z-10">
          <Image
            src = {anna}

            alt = "anna drishti"
          />
        </div>

      </section>
    </div>
  )
}

export default projects