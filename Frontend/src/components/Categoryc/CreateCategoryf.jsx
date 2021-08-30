import React,{useState} from 'react'

import { connect } from 'react-redux';
import { saveCategory } from '../../redux/Category/categoryThunks';
import Navbar2 from '../Navbar2';
function CreateCategoryf(props) {


    const[categorys, SetCategorys]=useState({
        categoryName:'',
        categoryDescription:'',
        products:
           [ {
            color: '',
          dimension: '',
          manufacturer:'' ,
          price: 0,
         
          productImage:'',
          productName:'',
          quantity: 0,
          specification:''}
           ]

    })
   

    function handleInput(e) {
        SetCategorys({
           ...categorys,[e.target.name]: e.target.value
        })
    }
    /*
    {"categoryName":"","categoryDescription":"",
    "products":[{"color":"","dimension":"","manufacturer":"","price":0,"productId":0,"productImage":"","productName":"","quantity":0,"specification":""}]}
    */
    function handleInput1(e){
        console.log(JSON.stringify({...categorys}))
        
        //console.log(JSON.stringify(categorys))
        SetCategorys({
            //...categorys,products:[...categorys.products[0],{[e.target.name]:e.target.value}]
            ...categorys, products:[{...categorys.products[0], [e.target.name]:e.target.value}]
        })
    }
    // {...bform,passengerList:{...bform.passengerList,passengerName : e.target.value}})}
     function handleSubmit(ev){
        ev.preventDefault();
        
        props.saveCategorys(categorys);
        console.log(categorys)

    } 
    {/* <h4 className='text-success'>{categorys.msg && categorys.msg}</h4>
                <h4 className='text-danger'>{categorys.error && categorys.error}</h4> */}
    return (
        <div >
            <Navbar2/>
            <div class='container mt-5'>
            <h2>Category</h2>
                <hr />
               
                <h1>functional</h1>
                 <form class="row row-cols-lg-auto g-3 align-items-center" 
                 onSubmit={handleSubmit}>
                    <div class="col-12">
                        <label class="visually-hidden" for="inlineFormInputGroupUsername">Category Name</label>
                        <div class="input-group">
                            <div class="input-group-text">@</div>
                           
                            <input type="text" class="form-control"    id="inlineFormInputGroupUsername"  
                            value={categorys.categoryName} 
                            name='categoryName' 
                            placeholder='Category Name' 
                            onChange={handleInput} />
                        </div>
                    </div>

                    <div class="col-12">
                        <label class="visually-hidden" for="inlineFormInputGroupUsername">Description</label>
                        <div class="input-group">
                            <div class="input-group-text">@</div>
                            <textarea type="text"  name='description' class="form-control" 
                            id="inlineFormInputGroupUsername" name="categoryDescription"  cols="70" rows="1" 
                            value={categorys.categoryDescription} name="categoryDescription" 
                            onChange={handleInput} placeholder="Discription" />
                            
                         </div>
                    </div>


                    <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">productName</label>
                    <div class="input-group">
                        <div class="input-group-text">@</div>
                        {JSON.stringify(categorys.products)}
                        <input type="text"
                         
                            class="form-control"
                            id="inlineFormInputGroupUsername"
                               value={categorys.products[0].productName} 
                            name='productName'
                            placeholder='productName'
                           onChange={handleInput1} 
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
                               value={categorys.products[0].specification} 
                            name='specification'
                            placeholder='specification'
                            onChange={handleInput1}
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
                               value={categorys.products[0].quantity} 
                            name='quantity'
                            placeholder='quantity'
                            onChange={handleInput1}
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
                               value={categorys.products[0].price} 
                            name='price'
                            placeholder='price'
                            onChange={handleInput1}
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
                               value={categorys.products[0].manufacturer} 
                            name='manufacturer'
                            placeholder='manufacturer'
                            onChange={handleInput1}
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
                               value={categorys.products[0].color} 
                            name='color'
                            placeholder='color'
                            onChange={handleInput1}
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
                               value={categorys.products[0].dimension} 
                            name='dimension'
                            placeholder='dimension'
                            onChange={handleInput1}
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
                               value={categorys.products[0].productImage}
                            name='productImage'
                            placeholder='productImage'
                            onChange={handleInput1} 
                        />
                    </div>
                </div>

                    

                   

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form> 

            
        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        categoryData: state.category

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveCategorys: (category) => dispatch(saveCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryf)

