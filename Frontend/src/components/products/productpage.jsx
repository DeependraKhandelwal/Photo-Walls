import React,{useEffect,useState} from 'react'
import "./productpage.css"
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { connect } from 'react-redux';
import { fetchProduct, fetctProductById } from '../../redux/Product/productThunks';
import { addproductcart } from '../../redux/Cart/CartThunks';
import Navbar from "../Navbar";
import Navbar2 from '../Navbar2';
import category1 from "../../images/category1.jpeg"
function ProductPage( {fetchProductss ,productData,addToCarts}) {

    // const location = useLocation();
    

    const { id } = useParams();
    // let ida=location.search
    // console.log('sumit',location.search)


    const [cartObject,SetCartObject]=useState({
        cartId:0,
        customerId:1,
        productId:0,
        quantity:1
    })

    const[pid, SetPid] = useState(id) 
    const[product,SetProducts]=useState({})
    // const handleDelete = (pid) => {
    //     if (window.confirm("Are you sure you want to delete the Category!!")){
    //          deleteProducts(pid)
    //          setTimeout(function () {
    //             myFunction();
    //         }, 1000)
    //     }
       
    //     console.log("spid", pid)
        
    // }
    useEffect(()=>
    {
    //     // axios.get(`http://localhost:8082/product/getproductById/${pid}`)
    //     // .then(response=>
    //     //     {
    //     //       SetProducts(response.data)  
    //     //       console.log("product",product)
    //     //     })

    //     fetchProducts()
         fetchProductss(id)
        

    },[])
    console.log('products',productData.Product.productImage)
    
    // console.log(cartObject)
   const handlecart=(()=>
    {
        // setName({...name,firstName:e.target.value})}
        SetCartObject({
        cartId:4,
         customerId:4,
        productId:3,
        quantity:1
    })
        addToCarts(cartObject)
        // axios.post(`http://localhost:8082/shoppingcart/addcart`,cart)

    })
//    const handlefetch=(state)=>{
//         fetchProductss(state)
//         console.log(state)
//     }
    // useEffect((state) => {
    //     // console.log(location.pathname); // result: '/secondpage'
    //     // console.log(location.search); // result: '?query=abc'
    //     // console.log(location.state); // result: 'some_value'

        
    //     // console.log("pid",id) fetchProduct
    //     fetchProduct(state)
    //  }, [state]);

    //  console.log('products',productData.Product.productImage)
     let itemstoRenders;
     if(productData.loading){itemstoRenders =<h1>Loading...</h1>}
       else if (productData.error) {
        itemstoRenders = (<h1>{productData.error}</h1>)}
    else{
            itemstoRenders=
        <div>
            <Navbar/>
            <div class="container">
                <div class="card">
                    <div class="container-fliud">
                        <div class="wrapper row">
                            <div class="preview col-md-6">

                                <div class="preview-pic tab-content">
                                    <div class="tab-pane active" id="pic-1"><img src={productData.Product.productImage} alt='image not found'/></div>
                                    {/* <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                                    <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                                    <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                                    <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div> */}
                                </div>
                                <ul class="preview-thumbnail nav nav-tabs">
                                    <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                    <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                                </ul>

                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">men's shoes fashion</h3>
                                <div class="rating">
                                    <div class="stars">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                    </div>
                                    <span class="review-no">41 reviews</span>
                                </div>
                                <p class="product-description"></p>
                                <h4 class="price">current price:{productData.Product.price} <span></span></h4>
                                <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                                <h5 class="sizes">sizes:
                                    <span class="size" data-toggle="tooltip" title="small">s</span>
                                    <span class="size" data-toggle="tooltip" title="medium">m</span>
                                    <span class="size" data-toggle="tooltip" title="large">l</span>
                                    <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                                <h5 class="colors">colors:
                                    <span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                    <span class="color green"></span>
                                    <span class="color blue"></span>
                                </h5>
                                <div class="action">
                                    <button class="add-to-cart btn btn-default" type="button"
                                    // onClick={() => handleDelete(product.productId)}> 
                                    onClick={()=> handlecart()} >add to cart</button>
                                    <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    return itemstoRenders;
    // return <h1>hello world</h1>
}


const mapStateToProps = (state) => {
    return {
        productData: state.product

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductss: (productId) => dispatch(fetctProductById(productId)),
        addToCarts: (id) => dispatch(addproductcart(id)),
        // addtoCarts:(pid)=>dispatch(addtoCart(pid))
        // fetchProducts: (product) => dispatch(fetchProduct(product)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)