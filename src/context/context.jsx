import { createContext, useContext, useReducer } from "react";
import {faker} from "@faker-js/faker"
import { generateRandomArrayValue } from "../utility";
import { cartReducer, productReducers } from "./reducer";

const Cart = createContext();

const Context = ({children}) => {

    const products = [...Array(20)].map(() => ({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url(),
        inStock:generateRandomArrayValue([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings:generateRandomArrayValue([1,2,3,4,5])
    }))

    const [cartState,cartDispatch] = useReducer(cartReducer,{
        products,
        cart:[]
    })

    const [productState,productDispatch] = useReducer(productReducers,{
        byStock:false,
        byFastDelivery:false,
        byRating:0,
        searchQuery:""
    });
    return (
        <Cart.Provider value={{cartState,cartDispatch,productDispatch,productState}}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
}
export default Context;
