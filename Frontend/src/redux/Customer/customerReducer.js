import {
  DELETE_CUSTOMER_FAILURE,
  DELETE_CUSTOMER_REQUEST,
  DELETE_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  SAVE_CUSTOMER_SUCCESS,
  UPDATE_CUSTOMER_FAILURE,
  UPDATE_CUSTOMER_REQUEST,
  UPDATE_CUSTOMER_SUCCESS,
} from "./customerType";

const initalState = {
  customer: [],
  error: "",
  loading: false,
  message: "",
};

const customerReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_CUSTOMER_SUCCESS: {
      return {
        ...state,
        loading: false,
        customer: action.payload,
        error: "",
      };
    }

    case FETCH_CUSTOMER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case SAVE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        loading: false,
        message: action.payload,
        error: "",
      };
    }

    case DELETE_CUSTOMER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_CUSTOMER_SUCCESS: {
      // const posts=[...state.posts];
      // const postIndex = posts.findIndex((post)=>post.id===action.payload,);
      // posts.splice(postIndex,1)
      return {
        // ...(state.filter(s => s!== action.payload)),
        ...state,
        loading: false,
        // category:[],
        error: "",
        message: action.payload,
      };
    }

    case DELETE_CUSTOMER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case UPDATE_CUSTOMER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_CUSTOMER_SUCCESS: {
      return {
        ...state,
        loading: false,
        category: action.payload,
        error: "",
      };
    }

    case UPDATE_CUSTOMER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default customerReducer;
