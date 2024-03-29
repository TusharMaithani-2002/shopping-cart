import React from 'react'
import { CartState } from '../context/context'
import CartPageItem from './CartPageItem';
import CheckOutComponent from './CheckOutComponent';

const CartPage = () => {

  const {cartState:{cart}} = CartState();
  return (
    <div className='flex justify-around  mt-5 px-10'>
      <section className='w-2/3 mr-5 border-b border-black'>
      {
        cart.map((item) => (
          <CartPageItem item={item} key={item.product.id}/>
        ))
      }
      </section>
      <section className='w-1/3 h-[80vh] p-4 flex justify-center items-start'>
        <CheckOutComponent />
      </section>
    </div>
  )
}

export default CartPage
