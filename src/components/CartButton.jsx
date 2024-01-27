import React from "react";
import { CartState } from "../context/context";

const CartButton = ({ product }) => {
    const { cartState, cartDispatch } = CartState();
    const { cart } = cartState;
    // console.log(product)
    // const inCart = false;
    const inCart = cart.find((item) => item.product.id === product.id);
  const hanleClick = () => {
    // check if already present in cart

    if(inCart) {
      alert("Already in Cart! please increase quantity there.")
      return;
    }

    cartDispatch({
        type:"ADD_TO_CART",
        payload:{product}
    });
    console.log("added in cart");
  };

  const handleDelete = () => {

    
    cartDispatch({
      type:"REMOVE_FROM_CART",
      payload:{id:product.id}
    })
}
  return (
    <>
      {product.inStock ? (
        !inCart ? (<button className="h-[40px] bg-orange-500" onClick={hanleClick}>
        Add to Cart
      </button>) : (<button className="h-[40px] bg-red-700 text-white" onClick={handleDelete}>
        Remove from cart
      </button>)
      ) : (
        <button className="h-[40px] bg-orange-500 opacity-50" disabled>
          Out of Stock
        </button>
      )}
    </>
  );
};

export default CartButton;
