
import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link'

function Product({ post }) {
  if (!post) return null;

  return (
    <main className='group w-[100%] '>
      <div className='bg-[#f9f6fe] flex items-center justify-center relative w-[100%] h-[82%] rounded-2xl cursor-pointer'>
        <img src={`/${post["image"]}.png`} 
        className='w-[90%] p-5 transition-all duration-400 ease-in-out group-hover:scale-[1.05]
        object-cover object-center'>
        </img>
        <div className='absolute bottom-0 right-0'>
            <Link href={`/shop/${post.slug}`}>
            <LuArrowUpRight className=
            'text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
            </Link>
        </div>
      </div>
      <div className='mt-2'>
        <h1 className='text-[1.3rem] font-medium'>
        {post.name}
        </h1>
        <p className='text-[0.9rem] text-[#6c6474] font-medium mt-1'>
        USD <span>{post.price}$</span>    
        </p>
      </div>

    </main>
  )
}

export default Product
