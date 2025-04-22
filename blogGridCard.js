import React from 'react'
import Link from 'next/link'

function BlogGridCard({ post }) {
  if (!post) return null;

  return (
    <Link href={`/blog/${post.slug}`}>
      <section className='group h-[22rem] w-full overflow-hidden cursor-pointer'>
        <div className='relative h-[80%] rounded-2xl overflow-hidden bg-cover object-top'>
          <img
            src={`/${post["image"]}.avif`}
            alt={post.title}
            className='absolute w-full h-full object-cover transition-all duration-400 ease-in-out group-hover:scale-[1.02]'
          />
          <div className='absolute bg-[#ede4fc] rounded-2xl font-medium pt-0.5 pb-0.5 pl-2 pr-2 m-2'>
            <p className='text-[0.9rem]'>{post.categorie}</p>
          </div>
        </div>
        <div>
          <h1 className='text-[1.1rem] font-medium mt-2'>
            {post.title}
          </h1>
        </div>
      </section>
    </Link>
  );
}

export default BlogGridCard;
