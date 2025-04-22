import React from 'react'
import { GoSearch } from "react-icons/go";
import { PiBasketFill } from "react-icons/pi";
import Link from 'next/link'


function Header() {
  return (
    <main className='absolute flex flex-row items-center w-fit gap-3 p-4 bg-white rounded-xl'>
      <section className='mr-3'>
        <Link href="/">
        <h2 className='text-[1.3rem] font-medium cursor-pointer'>
        Commerce_</h2>
        </Link>
      </section>
      <section >
        <ul className='flex flex-row items-center gap-3 text-[0.9rem]'>
            <Link href="/shop"><li className='cursor-pointer hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3'>Shop</li></Link>
            <Link href="/collections"><li className='cursor-pointer  hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3'>Collections</li></Link>
            <Link href="/blog">
            <li className='cursor-pointer  hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3'>Blog</li>
            </Link>
            <Link href="/support">
            <li className='cursor-pointer  hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3'>Support</li>
            </Link>
        </ul>
      </section>
      <section className='flex flex-row items-center gap-3'>
        <GoSearch className='text-[1.1rem]'/>
        <PiBasketFill className='text-[1.3rem]'/>
      </section>
    </main>
  )
}

export default Header
