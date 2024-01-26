import React, { useState } from "react";
import { CartState } from "../context/context";

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
    <div className="w-1/3 bg-orange-500 p-5">
      filters
      <div className="flex flex-col">
        <label className="flex">
          <input
            type="checkbox"
            className=""
            checked={ascending}
            onChange={hanldeAscend}
          />
          ascending
        </label>
        <label>
          <input
            type="checkbox"
            checked={descending}
            onChange={handleDesc}
          />
          descending
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox"
          onChange={handleStock}
          checked={productState.byStock}
          />
          include Out of stock
        </label>
      </div>
      <div>
      <label>
          <input type="checkbox"
          onChange={handleDelivery}
          checked={productState.byFastDelivery}
          />
          Fast Delivery only
        </label>
      </div>
      <button onClick={clearFilterHanlder}>Clear Filters</button>
    </div>
  );
};

export default Filters;
