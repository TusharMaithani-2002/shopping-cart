import React from 'react'
import { CartState } from '../context/context'
import CartPageItem from './CartPageItem';
import CheckOutComponent from './CheckOutComponent';

const CartPage = () => {

  const {cartState:{cart}} = CartState();
  console.log(cart)
  return (
    <div className='flex'>
      <section>
      {
        cart.map((item) => (
          <CartPageItem item={item} key={item.product.id}/>
        ))
      }
      </section>
      <section>
        <CheckOutComponent />
      </section>
    </div>
  )
}

export default CartPage
