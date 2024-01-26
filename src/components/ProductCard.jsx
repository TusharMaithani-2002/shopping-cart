import React from 'react'
import StarRating from './StarRating'
import { CartState } from '../context/context'

const ProductCard = ({product}) => {

  const {cartState,cartDispatch} = CartState();

  const hanleClick = () => {
    cartDispatch({
      ...cartState,
      carts:cartState.cart.push({
        product,qty:1
      })
    });
    console.log("added in cart");
  }

  return (
    <div className='flex flex-col justify-center p-3 rounded-md shadow-lg shadow-slate-400'>
      <img src={product.image} alt={product.name} className='rounded-md'/>
      <div className='font-bold text-2xl'>{product.name}</div>
      <div className='font-semibold text-xl'>₹ {product.price}</div>
      <div className='font-bold'>{
        product.fastDelivery ? "Fast Delivery" : "4 days delivery"
      }</div>
      <div className='flex items-center'>Ratings<StarRating ratings={product.ratings} /></div>

      {product.inStock ? (<button className='h-[40px] bg-orange-500'
      onClick={hanleClick}
      >Add to Cart</button>) : (<button className='h-[40px] bg-orange-500 opacity-50' disabled>Out of Stock</button>)}
    </div>
  )
}

export default ProductCard

