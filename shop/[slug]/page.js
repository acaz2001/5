
import React from 'react'
import { PiCursorFill } from "react-icons/pi";
import FaqShop from '../../../components/faqShop';
import AboutProdGrid from '../../../components/aboutProdGrid';
import AboutProd from '../../../components/aboutProd';
import Link from 'next/link';
import Testimonials from '../../../components/testimonials';
import productPosts from '../../../data/products.json';
import ProductClient from '../../../components/ProductClient';


export async function generateStaticParams() {
    return productPosts.map((product) => ({
      slug: product.slug,
    }));
  }

function Page({ params }) {
    const product = productPosts.find((p) => p.slug === params.slug);

    if (!product) return <p>Product not found</p>;

    const features = [
        {
          icon: <PiCursorFill className='text-[1.2rem]' />,
          title: "30 Day Returns",
          description: "Enjoy hassle-free returns with our 30-day policy for peace of mind."
        },
        {
          icon: <PiCursorFill className='text-[1.2rem]' />,
          title: "Next Day Delivery",
          description: "Get your order delivered fast with our reliable next-day delivery service."
        },
        {
          icon: <PiCursorFill className='text-[1.2rem]' />,
          title: "International Shipping",
          description: "Shop from anywhere with convenient worldwide shipping."
        },
        {
            icon: <PiCursorFill className='text-[1.2rem]' />,
            title: "0% Finance Available",
            description: "Spread the cost of your purchase with 0% interest finance plans."
        }
      ]



  return (
    <main className='pt-25 w-[100%]'>

<ProductClient product={product} />;

        <section>
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
        </section>


        <section className='flex flex-row gap-[5%] w-[100%]  mt-10'>
            <div style={{ backgroundImage: `url(/${product.infoImg1}.jpg)` }}
             className='w-[100%] rounded-2xl'>
            </div>

            <div className='w-[100%] h-[100%] flex flex-col gap-4 pt-62 pb-62'>
                <h1 className='text-[2.8rem] font-[450]'>{product.infoTitle1}</h1>
                <p className='text-[#6c6474] text-[1.1rem]'>
                {product.infoDesc1} 
                </p>
            </div>
        </section>


        <section>
            <Testimonials></Testimonials>
        </section>


        <section className='flex flex-row gap-[5%] w-[100%] mt-10'>
            <div 
            className='w-[100%] h-[100%] flex flex-col gap-4 pt-62 pb-62'>
                <h1 className='text-[2.8rem] font-[450] leading-[1.1] '>{product.infoTitle2}</h1>
                <p className='text-[#6c6474] text-[1.1rem]'>
                {product.infoDesc2} 
                </p>
            </div>
            <div className=
            'bg-[url(/clark-van-der-beken-Tk0B3Dfkf_4-unsplash.jpg)] w-[100%] rounded-2xl'
            style={{ backgroundImage: `url(/${product.infoImg2}.jpg)` }}>
            </div>
        </section>
      
    </main>
  )
}

export default Page
