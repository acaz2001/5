import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <main className='relative mt-12 flex flex-row justify-between items-start  bg-[#ede4fc] rounded-2xl'>
      <section className='flex flex-col relative pt-17 pl-15 pr-10 pb-5'>
        <div className='absolute top-0 left-0'>
            <h1 className='text-[1.3rem]'>Commerce_</h1>
        </div>
        <div className='relative w-fit'>
            <h1 className='text-[1.8rem] font-medium w-[55%]'>
            Join our newsletter and get 20% off your first purchase with us.
            </h1>
            <input className='w-[55%] mt-3 border-[5px] bg-white border-transparent pt-2 pb-2 pl-3 rounded-2xl'
            type="text" id="fname" name="firstname" placeholder="Your email adress">
            </input>
            <button className='bg-[#8345d8] absolute bottom-15.5 left-86.5 rounded-xl pt-2 pb-2 pl-8 pr-8 text-[1.1rem]
            text-white font-[450]'>
            Join
            </button>
            <p className='w-fit mt-10 text-[#6c6474] text-[0.8rem]'>
            Created by <span className='text-black'>Aleksandar Živković</span> © 2024    
            </p>
        </div>
      </section>



      <section className='flex flex-row gap-15 pt-17 pr-20 pb-5'>
        <div >
            <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Pages</li>
                <Link href='/'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Home</li></Link>
                <Link href='/shop'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Shop</li></Link>
                <Link href='/collections'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Collections</li></Link>
                <Link href='/blog'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Blog</li></Link>
            </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Information</li>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Terms & Conditions</li>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer '>
                  Privacy policy</li>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Support</li>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  404</li>
            </ul>
        </div>
      </section>
    </main>
  )
}

export default Footer
