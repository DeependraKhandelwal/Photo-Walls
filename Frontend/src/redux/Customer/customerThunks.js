import axios from "axios";
import {
  fetchCustomerRequest,
  fetchCustomersuccess,
  fetchCustomerFailure,
  saveCustomerSucces,
  deleteCustomerRequest,
  deleteCustomersuccess,
  deleteCustomerFailure,
  updateCustomerRequest,
  updateCustomersuccess,
  updateCustomerFailure,
} from "./customerAction";

export const fetchCustomer = () => {
  return function (dispatch) {
    dispatch(fetchCustomerRequest());
    axios
      .get("http://localhost:8082/customer")
      .then((response) => {
        const customers = response.data;
        console.log(response.data);
        dispatch(fetchCustomersuccess(customers));
      })
      .catch((error) => {
        dispatch(fetchCustomerFailure(error.message));
      });
  };
};

export const saveCustomer = (customerObject) => async (dispatch) => {
  dispatch(fetchCustomerRequest());
  try {
    const response = await axios.post(
      "http://localhost:8082/customer",
      customerObject
    );
    dispatch(saveCustomerSucces(response.data));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(fetchCustomerFailure(error.message));
    return Promise.reject(error);
  }
};

export const deleteCustomer = (cid) => {
  console.log("cid3", cid);
  return function (dispatch) {
    console.log("cid1", cid);
    dispatch(deleteCustomerRequest());
    axios
      .delete(`http://localhost:8082/customer/${cid}`)
      .then((response) => {
        dispatch(deleteCustomersuccess(response));
      })
      .catch((error) => {
        dispatch(deleteCustomerFailure(error.message));
      });
  };
};

export const updateCustomer = (customerObject) => async (dispatch) => {
  dispatch(updateCustomerRequest());
  try {
    const response = await axios.post(
      "http://localhost:8082/customer",
      customerObject
    );
    dispatch(updateCustomersuccess(response.data));
    return Promise.resolve(response.data);
  } catch (error) {
    dispatch(updateCustomerFailure(error.message));
    return Promise.reject(error);
  }
};
