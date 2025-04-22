import React from 'react'

function Hero({ heading, subheading, badgeText }) {
  return (
    <main>
      <div className="bg-[#ede4fc] rounded-3xl flex flex-col items-center gap-[1rem] pl-20 pt-30 pb-30 pr-30">
        {/* Badge */}
        <div className="bg-[#f7f3fe] w-fit p-1 rounded-2xl flex flex-row gap-[0.5rem]">
          <p className="text-[0.8rem] font-medium pt-0.5 pb-0.5 pl-1.5 pr-1.5">{badgeText}</p>
        </div>

        {/* Heading and Subheading */}
        <div className='flex flex-col items-center'>
          <h1 style={{ width: '60%', lineHeight: '1.1' }} className="text-[4.2rem] tracking-tight text-center font-medium">
            {heading}
          </h1>
          <p style={{ width: '55%' }} className="text-center text-[1.2rem] text-[#6c6474] mt-6">
            {subheading}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Hero;
