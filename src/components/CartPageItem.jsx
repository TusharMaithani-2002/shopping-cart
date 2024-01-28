import React from 'react'
import StarRating from './StarRating'
import { FaTrash } from 'react-icons/fa';
import { CartState } from '../context/context';
const CartPageItem = ({item}) => {

    const {product,qty} = item;

    const {cartDispatch} = CartState(); 
  return (
    <div className='flex border border-b-0 border-black justify-around px-10 items-center'>
        <img src={product.image} alt={product.name} className='w-1/6 h-[80px]'/>
        <div className='w-1/5'>{product.name}</div>
        <div>{product.price}</div>
        <StarRating ratings={product.ratings}/>
        <div><select onChange={(e)=>{
            cartDispatch({
                type:"CHANGE_CART_QTY",
                payload: {
                    id:product.id,
                    qty:e.target.options.selectedIndex + 1
                }
            })
        }
            
        }>
        {
            [...new Array(product.inStock)].map((_,i)=>(
                <option value={qty} selected={qty===i+1 ? true:false}>{i+1}</option>
            ))
        }
        </select></div>

        <div className='hover:scale-110'><FaTrash /></div>
    </div>
  )
}

export default CartPageItem
