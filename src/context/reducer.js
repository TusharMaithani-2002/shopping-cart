export const cartReducer = (state,action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart:state.cart.filter((item) => item.product.id !== action.payload.id)
            }
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart:state.cart.map((item) => item.id === action.payload.id ? {...item,qty:action.payload.qty} : item)
            }
       default:
        return state
    }
}

export const productReducers = (state,action) => {
    
    switch(action.type) {
        case "SORT_BY_PRICE":
            return {...state,sort:action.payload};
        
        case "FILTER_BY_STOCK":
            return {...state,byStock:action.payload};
        case "FILTER_BY_RATING":
            return {...state,byRating:action.payload};
        case "FILTER_BY_DELIVERY":
            return {...state,byFastDelivery:action.payload};
        case "FILTER_BY_SEARCH":
            return {...state,searchQuery:action.payload};
        case "CLEAR_FILTER":
            return {byStock:false,byFastDelivery:false,byRating:false}
        default:
            return state;
    }
}