import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteCategory, fetchCategory } from '../../redux/Category/categoryThunks'
import Navbar2 from '../Navbar2'
import { useHistory } from "react-router-dom";
function ViewCategoryf({ fetchCategorys, categoryData, deleteCategorys }) {


    const history = useHistory()
    useEffect(() => {
        fetchCategorys()

    }, [])

    const handleDelete = (cid) => {
        if (window.confirm("Are you sure you want to delete the Category!!")) {
            deleteCategorys(cid)
            setTimeout(function () {
                myFunction();
            }, 1000)
        }

    }
    function myFunction() {


        history.push({
            pathname: "/edit/updateCategory"
        })

        window.location.reload(false)
    }

    
    let itemstoRender;
    if (categoryData.loading) { 
        itemstoRender = <h2>Loading.....</h2> }
    else if (categoryData.error) { 
        itemstoRender = <h2>{categoryData.error}</h2>
     }
     else if(categoryData.length === 0){
         itemstoRender=<div>
             <Navbar2/>
                <h1>no category</h1>
                 <button onClick={()=>{history.push("/allProduct")}}>Add Category</button>
              </div>
     }

    else {

        {/* <Navbar2></Navbar2> */ }
        // categorys.length !== 0 ? (
          itemstoRender=  <div className="text-left">
              <Navbar2/>
                <h2>CATEGORYS</h2>

                <h4 className='text-success'>{categoryData.message && categoryData.message.data}</h4>
                <h4 className='text-danger'>{categoryData.error && categoryData.error}</h4>

                <table class="table table-dark  table-hover table-borderless">

                    <thead className='bg-dark'>
                        <tr>
                            <th scope="col">Category Id</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>{

                        categoryData.category.map(category => (
                            <tr >
                                <th scope="row" >{category.categoryId}</th>
                                <td >{category.categoryName}</td>
                                <td >{category.categoryDescription}</td>
                                <td >

                                    <div class="btn-group">  <button className='btn btn-danger btn-sm' onClick={() => handleDelete(category.categoryId)}>delete</button></div>
                                    <div class="btn-group"> <button className='btn btn-primary btn-sm'>Edit</button></div>

                                </td>
                            </tr>
                        ))
                    }
                    </tbody>

                </table>




            </div>
            // )
            // : (
            //     <div>
            //         <h1>no category</h1>
            //         <button>Add Product</button>
            //     </div>
            // )

    }
    return (itemstoRender);
}
const mapStateToProps = (state) => {
    return {
        categoryData: state.category

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategorys: (category) => dispatch(fetchCategory(category)),
        deleteCategorys: (cid) => dispatch(deleteCategory(cid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategoryf)