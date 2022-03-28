import React, {useReducer} from "react";
import axios from 'axios';
import { CASE_GET_ONE_PRODUCT, CASE_GET_PRODUCTS } from "../helpers/cases";
import { PRODUCTS_API } from "../helpers/consts";

export const productsContext = React.createContext()

const INIT_STATE = {
    products: [],
    oneProduct: null,
}
const reducer = (state = INIT_STATE, action) =>{
    switch(action.type){
        case CASE_GET_PRODUCTS:
            return {
                ...state,
                products: action.payload.data
            };
        case CASE_GET_ONE_PRODUCT:
            return {...state, oneProduct: action.payload.data};
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
    async function deleteProduct(id){
        await axios.delete(`${PRODUCTS_API}/${id}`)
        getProducts()
    }
    async function getOneProduct (id){
       let result = await axios.get(`${PRODUCTS_API}/${id}`)
    
        dispatch ({
            type: CASE_GET_ONE_PRODUCT,
            payload: result
        })
    }
    async function createProduct (newProduct){
        await axios.post(PRODUCTS_API, newProduct)
        getProducts()
    }
    return (
        <productsContext.Provider value={{
            products: state.products,
            oneProduct: state.oneProduct,
            getProducts,
            deleteProduct,
            getOneProduct,
            createProduct
        }}>
            {children}
        </productsContext.Provider>
    )
}
export default ProductsContextProvider