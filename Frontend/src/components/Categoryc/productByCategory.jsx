import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchproductCategory } from '../../redux/Category/categoryThunks'
import { useParams } from 'react-router-dom'
import Navbar2 from '../Navbar'
import { useHistory } from "react-router-dom"
 function ProductByCategory({categoryData,fetchProductc}) {
    const { id } = useParams();

    let history = useHistory();
    useEffect(() => {
        fetchProductc(id)

      
    }, [])

      console.log("mydata",categoryData)
        
    let itemstoRender;
    if (categoryData.loading) { 
        itemstoRender = <h2>Loading.....</h2> }
    else if (categoryData.error) { 
        itemstoRender = <h2>{categoryData.error}</h2>
     }
     else if(categoryData.category.length === 0){
         itemstoRender=<div>
             <Navbar2/>
                <h1>no category</h1>
                
              </div>
     }

     else{
       itemstoRender= <div>
        <Navbar2 />
        <div class="container mt-5">
            <h1 class="text-center font-weight-normal">products</h1>

            <div class="container mt-4 d-flex mb-5">
                <div class="row">{
                categoryData.category.map(category =>
                    (<div key={category.productId }class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category.productImage} alt='image not found' class="card-image-top w-100" onClick={() => history.push({
                                    pathname: `/productpage/${category.productId}`})} />
                            <div class="crad-body">
                                <h2 >{category.productName}</h2>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">{category.categoryDescription}
                                    </p>
                                    <p class="card-text mr-4 text-success">₹100</p>
                                </div>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>
                            </div>
                        </div>
                    </div>))}

                </div>
            </div>
        </div>
        </div>
     }
     return itemstoRender;
      
}

const mapStateToProps = (state) => {
    return {
        categoryData: state.category

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductc: (product) => dispatch(fetchproductCategory(product)),

        // addtoCarts:(pid)=>dispatch(addtoCart(pid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductByCategory)
