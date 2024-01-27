import React, { useEffect, useState } from "react";
import { CartState } from "../context/context";

const CheckOutComponent = () => {
  const [total, setTotal] = useState(0);
  const {
    cartState: { cart },
    cartDispatch,
  } = CartState();

  useEffect(() => {
    const calc = cart.reduce((acc, curr) => {
      return acc + parseFloat(curr.product.price * curr.qty);
    }, 0);
    setTotal(calc);
  }, [cart]);

  const emptyCart = () => {
    cartDispatch({
      type: "EMPTY_CART",
    });
  };

  return (
    <div className="w-full bg-red-500 h-full flex flex-col items-center">
      <h2 className="font-bol text-4xl p-3 ">Subtotal ({cart.length}) items</h2>

      <div className="font-semibold text-2xl">Total: ₹{parseFloat(total)}</div>

      <div className="flex justify-around gap-2">
        <button className="btn">Proceed to Checkout</button>
        <button onClick={emptyCart} className="btn">
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default CheckOutComponent;
