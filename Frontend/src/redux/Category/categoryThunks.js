import axios from "axios"
import{fetchCategoryRequest,fetchCategorysuccess,fetchCategoryFailure, saveCategorySucces, deleteCategoryRequest, deleteCategorysuccess, deleteCategoryFailure, updateCategoryRequest, updateCategorysuccess, updateCategoryFailure, fetchProductCategoryRequest, fetchProductCategoryFailure, fetchProductCategorysuccess}from "./categoryAction"

export const fetchCategory=()=>{

    return function(dispatch){
        dispatch(fetchCategoryRequest())
        axios.get('http://localhost:8082/category')
        .then(
            response=>{
                const categorys=response.data
                console.log(response.data)
                dispatch(fetchCategorysuccess(categorys))
            }
            
        ).catch(
            error=>{
                dispatch(fetchCategoryFailure(error.message))
            }
        )
    }
}


export const saveCategory = (categoryObject) => async (dispatch) => {
    dispatch(fetchCategoryRequest());
    try {
      const response = await axios.post('http://localhost:8082/category',categoryObject);
      dispatch(saveCategorySucces(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      dispatch(fetchCategoryFailure(error.message));
      return Promise.reject(error);
    }
  };



  export const deleteCategory=(cid)=>{
    console.log("cid3",cid)
    return function(dispatch){
        console.log("cid1",cid)
        dispatch(deleteCategoryRequest())
        axios.delete(`http://localhost:8082/category/${cid}`)
        .then(
            (response)=>{
                
                dispatch(deleteCategorysuccess(response))
            }
            
        ).catch(
            error=>{
                dispatch(deleteCategoryFailure(error.message))
            }
        )
    }
}


// export const updateCategory=(cid,cat)=>{
//     console.log("cid3",cid)
//     return function(dispatch){
//         console.log("cid1",cid)
//         dispatch(updateCategoryRequest())
//         axios.put(`http://localhost:8082/category/${cid}`,cat)
//         .then(
//             (response)=>{
                
//                 dispatch(updateCategorysuccess(response))
//             }
            
//         ).catch(
//             error=>{
//                 dispatch(updateCategoryFailure(error.message))
//             }
//         )
//     }
// }

export const updateCategory = (categoryObject) => async (dispatch) => {
    dispatch(updateCategoryRequest());
    try {
      const response = await axios.post('http://localhost:8082/category',categoryObject);
      dispatch(updateCategorysuccess(response.data));
      return Promise.resolve(response.data);
    } catch (error) {
      dispatch(updateCategoryFailure(error.message));
      return Promise.reject(error);
    }
}



export const fetchproductCategory=(cid)=>{
    console.log("cid3",cid)
    return function(dispatch){
        console.log("cid1",cid)
        dispatch(fetchProductCategoryRequest())
        axios.get(`http://localhost:8082/category/getProductsByCategory/${cid}`)
        .then(
            (response)=>{
                console.log(response)
                dispatch(fetchProductCategorysuccess(response))
            }
            
        ).catch(
            error=>{
                dispatch(fetchProductCategoryFailure(error.message))
            }
        )
    }
}