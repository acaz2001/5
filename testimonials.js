'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import testimonialsData from '../data/testimonialsData.json';
import BrendSlider from './brendSlider';

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonialsData[current];

  return (
    <main className='relative bg-[#f9f6fe] w-full flex flex-col items-center pt-20 pb-20 mt-12 gap-12 z-5'>
        {/* Arrows */}
        <section className='absolute top-0 right-0 flex flex-row gap-5'>
          <div className=' cursor-pointer'>
            <FiChevronLeft size={32} onClick={handlePrev} />
          </div>
          <div className=' cursor-pointer'>
            <FiChevronRight size={32} onClick={handleNext} />
          </div>
        </section>
      <section className='flex flex-col items-center gap-5 relative'>
        <img
          className='rounded-full w-20 h-20 object-cover
          transition-all duration-400 ease-in-out'
          src={`/${currentTestimonial.avatarImage}.jpg`}
          alt='Customer avatar'
        />
        <h1 className='text-[1.4rem] sm:text-[2rem] leading-[1.2] 
        lg:text-[2.5rem] w-[80%] text-center font-[450]'>
          {currentTestimonial.title}
        </h1>

        {/* Stars */}
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-row items-center gap-1 text-yellow-500'>
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
          </div>
          <h2 className='text-[1.1rem] text-[#6c6474]'>Your Customer</h2>
        </div>



      </section>

      {/* Logos below */}
      <section className='flex flex-col items-center mt-5'>
        <p className='text-[#6c6474]'>
          Feature client logos to build trust and credibility for your brand:
        </p>
        <div className='w-[32%] mt-4'>
          <BrendSlider />
        </div>
      </section>
    </main>
  );
}

export default Testimonials;
