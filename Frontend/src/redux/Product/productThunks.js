import axios from "axios";
import React from 'react'
import { deleteProductFailure, deleteProductRequest, deleteProductsuccess, fetchProductFailure, fetchProductRequest, fetchProductsuccess, fetchProductsuccessById, saveProductSucces } from "./productAction";

export const saveProduct = (productObject) => async (dispatch) => {
    dispatch(fetchProductRequest());
    try {
      const response = await axios.post('http://localhost:8082/product/createproduct',productObject);
      dispatch(saveProductSucces(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      dispatch(fetchProductFailure(error.message));
      return Promise.reject(error);
    }
  };

  export const fetchProduct=()=>{

    return function(dispatch){
        dispatch(fetchProductRequest())
        axios.get('http://localhost:8082/product/getallproduct')
        .then(
            response=>{
                const products=response.data
                console.log(response.data)
                dispatch(fetchProductsuccess(products))
            }
            
        ).catch(
            error=>{
                dispatch(fetchProductFailure(error.message))
            }
        )
    }
}
    
export const deleteProduct=(pid)=>{
  console.log("pid3",pid)
  return function(dispatch){
      console.log("pid1",pid)
      dispatch(deleteProductRequest())
      axios.delete(`http://localhost:8082/product/deleteproductById/${pid}`)
      .then(
          (response)=>{
              
              dispatch(deleteProductsuccess(response))
          }
          
      ).catch(
          error=>{
              dispatch(deleteProductFailure(error.message))
          }
      )
  }
}

export const fetctProductById=(pid)=>{
    console.log("pid3",pid)
    return function(dispatch){
        console.log("pid1",pid)
        dispatch(fetchProductRequest())
        axios.get(`http://localhost:8082/product/getproductById/${pid}`)
        .then(
            (response)=>{
                console.log("responce",response)
                dispatch(fetchProductsuccessById(response))
            }
            
        ).catch(
            error=>{
                dispatch(fetchProductFailure(error.message))
            }
        )
    }
  }