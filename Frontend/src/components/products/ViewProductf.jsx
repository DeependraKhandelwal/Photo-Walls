import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteProduct, fetchProduct } from '../../redux/Product/productThunks'
// import { deleteCategory, fetchCategory } from '../../redux/Category/productThunks'
import Navbar2 from '../Navbar2'

function ViewProductf({ fetchProducts, productData, deleteProducts }) {



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
        deleteProducts(pid)
        console.log("spid", pid)
        //    const name = cid.target.
        //    SetCategorys(products.filter(item => item.productId !== name))
    }

    // return productData.loading?(<h2>Loading.....</h2>):
    //     productData.error?(<h2>{productData.error}</h2>)

    //         : (
    // <div>






    let itemstoRender;
    if (productData.loading) {
        itemstoRender = <h1>Loading...</h1>
    }
    else if (productData.error) {
        itemstoRender = <h1>productData.error</h1>
    } else {

        itemstoRender =
            <div className="text-left">
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

            </div>
    }

    return itemstoRender;

    // return <div>
    //     <h1>lfjls</h1>


    //     </div>







    // : (<div>
    //     <h1>no product</h1>
    //     <button>Add Product</button>
    // </div>)
    {/* </div> */ }
    // )
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