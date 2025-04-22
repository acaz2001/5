import React from 'react'
import Product from './product'
import productPosts from '../data/products.json';

function ProductList({ activeCategory }) {
  const filteredPosts = activeCategory === 'All'
  ? productPosts
  : productPosts.filter(post => post.category === activeCategory);

  return (
    <main className='grid grid-cols-3 auto-rows-auto gap-12 w-[100%] p-0 m-0'>
      {filteredPosts.map((post) => (
        <Product key={post.slug} post={post} />
      ))}
    </main>
  )
}

export default ProductList
