import React from 'react'
import {FaTrash} from "react-icons/fa"
import { CartState } from '../context/context'

const CartItem = ({item}) => {

  const {cartDispatch} = CartState();

  const {product,qty} = item;
  const handleDelete = () => {

    
      cartDispatch({
        type:"REMOVE_FROM_CART",
        payload:{id:product.id}
      })
  }

  return (
    <div className='text-center flex p-3 h-[100px] justify-between items-center' >
      <img src={product.image} alt={product.name} className='w-1/6'/>

      <div className='flex flex-col w-1/3 justify-center'>
      <div className='font-bold'>{product.name}</div>
      <div className='font-semibold'>₹{product.price}</div>
      </div>
      <div>{qty}</div>

      <button className=''><FaTrash onClick={handleDelete}/></button>
    </div>
  )
}

export default CartItem
