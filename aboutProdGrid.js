// components/AboutProdGrid.jsx
import React from 'react'

function AboutProdGrid({ children }) {
  return (
    <main className='mt-12 flex flex-row gap-[4%] overflow-x-auto'>
      {children}
    </main>
  )
}

export default AboutProdGrid
