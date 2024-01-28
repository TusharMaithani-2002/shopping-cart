import React, { useState } from "react";
import { CartState } from "../context/context";
import RatingFilter from "./RatingFilter";

const Filters = () => {
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);

  const { productState, productDispatch } = CartState();
  const handleDesc = () => {
    setAscending(false);
    setDescending(true);
    productDispatch({
      type: "SORT_BY_PRICE",
      payload: "highToLow",
    });
  };
  const hanldeAscend = () => {
    setAscending(true);
    setDescending(false);
    productDispatch({
      type: "SORT_BY_PRICE",
      payload: "lowToHigh",
    });
  };

  const handleStock = () => {
    productDispatch({
      type:"FILTER_BY_STOCK",
      payload:true
    })
  }

  const handleDelivery = () => {
    productDispatch({
      type:"FILTER_BY_DELIVERY",
      payload:true
    })
  }

  const clearFilterHanlder = () => {
    productDispatch({
      type: "CLEAR_FILTER",
    });
    setAscending(false);
    setDescending(false);
  };
  return (
    <div className="w-1/3 bg-orange-500 p-5 mr-5 :w-0">
      <div className="font-bold text-2xl">Filters</div>
      <div className="flex flex-col text-lg ">
        <label className="flex gap-3 cursor-pointer">
          <input
            type="checkbox"
            className=""
            checked={ascending}
            onChange={hanldeAscend}
          />
          ascending
        </label>
        <label className="flex gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={descending}
            onChange={handleDesc}
          />
          descending
        </label>
      </div>
      <div className="text-lg">
        <label className="flex gap-3  cursor-pointer">
          <input type="checkbox"
          onChange={handleStock}
          checked={productState.byStock}
          />
          include Out of stock
        </label>
      </div>
      <div>
      <label className="flex gap-3 text-lg cursor-pointer">
          <input type="checkbox"
          onChange={handleDelivery}
          checked={productState.byFastDelivery}
          />
          Fast Delivery only
        </label>
      </div>
      <div className="flex items-center gap-4 text-lg justify-start font-semibold">
      rating:
      <RatingFilter />
      </div>
      <button onClick={clearFilterHanlder}
      className="bg-red-500 rounded-lg mt-5 p-3 text-xl font-semibold"
      >Clear Filters</button>
    </div>
  );
};

export default Filters;
