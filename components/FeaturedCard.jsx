"use client";
import Image from 'next/image';
import React from 'react'
import { GlareCard } from './ui/glare-card';

const FeaturedCard = ({heading,description,image}) => {
  return (
    <div className="feature-card bg-[#4C88E8] border-2 border-[#4CFB67] p-5 rounded-3xl max-w-[1100px] mx-auto relative min-h-[350px]">
      <div className='w-[40%]'>
      <Image 
      src={image}
      className='w-[300px] lg:absolute bottom-0 my-7'
      />
      </div>
      <div className="feature-content flex-1 flex items-start flex-col gap-2">
          <h3 className='text-4xl font-bold'>{heading}</h3>
          <p className='text-left text-xl'>{description}</p>
      </div>
    </div>
    
  )
}

export default FeaturedCard