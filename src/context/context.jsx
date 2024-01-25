import { createContext } from "react";

const Cart = createContext();

const Context = ({children}) => {
    return (
        <Cart.Provider value={{}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;