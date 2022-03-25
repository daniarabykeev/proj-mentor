import React, {useReducer} from "react";
import axios from 'axios';
import { CASE_GET_PRODUCTS } from "../helpers/cases";
import { PRODUCTS_API } from "../helpers/consts";

export const productsContext = React.createContext()

const INIT_STATE = {
    products: []
}
const reducer = (state = INIT_STATE, action) =>{
    switch(action.type){
        case CASE_GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            }
        default:
                return state
    }
}
const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    async function getProducts (){
        let result = await axios(PRODUCTS_API);
        dispatch({
            type: CASE_GET_PRODUCTS,
            payload: result
        })
    }
    return (
        <productsContext.Provider value={{
            products: state.products,
            getProducts
        }}>
            {children}
        </productsContext.Provider>
    )
}
export default ProductsContextProvider