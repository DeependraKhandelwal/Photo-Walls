import { DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_CATEGORY_FAILURE, FETCH_PRODUCT_CATEGORY_REQUEST, FETCH_PRODUCT_CATEGORY_SUCCESS, SAVE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAILURE, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "./categoryType"

export const fetchCategoryRequest=()=>{
    return{
        type:FETCH_CATEGORY_REQUEST
    
    }
}
export const fetchCategorysuccess=(category)=>{
    return{
        type:FETCH_CATEGORY_SUCCESS,
        payload:category
    }
}
export const fetchCategoryFailure=(error)=>{
    return{
        type:FETCH_CATEGORY_FAILURE,
        payload:error
    }
}
export const saveCategorySucces=(category)=>{
    return{
        type:SAVE_CATEGORY_SUCCESS,
        payload:category
    }
}



export const deleteCategoryRequest=()=>{
    return{
        type:DELETE_CATEGORY_REQUEST
    
    }
}
export const deleteCategorysuccess=(msg)=>{
    return{
        type:DELETE_CATEGORY_SUCCESS,
        payload:msg
    }
}
export const deleteCategoryFailure=(error)=>{
    return{
        type:DELETE_CATEGORY_FAILURE,
        payload:error
    }
}


export const updateCategoryRequest=()=>{
    return{
        type:UPDATE_CATEGORY_REQUEST
    
    }
}
export const updateCategorysuccess=(category)=>{
    return{
        type:UPDATE_CATEGORY_SUCCESS,
        payload:category
    }
}
export const updateCategoryFailure=(error)=>{
    return{
        type:UPDATE_CATEGORY_FAILURE,
        payload:error
    }
}

export const fetchProductCategoryRequest=()=>{
    return{
        type:FETCH_PRODUCT_CATEGORY_REQUEST
    
    }
}
export const fetchProductCategorysuccess=(category)=>{
    return{
        type:FETCH_PRODUCT_CATEGORY_SUCCESS,
        payload:category
    }
}
export const fetchProductCategoryFailure=(error)=>{
    return{
        type:FETCH_PRODUCT_CATEGORY_FAILURE,
        payload:error
    }
}