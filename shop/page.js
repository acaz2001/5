'use client'
import React from 'react'
import Hero from '../../components/hero'
import Product from '../../components/product'
import ProductList from '../../components/productList'
import { LuCircle } from "react-icons/lu";
import { useState } from 'react';

function Page() {
  const categories = ['All', 'Technology', 'Footwear', 'Home']
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <main>
      <Hero
        badgeText="Shop"
        heading="Showcase all your products in one place"
        subheading="Use this page to group your products into simple collections, making it easy for customers to explore."
      />

      <section className='flex flex-row justify-between mt-10 mb-20'>
        {/* Sidebar */}
        <div className='w-[18%]'>
          <div>
            <h1 className='text-[1.3rem] font-medium'>Shop</h1>
            <p className='text-[1rem] text-[#6c6474] font-normal mt-1'>
              Split your products into categories so visitors can easily navigate.
            </p>
          </div>

          <div className='flex flex-col gap-4 mt-5'>
            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className='group flex flex-row items-center gap-1.5 border-b pb-4 cursor-pointer'
              >
                <svg width="18" height="18">
                  <circle
                    cx="8"
                    cy="8"
                    r="8"
                    fill={activeCategory === cat ? 'black' : '#ebebeb'}
                    className='transition-all duration-400 ease-in-out group-hover:fill-black'
                  />
                </svg>
                <h1 className={`font-medium ${activeCategory === cat ? 'text-black' : 'text-[#6c6474]'}`}>
                  {cat}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className='w-[78%] flex'>
          <ProductList activeCategory={activeCategory} />
        </div>
      </section>
    </main>
  )
}

export default Page