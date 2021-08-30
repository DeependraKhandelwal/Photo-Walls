import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_SUCCESS_BY_ID, SAVE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./productType"

const initalState = {
    Product: [],
    error: '',
    loading: false,
    message: ''
}


const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case FETCH_PRODUCT_SUCCESS: {

            return {
                ...state,
                loading: false,
                Product: action.payload,
                error: ''

            }

        }

        case FETCH_PRODUCT_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }



        }
        case SAVE_PRODUCT_SUCCESS: {

            return {
                ...state,
                loading: false,
                message: action.payload,
                error: ''
            }
        }

        case DELETE_PRODUCT_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case DELETE_PRODUCT_SUCCESS: {

           
            return {
                // ...(state.filter(s => s!== action.payload)),
                // const todo3 = state.todos.filter((todo, i) => i !== action.payload);
                ...state,
                loading: false,
                // category:[],
                error: '',
                message: action.payload

            }

        }

        case DELETE_PRODUCT_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }


        case UPDATE_PRODUCT_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case UPDATE_PRODUCT_SUCCESS: {


            return {
                ...state,
                loading: false,
                Product: action.payload,
                error: '',


            }

        }

        case UPDATE_PRODUCT_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        case FETCH_PRODUCT_SUCCESS_BY_ID: {

            return {
                ...state,
                loading: false,
                Product: action.payload.data,
                error: ''

            }

        }


        default: {
            return state
        }
    }
}

export default productReducer