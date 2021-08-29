import { addToCart, loadCurrentItem } from "./CartAction"
import axios from "axios"

export const addproductcart=(cartObject)=>{
    // console.log("cid3",cid)
    return function(dispatch){
        // console.log("cid1",cid)
       
        axios.post(`http://localhost:8082/shoppingcart/addcart`,cartObject)
        .then(
            (response)=>{
                
                dispatch(addToCart(response))
            }
            
        )
    }
}

export const loadproducts=(cid)=>{
    // console.log("pid3",pid)
    return function(dispatch){
        console.log("cid1",cid)
        // dispatch(fetchProductRequest())
        axios.get(`http://localhost:8082/shoppingcart/getcartproducts/${cid}`)
        .then(
            (response)=>{
                console.log("res",response)
                dispatch(loadCurrentItem(response))
            }
            
        )
        // .catch(
        //     error=>{
        //         dispatch(fetchProductFailure(error.message))
        //     }
        // )
    }
  }