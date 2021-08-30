import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_SUCCESS_BY_ID, SAVE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./productType"

export const fetchProductRequest=()=>{
    return{
        type:FETCH_PRODUCT_REQUEST
    
    }
}
export const fetchProductsuccess=(product)=>{
    return{
        type:FETCH_PRODUCT_SUCCESS,
        payload:product
    }
}
export const fetchProductFailure=(error)=>{
    return{
        type:FETCH_PRODUCT_FAILURE,
        payload:error
    }
}
export const saveProductSucces=(product)=>{
    return{
        type:SAVE_PRODUCT_SUCCESS,
        payload:product
    }
}



export const deleteProductRequest=()=>{
    return{
        type:DELETE_PRODUCT_REQUEST
    
    }
}
export const deleteProductsuccess=(msg)=>{
    return{
        type:DELETE_PRODUCT_SUCCESS,
        payload:msg
    }
}
export const deleteProductFailure=(error)=>{
    return{
        type:DELETE_PRODUCT_FAILURE,
        payload:error
    }
}


export const updateProductRequest=()=>{
    return{
        type:UPDATE_PRODUCT_REQUEST
    
    }
}
export const updateProductsuccess=(product)=>{
    return{
        type:UPDATE_PRODUCT_SUCCESS,
        payload:product
    }
}
export const updateProductFailure=(error)=>{
    return{
        type:UPDATE_PRODUCT_FAILURE,
        payload:error
    }
}

export const fetchProductsuccessById=(product)=>{
    return{
        type:FETCH_PRODUCT_SUCCESS_BY_ID,
        payload:product
    }
}