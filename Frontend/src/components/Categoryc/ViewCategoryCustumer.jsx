import React,{useEffect} from 'react'
import { connect } from 'react-redux'
// import category1 from '../../images/category1.jpeg'

import ReactDOM from "react-dom";
import { fetchCategory } from '../../redux/Category/categoryThunks'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom"
import Navbar2 from '../Navbar'

function ViewCategoryCustumer({ fetchCategorys, categoryData }) {

    let { sumit } = useParams();
    console.log("ljdfsl",sumit)
    useEffect(() => {
        fetchCategorys()

    }, [])


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
            <h1 class="text-center font-weight-normal">Categorys</h1>

            <div class="container mt-4 d-flex mb-5">
                <div class="row">{
                categoryData.category.map(category =>
                    (<div key={category.categoryId }class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category.categoryDescription} alt='image not found' class="card-image-top w-100" />
                            <div class="crad-body">
                                <h2 >{category.categoryName}</h2>
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
// ReactDOM.render(
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           {/* <HomePage /> */}
//         </Route>
//         <Route path="/categories/:slug">
//           {/* <BlogPost /> */}
//         </Route>
//       </Switch>
//     </Router>,
//     // node
//   );
const mapStateToProps = (state) => {
    return {
        categoryData: state.category

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategorys: (category) => dispatch(fetchCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoryCustumer)