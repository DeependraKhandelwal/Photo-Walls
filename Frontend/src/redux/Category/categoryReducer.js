import { DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE, FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_PRODUCT_CATEGORY_FAILURE, FETCH_PRODUCT_CATEGORY_REQUEST, FETCH_PRODUCT_CATEGORY_SUCCESS, SAVE_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAILURE, UPDATE_CATEGORY_REQUEST, UPDATE_CATEGORY_SUCCESS } from "./categoryType"

const initalState = {
    category: [],
    error: '',
    loading: false,
    message: '',
    product:[]
}


const categoryReducer = (state = initalState, action) => {
    switch (action.type) {
        case FETCH_CATEGORY_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case FETCH_CATEGORY_SUCCESS: {

            return {
                ...state,
                loading: false,
                category: action.payload,
                error: ''

            }

        }

        case FETCH_CATEGORY_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }



        }
        case SAVE_CATEGORY_SUCCESS: {

            return {
                ...state,
                loading: false,
                message: action.payload,
                error: ''
            }
        }

        case DELETE_CATEGORY_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case DELETE_CATEGORY_SUCCESS: {

            // const posts=[...state.posts];
            // const postIndex = posts.findIndex((post)=>post.id===action.payload,);
            // posts.splice(postIndex,1)
            return {
                // ...(state.filter(s => s!== action.payload)),
                ...state,
                loading: false,
                // category:[],
                error: '',
                message: action.payload

            }

        }

        case DELETE_CATEGORY_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }


        case UPDATE_CATEGORY_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case UPDATE_CATEGORY_SUCCESS: {


            return {
                ...state,
                loading: false,
                category: action.payload,
                error: '',


            }

        }

        case UPDATE_CATEGORY_FAILURE: {

            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }


        case FETCH_PRODUCT_CATEGORY_REQUEST: {

            return {
                ...state,
                loading: true
            }

        }

        case FETCH_PRODUCT_CATEGORY_SUCCESS: {

            return {
                ...state,
                loading: false,
                category: action.payload.data,
                error: ''

            }

        }

        case FETCH_PRODUCT_CATEGORY_FAILURE: {

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

export default categoryReducer








