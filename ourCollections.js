import React from 'react'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu";



function OurCollections() {
  return (
    <main className='flex flex-row items-center justify-between'>
      <section className='bg-[#f9f6fe] relative w-[30%] h-[270px] rounded-3xl flex flex-col items-center justify-items-start'>
        <h1 className='text-[3.5rem] font-semibold'>Home</h1>
        <img className='absolute top-5 w-[13rem]' src={"/pngwing15.png"}></img>
        <div className='absolute h-[100%] top-[95%] right-0'>
        <LuArrowUpRight className=''/>
        </div>
        
      </section>
      <section className='bg-[#f9f6fe] relative w-[30%] h-[270px] rounded-3xl flex flex-col items-center justify-items-start'>
        <h1 className='text-[3.5rem] font-semibold'>Footwear</h1>
        <img className='absolute top-5 w-[13rem]' src={"/pngwing15.png"}></img>
        <div className='absolute h-[100%] top-[95%] right-0'>
        <LuArrowUpRight className=''/>
        </div>
        
      </section>
      <section className='bg-[#f9f6fe] relative w-[30%] h-[270px] rounded-3xl flex flex-col items-center justify-items-start'>
        <h1 className='text-[3.5rem] font-semibold'>Technology</h1>
        <img className='absolute top-5 w-[13rem]' src={"/pngwing15.png"}></img>
        <div className='absolute h-[100%] top-[95%] right-0'>
        <LuArrowUpRight className=''/>
        </div>
        
      </section>
    </main>
  )
}

export default OurCollections
