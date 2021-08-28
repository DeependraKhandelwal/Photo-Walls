import { DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, SAVE_CART_REQUEST, SAVE_CART_SUCCESS, SAVE_CART_FAILURE, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./CartType"
// ===========================================================================
export const fetchCARTRequest=()=>{
    return{
        type:FETCH_CART_REQUEST
    
    }
}
export const fetchCARTsuccess=(CART)=>{
    return{
        type:FETCH_CART_SUCCESS,
        payload:cart
    }
}
export const fetchCARTFailure=(error)=>{
    return{
        type:FETCH_CART_FAILURE,
        payload:error
    }
}

// ============================================================================
export const SaveCARTRequest=()=>{
    return{
        type:SAVE_CART_REQUEST
    }
}
export const saveCARTSucces=(CART)=>{
    return{
        type:SAVE_CART_SUCCESS,
        payload:cart
    }
}
export const SaveCARTFailure=(error)=>{
    return{
        type:SAVE_CART_FAILURE
    }
}

// ============================================================================

export const deleteCARTRequest=()=>{
    return{
        type:DELETE_CART_REQUEST
    
    }
}
export const deleteCARTsuccess=(msg)=>{
    return{
        type:DELETE_CART_SUCCESS,
        payload:msg
    }
}
export const deleteCARTFailure=(error)=>{
    return{
        type:DELETE_CART_FAILURE,
        payload:error
    }
}

// ============================================================================
export const updateCARTRequest=()=>{
    return{
        type:UPDATE_CART_REQUEST
    
    }
}
export const updateCARTsuccess=(CART)=>{
    return{
        type:UPDATE_CART_SUCCESS,
        payload:CART
    }
}
export const updateCARTFailure=(error)=>{
    return{
        type:UPDATE_CART_FAILURE,
        payload:error
    }
}