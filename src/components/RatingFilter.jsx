import React, { useEffect, useState } from "react";
import { CartState } from "../context/context";
import { FaStar, FaRegStar } from "react-icons/fa";

const RatingFilter = () => {
  const { productState, productDispatch } = CartState();
  const [rate, setRate] = useState(productState.byRating);

  useEffect(() => {
    setRate(productState.byRating);
  },[productState.byRating])

  const changeRating = (curr) => {
      productDispatch({
          type:'FILTER_BY_RATING',
          payload:curr
      })
  }
  return (
    <div className="flex">
      {
        [...new Array(5)].map((_,i) => {
            if(i < rate) return <FaStar key={i} onClick={()=>changeRating(i+1)}/>
            else return <FaRegStar key={i} onClick = {()=>changeRating(i+1)} />
        })
      }
    </div>
  );
};

export default RatingFilter;
