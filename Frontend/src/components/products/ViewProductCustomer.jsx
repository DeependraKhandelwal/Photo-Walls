import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../redux/Product/productThunks'


import Navbar2 from '../Navbar2'

function ViewProductCustomer({ fetchProducts, productData }) {



    


    useEffect(() => {
        fetchProducts()

        console.log(productData)
    }, [])

    

    

    let itemstoRenders;
    if (productData.loading) {
        itemstoRenders = (<h1>Loading...</h1>)
    }
    else if (productData.error) {
        itemstoRenders = (<h1>productData.error</h1>)
    } else {

        itemstoRenders =
        productData.Product.length !== 0 ? (<div class="container mt-5">
            <Navbar2/>
        <h1 class="text-center font-weight-normal">Categorys</h1>

        <div class="container mt-4 d-flex mb-5">
            <div class="row">{
            productData.Product.map(product => 
                (<div class="col-md-4 mt-5">
                    <div class="card">
                        <img src={product.productImage} alt='image not found' class="card-image-top w-100" />
                        <div class="crad-body">
                            <h2 >{product.productName}</h2>
                            <div class="d-flex justify-content-between">
                                <p class="card-text">{product.specification}
                                </p>
                                <p class="card-text mr-4 text-success">₹{product.price}</p>
                            </div>
                            <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>
                        </div>
                    </div>
                </div>))}

            </div>
        </div>
    </div>): (
                <div>
                    <h1>no category</h1>
                    <button>Add Product</button>
                </div>
            )
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProductCustomer)