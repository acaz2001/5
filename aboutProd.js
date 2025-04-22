// components/AboutProd.jsx
import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs"

function AboutProd({ icon, title, description }) {
  return (
    <section className='relative pt-15 pb-10 pl-7 bg-[#f9f6fe] rounded-2xl w-[31.5%]'>
      <div className='absolute top-0 left-0 bg-[#ede4fc] p-4 rounded-full'>
        {icon}
      </div>
      <div className='mt-10 w-fit'>
        <h1 className='w-fit text-[1.1rem] font-medium'>{title}</h1>
        <p className='mt-2 text-[#6c6474] text-[0.95rem] w-[90%]'>{description}</p>
      </div>
    </section>
  )
}

export default AboutProd
