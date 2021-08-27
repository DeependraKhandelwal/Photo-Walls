import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import category1 from '../../images/category1.jpeg'
import { fetchCategory } from '../../redux/Category/categoryThunks'
import Navbar2 from '../Navbar'

function ViewCategoryCustumer({ fetchCategorys, categoryData }) {

    useEffect(() => {
        fetchCategorys()

    }, [])


    return (
        <div>
        <Navbar2 />
        <div class="container mt-5">
            <h1 class="text-center font-weight-normal">Categorys</h1>

            <div class="container mt-4 d-flex mb-5">
                <div class="row">{
                categoryData.category.map(category =>
                    (<div class="col-md-4 mt-5">
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
    )
}
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