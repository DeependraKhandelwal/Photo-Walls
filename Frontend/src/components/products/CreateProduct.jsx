import React, { useState } from 'react'
import { connect } from 'react-redux';
import { saveProduct } from '../../redux/Product/productThunks';
import Navbar2 from '../Navbar2';

function CreateProduct(props) {

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

    // function handleInput(e) {
    //     SetProducts({
    //        ...products,[e.target.name]: e.target.value
    //     })
    // }
    function handleSubmit(ev){
        ev.preventDefault();
        
        props.saveProducts(products);
        console.log(products)

    }

    
    


    // useEffect(()=>
    //  {
    //        axios.post('http://localhost:8082/product/createproduct',products)
    //             .then(response=>
    //                 {
                        
    //                     console.log(response)
    //                     SetProducts(response.data)
    //                 })
    //             .catch(error=>
    //                 {
    //                     console.log(products)
    //                     console.log(error)
    //                 })
    //  },[])

    //  function CreatePro(e) {
    //     e.preventDefault();
    //     const postData = products

    //     axios
    //         .post(
    //             'http://localhost:8082/product/createproduct',
    //             postData,
    //         ).then(response=>
    //                             {
                                    
    //                                 console.log(response)
    //                                 SetProducts(response.data)
    //                             })
    //                         .catch(error=>
    //                             {
    //                                 console.log(products)
    //                                 console.log(error)
    //                             })
            
    // }

    return (
        <div><Navbar2/>
            <h2>Product</h2>
            <hr />
            {/* <h4 className='text-success'>{categorys.msg && categorys.msg}</h4>
            <h4 className='text-danger'>{categorys.error && categorys.error}</h4> */}
            <h2>{products.color}</h2>
            <h2>{products.specification}</h2>
            <h2>{products.manufacturer}</h2>
            <h2>{products.dimension}</h2>
            <h2>{products.price}</h2>
            <h2>{products.productName}</h2>

            <form class="row row-cols-lg-auto g-3 align-items-center" onSubmit={handleSubmit}>
                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">productName</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.productName} 
                            name='productName'
                            placeholder='productName'
                           onChange={e=>SetProducts({...products,productName:e.target.value})} 
                        />
                    </div>
                </div>
                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">specification</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.specification} 
                            name='specification'
                            placeholder='specification'
                            onChange={e=>SetProducts({...products,specification:e.target.value})}
                        />
                    </div>
                </div>

                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">quantity</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.quantity} 
                            name='quantity'
                            placeholder='quantity'
                            onChange={e=>SetProducts({...products,quantity:e.target.value})}
                        />
                    </div>
                </div>

                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">price</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.price} 
                            name='price'
                            placeholder='price'
                            onChange={e=>SetProducts({...products,price:e.target.value})}
                        />
                    </div>
                </div>


                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">manufacturer</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.manufacturer} 
                            name='manufacturer'
                            placeholder='manufacturer'
                            onChange={e=>SetProducts({...products,manufacturer:e.target.value})}
                        />
                    </div>
                </div>

                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">color</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.color} 
                            name='color'
                            placeholder='color'
                            onChange={e=>SetProducts({...products,color:e.target.value})}
                        />
                    </div>
                </div>

                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">dimension</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.dimension} 
                            name='dimension'
                            placeholder='dimension'
                            onChange={e=>SetProducts({...products,dimension:e.target.value})}
                        />
                    </div>
                </div>

                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">productImage</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>

                        <input type="text"
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={products.productImage}
                            name='productImage'
                            placeholder='productImage'
                            onChange={e=>SetProducts({...products,productImage:e.target.value})} 
                        />
                    </div>
                </div>


                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

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
        saveProducts: (category) => dispatch(saveProduct(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct)