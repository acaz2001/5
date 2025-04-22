import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';

function BlogBanner() {
  return (
    <main className='flex flex-row  rounded-4xl w-[100%] h-[31rem]'>
        <section className='bg-[url(/pawel.jpg)] w-[48%] rounded-l-2xl  '>
                
        </section>
        <section className='flex flex-col justify-between w-[52%] p-8 bg-[#f9f6fe] rounded-r-2xl'>
            <div>
                <h1 className='text-[2.5rem] font-medium leading-[1.2] w-[85%]'>10 Creative Ways to Use Digital Backgrounds in Your Projects</h1>
                <p className='text-[1.1rem] text-[#6c6474] font-medium mt-5 w-[85%]'>Discover unique and inspiring ways to incorporate digital backgrounds into your designs, from websites to social media.</p>
            </div>
            <div className='relative'>
                <div className='flex flex-row items-center gap-2'>
                    <div className='rounded-full'>
                        <img className='w-[2.2rem] h-[2.2rem] rounded-full' src={"/avatar2.jpg"}></img>
                    </div>
                    <div>
                        <p className='font-medium'>Written by Sarah Miller</p>
                        <p className='text-[0.8rem] text-[#6c6474] font-normal'>Graphic Designer</p>
                    </div>
                </div>
                <Link href={`/blog/how-to-make-your-social-media`}>
                <div className='absolute bottom-0 right-0 bg-[#ede4fc] p-3 rounded-3xl transition-transform duration-400 ease-in-out cursor-pointer hover:rotate-45'>
                    <LuArrowUpRight className='text-[1.4rem] '/>
                </div>
                </Link>
            </div>
        </section>
    </main>
  )
}

export default BlogBanner
