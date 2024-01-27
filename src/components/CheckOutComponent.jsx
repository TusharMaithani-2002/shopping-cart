import React, { useEffect, useState } from 'react'
import { CartState } from '../context/context'

const CheckOutComponent = () => {

  const [total,setTotal] = useState(0);
  const {cartState:{cart}} = CartState();

  useEffect(()=>{
    const calc = cart.reduce((acc,curr) => {
      return acc + parseFloat(curr.product.price);
    },0)
    setTotal(calc)
  },[cart])


  return (
    <div className='w-full bg-orange-600'>
      <h2>Subtotal ({cart.length}) items</h2>

      <div>Total: ₹{parseFloat(total)}</div>

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default CheckOutComponent
