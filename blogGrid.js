import React from 'react'
import BlogGridCard from './blogGridCard'
import blogPosts from '../data/blogData.json';


function BlogGrid() {
  return (
    <main className='w-[100%] h-fit grid grid-cols-3 grid-rows-auto gap-5'>
      {blogPosts.map((post) => (
        <BlogGridCard key={post.slug} post={post} />
      ))}
    </main>
  )
}

export default BlogGrid
