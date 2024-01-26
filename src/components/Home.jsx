import React from 'react'
import { CartState } from '../context/context'
import ProductCard from './ProductCard'
import Filters from './Filters'


const Home = () => {

  const {cartState:{products}} = CartState()
  const {productState} = CartState();
  let sortedProducts = products;

  if(!productState.byStock) {
    sortedProducts = products.filter((prod) => prod.inStock)
  }
  
  if(productState.byFastDelivery) {
    sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery)
  }
  if(productState.sort) {
    if(productState.sort === "lowToHigh") sortedProducts.sort((a,b)=>a.price-b.price);
    if(productState.sort === "highToLow") sortedProducts.sort((a,b)=>b.price-a.price);
  }


  return (
    <div className='flex'>
      <Filters />
      <div className='grid grid-cols-3  w-full p-10 pl-0 gap-y-5 gap-x-5'>
        {
          sortedProducts.map((prod) => (
            <ProductCard product={prod} key={prod.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home
