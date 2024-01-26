import React from 'react'
import {FaStar,FaRegStar} from 'react-icons/fa'

const StarRating = ({ratings=0}) => {
    const coloredRating = new Array(ratings).fill(true);
    const unColoredRating = new Array(5 - ratings).fill(false);
  return (
    <div className='flex ml-8'>
      {
        coloredRating.map((crate,i)=>(
            <FaStar key={i} />
        ))
      }
      {
        unColoredRating.length ?( unColoredRating.map((unrate,i)=>(
            <FaRegStar key={i}/>
        ))):null
      }
    </div>
  )
}

export default StarRating
