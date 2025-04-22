import React from 'react'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';


function OurCollections() {
  return (
    <main className='flex flex-row items-center justify-between'>
      
      <section className='group bg-[#f9f6fe] relative w-[32%] h-[275px] rounded-3xl flex flex-col items-center justify-items-start cursor-pointer'>
        <Link href='/collections/home'>
        <h1 className=
        'pt-1 text-[3.8rem] font-semibold transition-all duration-400 ease-in-out group-hover:scale-[1.05]'>
        Home</h1>
        <img className='absolute top-5 left-28 w-[14rem] ' src={"/pngwing15.png"}></img>
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div> 
        </Link>
      </section>


      <section className='group bg-[#f9f6fe] relative w-[32%] h-[275px] rounded-3xl flex flex-col
      justify-items-center items-center cursor-pointer'>
        <Link href='/collections/footwear'>
        <h1 className='text-[3.8rem] font-semibold transition-all duration-400 ease-in-out group-hover:scale-[1.05]'>Footwear</h1>
        <img className='absolute top-5 w-[14rem]' src={"/Sneakers.png"}></img>
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        </Link>
      </section>


      <section className='group bg-[#f9f6fe] relative w-[32%] h-[275px] rounded-3xl flex flex-col items-center justify-items-start cursor-pointer'>
        <Link href='/collections/technology'>
        <h1 className='text-[3.8rem] font-semibold transition-all duration-400 ease-in-out group-hover:scale-[1.05]'>Technology</h1>
        <img className='absolute top-5 left-28 w-[14rem]' src={"/headphones.png"}></img>
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        </Link>
      </section>
    </main>
  )
}

export default OurCollections
