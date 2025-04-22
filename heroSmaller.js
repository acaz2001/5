import React from 'react'
import Link from 'next/link'

function HeroSmaller({heading, subheading}) {
  return (
    <main className=
    'bg-[#ede4fc] w-[100%] h-[350px] l'>
    <div className=
    "bg-[#ede4fc] rounded-3xl flex flex-col gap-[1rem] rounded-2x pl-20 pt-30 pr-30">              
        <div className='flex flex-col items-center'>
        <h1 style={{width:'60%', lineHeight:'1.1'}} 
         className="text-[4.2rem] tracking-tight text-center font-medium">
        <Link href="/collections">
        <span className=
        'pr-3 text-[#7c7783] transition-all duration-400 ease-in-out hover:text-black cursor-pointer'>Collection/</span>
        </Link>
        {heading}
        </h1>
         <p 
         className="w-[55%] text-center text-[1.1rem] text-[#6c6474] mt-6" >
        {subheading}
        </p>
        </div>
     </div>
      
    </main>
  )
}

export default HeroSmaller
