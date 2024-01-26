import React from 'react'
import {FaTrash} from "react-icons/fa"

const CartItem = ({item}) => {

  console.log(item)

  const {product,qty} = item;
  return (
    <div className='text-center flex p-3 h-[100px] justify-between items-center' >
      <img src={product.image} alt={product.name} className='w-1/6'/>

      <div className='flex flex-col'>
      <div className='font-bold'>{product.name}</div>
      <div className='font-semibold'>₹{product.price}</div>
      </div>
      <div>{qty}</div>

      <button><FaTrash /></button>
    </div>
  )
}

export default CartItem
