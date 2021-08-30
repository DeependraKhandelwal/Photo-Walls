import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../redux/Product/productThunks'
import { useHistory } from "react-router-dom"
import category1 from '../../images/category1.jpeg'
import Navbar2 from '../Navbar2'
import { Link } from 'react-router-dom'

function ViewProductCustomer({ fetchProducts, productData }) {
    // addtoCarts


    let history = useHistory();


    useEffect(() => {
        fetchProducts()

        
    }, [])
    console.log(productData)






    let itemstoRenders;
    if (productData.loading) {
        itemstoRenders = <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    }
    else if (productData.error) {
        itemstoRenders = <h1>productData.error</h1>
    } else if (productData.Product.length === 0) {
        itemstoRenders = <div>
            <Navbar2 />
            <h1>no product</h1>
            {/* <button onClick={() => { history.push("/createCategories") }}>Add Product</button> */}
        </div>
    }
    else {


        itemstoRenders =
            <div class="container mt-5">
                <Navbar2 />
                <h1 class="text-center font-weight-normal">Products</h1>
                {/* JSON.stringify(product. productImage */}
                <div class="container mt-4 d-flex mb-5">
                    <div class="row">{
                        productData.Product.map(product =>
                        (<div class="col-md-4 mt-5">
                            <div class="card">
                                {/* <a href="#" onClick={()=>{history.push("/productpage", )}}> */}
                                <a href="#"
                                 onClick={() => history.push({
                                    pathname: `/productpage/${product.productId}`,
                                    // search: `${product.productId}`,
                                    // state: { id: `${product.productId}}`
                                 
                                })}>
                                    <img src={product.productImage} alt='image not found' class="card-image-top w-100" /></a>
                                <div class="crad-body">
                                    <h2 >{product.productName}</h2>
                                    <div class="d-flex justify-content-between">
                                        <p class="card-text">{product.specification}
                                        </p>
                                        <p class="card-text mr-4 text-success">₹{product.price}</p>
                                    </div>
                                    {/* <button onClick={()=>addtoCarts(product.productId)}>addtoCart</button> */}
                                    <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>
                                </div>
                            </div>
                        </div>))}

                    </div>
                </div>
            </div>


    }

    return itemstoRenders;


}
const mapStateToProps = (state) => {
    return {
        productData: state.product

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (product) => dispatch(fetchProduct(product)),

        // addtoCarts:(pid)=>dispatch(addtoCart(pid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProductCustomer)