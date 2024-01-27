import React from 'react'
import StarRating from './StarRating'
const CartPageItem = ({item}) => {
    const {product,qty} = item;
  return (
    <div className='flex bg-red-500 border border-black gap-2 justify-around'>
        <img src={product.image} alt={product.name} className='w-1/6 h-[80px]'/>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <StarRating ratings={product.ratings}/>
    </div>
  )
}

export default CartPageItem
