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

export const fetchCustomerRequest = () => {
  return {
    type: FETCH_CUSTOMER_REQUEST,
  };
};
export const fetchCustomersuccess = (customer) => {
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customer,
  };
};
export const fetchCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
  };
};
export const saveCustomerySucces = (customer) => {
  return {
    type: SAVE_CUSTOMER_SUCCESS,
    payload: customer,
  };
};

export const deleteCustomerRequest = () => {
  return {
    type: DELETE_CUSTOMER_REQUEST,
  };
};
export const deleteCustomersuccess = (msg) => {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
    payload: msg,
  };
};
export const deleteCustomerFailure = (error) => {
  return {
    type: DELETE_CUSTOMER_FAILURE,
    payload: error,
  };
};

export const updateCustomerRequest = () => {
  return {
    type: UPDATE_CUSTOMER_REQUEST,
  };
};
export const updateCustomersuccess = (customer) => {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    payload: customer,
  };
};
export const updateCustomerFailure = (error) => {
  return {
    type: UPDATE_CUSTOMER_FAILURE,
    payload: error,
  };
};
