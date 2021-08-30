import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteProduct, fetchProduct } from '../../redux/Product/productThunks'
import { useHistory } from "react-router-dom";
// import { deleteCategory, fetchCategory } from '../../redux/Category/productThunks'
import Navbar2 from '../Navbar2'

function ViewProductf({ fetchProducts, productData, deleteProducts }) {



    const history = useHistory()
    const [products, SetProducts] = useState({
        color: '',
        dimension: '',
        manufacturer: '',
        price: '',
        productImage: '',
        productName: '',
        quantity: '',
        specification: ''
    })


    useEffect(() => {
        fetchProducts()

        console.log(productData)
    }, [])

    const handleDelete = (pid) => {
        if (window.confirm("Are you sure you want to delete the Category!!")){
             deleteProducts(pid)
             setTimeout(function () {
                myFunction();
            }, 1000)
        }
       
        console.log("spid", pid)
        
    }

    function myFunction() {


        history.push({
            pathname: "/edit/updateProduct"
        })

        window.location.reload(false)
    }

    let itemstoRenders;
    if (productData.loading) {
        itemstoRenders = (<h1>Loading...</h1>)
    }
    else if (productData.error) {
        itemstoRenders = (<h1>productData.error</h1>)
    }else if(productData.length === 0){
        itemstoRenders=<div>
            <Navbar2/>
               <h1>no product</h1>
                
             </div>
    } 
    else {

        itemstoRenders =
        productData.Product.length !== 0 ? (<div className="text-left">
            <Navbar2/>
                <h2>ProductS</h2>

                <h4 className='text-success'>{productData.message && productData.message.data}</h4>
                <h4 className='text-danger'>{productData.error && productData.error}</h4>

                <table class="table table-dark  table-hover table-borderless">

                    <thead className='bg-dark'>
                        <tr>

                            <th scope="col">Product Id</th>
                            <th scope="col">productName</th>
                            <th scope="col">price</th>
                            <th scope="col">quantity</th>
                            <th scope="col">specification</th>
                            <th scope="col">manufacturer</th>
                            <th scope="col">dimension</th>
                            <th scope="col">color</th>
                            <th scope="col">productImage</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>{


                        productData.Product.map(product => (
                            <tr >
                                <th scope="row" >{product.productId}</th>
                                <td >{product.productName}</td>
                                <td >{product.price}</td>
                                <td >{product.quantity}</td>
                                <td >{product.specification}</td>
                                <td >{product.manufacturer}</td>
                                <td >{product.dimension}</td>
                                <td >{product.color}</td>
                                <td >{product.productImage}</td>


                                <td >

                                    <div class="btn-group">  <button className='btn btn-danger btn-sm' onClick={() => handleDelete(product.productId)}>delete</button></div>
                                    <div class="btn-group"> <button className='btn btn-primary btn-sm'>Edit</button></div>

                                </td>
                            </tr>
                        ))
                    }
                    </tbody>

                </table>

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
        deleteProducts: (pid) => dispatch(deleteProduct(pid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProductf)