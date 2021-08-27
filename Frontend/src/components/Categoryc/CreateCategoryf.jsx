import React,{useState} from 'react'

import { connect } from 'react-redux';
import { saveCategory } from '../../redux/Category/categoryThunks';
import Navbar2 from '../Navbar2';
function CreateCategoryf(props) {


    const[categorys, SetCategorys]=useState({
        categoryName:'',
        categoryDescription:''

    })

    function handleInput(e) {
        SetCategorys({
           ...categorys,[e.target.name]: e.target.value
        })
    }
     function handleSubmit(ev){
        ev.preventDefault();
        // const postData=categorys;
        // axios
        // .post(
        //     'http://localhost:8082/category',
        //     postData,
        // ).then(response=>
        //                     {
                                
        //                         console.log(response)
        //                         SetCategorys(response.data)
        //                     })
        //                 .catch(error=>
        //                     {
        //                         console.log(categorys)
        //                         console.log(error)
        //                     })
        props.saveCategorys(categorys);
        console.log(categorys)

    }
    return (
        <div >
            <Navbar2/>
            <div class='container mt-5'>
            <h2>Category</h2>
                <hr />
                {/* <h4 className='text-success'>{categorys.msg && categorys.msg}</h4>
                <h4 className='text-danger'>{categorys.error && categorys.error}</h4> */}
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
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form> 

            
        </div></div>
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

