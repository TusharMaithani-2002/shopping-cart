import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { CartState } from "../context/context";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const {cartState:{cart}} = CartState();
  console.log("logging header")
  const toggleCart = () =>{ 
    setOpenCart(prev => !prev)
  }
  return (
    <div className="bg-red-500 h-[80px] w-full flex justify-around items-center text-white relative">
      <div className="flex-grow text-center font-bold text-2xl">
        
        <Link to={"/"}>Shopping Cart</Link>
      </div>
      <div className="flex-grow">
        <input
          type="text"
          className="h-[40px] w-full outline-none p-3 text-pink-500 font-semibold rounded-md"
          placeholder="Search a product"
        />
      </div>
      <div className="flex-grow cursor-pointer" onClick={toggleCart}>
         <div className="flex justify-center items-center bg-[#FFA447] gap-3 w-1/4 m-auto p-2 rounded-md">
            <FaShoppingCart className=" h-[30px] w-[30px]" />
            <span className=" text-white font-bold text-xl">{cart.length}</span>
          </div>
      </div>
        <div className="bg-slate-500 ">
            {openCart && <Cart close={toggleCart}/>}
        </div>
    </div>
  );
};

export default Header;
