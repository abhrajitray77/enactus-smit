import React from 'react'

interface CardProps {
    title: string,
    description: string,
    image: string,
    link?: string
}

export const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
    return (
    <div className="relative flex rounded-xl shadow-lg mb-7 bg-gradient-to-br from-amber-400 via-yellow-400 to-yellow-400
    h-80">
    <div className=" px-6 py-10 ">
      <div className="font-bold text-black text-xl mb-4">{title}</div>
      <p className="text-black text-base">
        {description}
      </p>
    <div className="absolute bottom-4 ">
      <a href={link} className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-6 rounded-full">
        Learn More
      </a>
    </div>
  </div>
  </div>
  )
}
