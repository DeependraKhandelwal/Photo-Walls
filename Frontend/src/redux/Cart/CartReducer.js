import { DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, SAVE_CART_REQUEST, SAVE_CART_SUCCESS, SAVE_CART_FAILURE, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./CartType"

const initalState = {
    cart: [],
    error: '',
    loading: false,
    message: ''
}

// ===========================================================================
const cartReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_CART_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case FETCH_CART_SUCCESS: {

            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: ''

            }

        }

        case FETCH_CART_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

//=========================================================================== 
        case SAVE_CART_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case SAVE_CART_SUCCESS: {

            return {
                ...state,
                loading: false,
                message: action.payload,
                error: ''
            }
        }

        case SAVE_CART_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
//===========================================================================
        case DELETE_CART_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case DELETE_CART_SUCCESS: {

            return {
                ...(state.filter(s => s !== action.payload)),

                loading: false,
                // cart:[],
                error: '',
                message: action.payload

            }

        }

        case DELETE_CART_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        //===========================================================================
        case UPDATE_CART_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case UPDATE_CART_SUCCESS: {


            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: '',


            }

        }

        case UPDATE_CART_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }


        default: {
            return state
        }
    }
}

export default cartReducer
