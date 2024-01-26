import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { CartState } from "../context/context";

const Cart = () => {

  const {cartState:{cart}} = CartState();
  return (
    <div className="flex flex-col absolute text-black right-5 bg-white border border-black top-[90px] z-20 w-2/5">
      <div className="flex flex-col items-center">


        <div className="z-10">
          <h2 className="text-3xl font-bold text-center">Cart</h2>
          <div className="">
            
          {
            cart.length ? cart.map((cartItem) => (
              <CartItem item = {cartItem} key={cartItem.product.id}/>
            )) : (<div>Cart is empty</div>)
          }
          </div>
         
        </div>

      </div>
        <button className="bg-red-500  height-[50px]"><Link to={"/cart-page"}>Check Out</Link></button>
    </div>
  );
};

export default Cart;
