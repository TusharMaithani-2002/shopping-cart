import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="flex flex-col absolute text-black left-[80%] top-[90px] bg-green-500 z-20
    transition ease-in-out duration-1000
    ">
      <div className="flex flex-col items-center">
        <div className="p-3 bg-green-500 w-[10px] h-[10px] rotate-45 absolute -top-3"></div>

        <div className="z-10">
          <h2 className="text-3xl font-bold text-center">Cart</h2>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

      </div>
        <button className="bg-red-500 w-full height-[50px]"><Link to={"/cart-page"}>Check Out</Link></button>
    </div>
  );
};

export default Cart;
