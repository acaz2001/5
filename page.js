'use client'
import Image from "next/image";
import { FaShopify } from "react-icons/fa";
import { Inter } from 'next/font/google'
import { LuArrowUpRight } from "react-icons/lu";
import "./globals.css";
import { GoArrowRight } from "react-icons/go";
import MostPopular from "../components/mostPopular";
import Testimonials from "../components/testimonials";
import OurCollections from "../components/ourCollections";
import AboutProd from "../components/aboutProd";
import BlogBanner from "../components/blogBanner";
import MoreBanner from "../components/moreBanner";
import VideoHero from "../components/videoHero";
import AboutProdGrid from "../components/aboutProdGrid";
import Link from "next/link";
import ProductList from "../components/productList";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaDiamond } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";


export default function Home() {



  const features = [
    {
      icon: <AiFillThunderbolt className='text-[1.2rem]' />,
      title: "Instant Digital Downloads",
      description: "Access your digital products purchase immediately after checkout."
    },
    {
      icon: <FaDiamond className='text-[1.2rem]' />,
      title: "Premium Quality Files",
      description: "All files are high-resolution and carefully crafted for professional use."
    },
    {
      icon: <FaForward className='text-[1.2rem]' />,
      title: "Fast & Easy Integration",
      description: "Easily add your assets to any platform, with ready-to-use formats."
    }
  ]

  
  return (
    <main>
        <section className="custom-box">
        {/*<div class="cutout"></div> */}
          <div className="bg-[url(/clark-van-der-beken-Tk0B3Dfkf_4-unsplash.jpg)] rounded-2xl flex flex-col gap-[2rem] pl-20 pt-38 pb-30 pr-30">
            <div className="bg-white w-fit p-1 pl-3 pr-3 rounded-2xl flex flex-row items-center gap-[0.5rem]">
              <FaShopify/>
              <p className="text-[0.8rem] font-medium">Powered by Shopify</p>
            </div>
    
            <div>
              <h1 style={{width:'65%', lineHeight:'1.1'}} className="text-[4.2rem] tracking-tight">The <span className="text-[#8345d8]">beautiful</span> way to sell anything with Framer.</h1>
              <p style={{width:'40%'}} className="text-[1.2rem] text-[#6c6474] mt-6" >Designed with Framer, this template makes it easy to turn your website into a powerful ecommerce store.</p>
            </div>
            <Link href='/shop'>
            <div className=
            "group relative  w-fit rounded-3xl flex flex-row items-center gap-[0.5rem]  pt-1 pb-4 ">
              <LuArrowUpRight 
              className="absolute right-3 text-[1.2rem] z-10 transition-transform duration-400 ease-in-out group-hover:rotate-45" />
              <div className="absolute bg-white rounded-3xl w-[100%] h-full z-1 opacity-50"></div>
              <h4 className="text-[1rem] pl-7 z-10 pr-15 font-medium">Shop Products</h4>
              <div className='absolute right-0.5 bg-white rounded-full w-10 p-5 z-9 transition-all duration-500 
              ease-in-out group-hover:w-[98%]' />

            </div>
            </Link>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between mt-8 mb-8">
          <div>
            <h1 className="text-[1.5rem] font-medium">Most Popular</h1>
            <p className="text-[#6c6474] mt-1.5">
            Showcase your most popular products, front and center.
            </p>
          </div>
          
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer pt-1.5 pb-1.5 pl-4 pr-3 
          rounded-full hover:bg-[#ede4fc]">
            <Link href='/shop'>
            <p className="font-medium">View All</p>
            </Link>
            <GoArrowRight className="text-[1.1rem] font-bold"/>
          </div>
          
        </section>

        <ProductList isPopular="true" />

        <Testimonials></Testimonials>


        <section className="flex flex-row items-center justify-between mt-8 mb-8">
          <div>
            <h1 className="text-[1.5rem] font-medium">Our Collections</h1>
            <p className="text-[#6c6474] mt-1.5">
            Showcase all of the different collections you have to offer.
            </p>
          </div>
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer pt-1.5 pb-1.5 pl-4 pr-3 rounded-full hover:bg-[#ede4fc]">
            <p className="font-medium">View All</p>
            <GoArrowRight className="text-[1.1rem] font-bold"/>
          </div>
        </section>


        <OurCollections></OurCollections>

        <section className="mt-20">
        <VideoHero></VideoHero>
        </section>
        

        <section className="flex flex-col items-center mt-10">
          <h1 className="text-[2.5rem] font-medium">
          Highlight what makes you stand out
          </h1>
          <p className="text-[#6c6474] mt-4">
          Use this section to show off the key features like these.
          </p>
        </section>

        <AboutProdGrid>
        {features.map((item, index) => (
          <AboutProd
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
        </AboutProdGrid>



        <section className="flex flex-row items-center justify-between mt-20  mb-8">
          <div>
            <h1 className="text-[1.5rem] font-medium">Explore the blog</h1>
            <p className="text-[#6c6474] mt-1.5 font-normal">
            Share insights, boost SEO, and build trust with your audience.
            </p>
          </div>
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer pt-1.5 pb-1.5 pl-4 pr-3 rounded-full hover:bg-[#ede4fc]">
            <p className="font-medium">View Posts</p>
            <GoArrowRight className="text-[1.1rem] font-bold"/>
          </div>
        </section>

        <BlogBanner></BlogBanner>

        <MoreBanner></MoreBanner>


        

    </main>
  );
}
