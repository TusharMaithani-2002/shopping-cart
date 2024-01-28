import React from 'react'
import StarRating from './StarRating'
import CartButton from './CartButton';

const ProductCard = ({product}) => {

  return (
    <div className='flex flex-col justify-center p-3 rounded-md shadow-lg shadow-slate-400'>
      <img src={product.image} alt={product.name} className='rounded-md'/>
      <div className='font-bold text-2xl'>{product.name}</div>
      <div className='font-semibold text-xl'>₹ {product.price}</div>
      <div className='font-bold'>{
        product.fastDelivery ? "Fast Delivery" : "4 days delivery"
      }</div>
      <div className='flex items-center sm:flex-wrap'>
        <span className='max-sm:text-[0px]'>
        Ratings
        </span>
        <StarRating ratings={product.ratings} /></div>
        <CartButton product={product} />
      
    </div>
  )
}

export default ProductCard

