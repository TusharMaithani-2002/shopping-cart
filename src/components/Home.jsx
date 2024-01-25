import React from 'react'
import { CartState } from '../context/context'

const Home = () => {

  const {state} = CartState()
  console.log(state)
  return (
    <div>
      I am in home
    </div>
  )
}

export default Home
