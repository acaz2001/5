import blogPosts from '../../../data/blogData.json';



export async function generateStaticParams() {
    return blogPosts.map(post => ({ slug: post.slug }));
  }

  export default function Page({ params }) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) return <p>Blog post nije pronađen.</p>;

    return (
    <main className='flex flex-col   items-start w-[100%] '>
    <section className='flex flex-col gap-5 pt-40 bg-[#f9f6fe] px-65'>
        <div className='flex flex-col gap-5'>
            <h1 className=
            'text-[2.8rem] font-medium leading-[1.15]'>{post.title}</h1>
            <p className=
            'text-[1.1rem] text-[#6c6474]'>{post.desc}</p>
        </div>
        
        <div className='flex flex-col gap-5'>
        <div className='flex flex-row items-center gap-2'>
            <div className='rounded-full'>
                <img className='w-[2.2rem] h-[2.2rem] rounded-full' src={`/${post["avatarimg"]}.jpg`}></img>
            </div>
            <div>
                <p className='font-medium'>Written by <span>{post.avatarname}</span></p>
                <p className='text-[0.8rem] text-[#6c6474] font-normal'>{post.avatarjob}</p>
            </div>
        </div>
        <img src={`/${post["image"]}.avif`} className='rounded-t-2xl'></img>
        </div>
    </section> 

    
    <section className='flex flex-col pt-10 px-65 gap-4'>
        <p className='text-[1.1rem]'>{post.content}</p>
        <h1 className='text-[1.8rem] font-medium'>{post.section1}</h1>
        <p className='text-[1.1rem]'>{post.text1}</p>
        <h3 className='text-[1.5rem] font-medium'>{post.section2}</h3>
        <p className='text-[1.1rem]'>{post.text2}</p>
        <h3 className='text-[1.5rem] font-medium'>{post.section3}</h3>
        <p className='text-[1.1rem]'>{post.text3}</p>
        <h3 className='text-[1.5rem] font-medium'>{post.section4}</h3>
        <p className='text-[1.1rem]'>T{post.text4}</p>
    </section>
      
    </main>
    )

  }




  