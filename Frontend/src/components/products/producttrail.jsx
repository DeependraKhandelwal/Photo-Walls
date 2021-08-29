import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'




function producttrail( {fetchProducts, productData,}) {


useEffect(() => {
    fetchProducts()

    console.log(productData)
}, [])


    return (
        <div>
            hello world
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        productData: state.product

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (product) => dispatch(fetchProduct(product)),
        // deleteProducts: (pid) => dispatch(deleteProduct(pid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(producttrail)