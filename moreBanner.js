import React from 'react'

function MoreBanner() {
  return (
    <main className=' w-[100%] h-[22rem] flex flex-row justify-between mt-14 overflow-hidden'>
      <section className='group flex flex-col h-[100%] w-[31%] overflow-hidden '>
        <div className='relative  bg-cover object-top h-[80%] rounded-2xl overflow-hidden cursor-pointer'>
        <img src='/christopher.jpg' className='absolute w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.02]'></img>
            <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
                <p className='text-[0.9rem]'>Productivity</p>
            </div>
        </div>
        <div>
            <h1 className='text-[1.1rem] font-medium mt-2'>
            How to Make Your Social Media Posts Stand Out with Templates
            </h1>
        </div>
      </section>
      <section className='group flex flex-col h-[100%] w-[31%] overflow-hidden cursor-pointer '>
        <div className='relative bg-cover object-top h-[80%] rounded-2xl overflow-hidden cursor-pointer'>
        <img src='/vojtech.jpg' className='absolute w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.02]'></img>
            <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
                <p className='text-[0.9rem]'>Guides</p>
            </div>
        </div>
        <div>
            <h1 className='text-[1.1rem] font-medium mt-2'>
            The Beginner’s Guide to Using Mockups for Your Brand           
             </h1>
        </div>
      </section>
      <section className='group flex flex-col h-[100%] w-[31%] overflow-hidden '>
        <div className='relative bg-cover object-top h-[80%] rounded-2xl overflow-hidden cursor-pointer'>
        <img src='/charlesdeluvio.jpg' className='absolute w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.02]'></img>
            <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2'>
                <p className='text-[0.9rem]'>Trends</p>
            </div>
        </div>
        <div>
            <h1 className='text-[1.1rem] font-medium mt-2'>
            Why a Fast, Mobile-Friendly Store Matters for Your Customers
            </h1>
        </div>
      </section>
    </main>
  )
}

export default MoreBanner
