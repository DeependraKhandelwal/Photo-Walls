import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCustomer} from '../../redux/Customer/customerThunks'
import Navbar2 from '../Navbar2'
import { useHistory } from "react-router-dom";
function AllCustomers({ fetchCustomer,customerData }) {


    const history = useHistory()
    useEffect(() => {
      fetchCustomer()

    }, [])
console.log(customerData.customer)
    let itemstoRender;
    if (customerData.loading) { 
        itemstoRender = <h2>Loading.....</h2> }
    else if (customerData.error) { 
        itemstoRender = <h2>{customerData.error}</h2>
     }
     else if(customerData.customer.length === 0){
         itemstoRender=<div>
             <Navbar2/>
                <h1>No Customer {JSON.stringify(customerData.customer)}</h1>
              </div>
     }

    else {

        {/* <Navbar2></Navbar2> */ }
        // categorys.length !== 0 ? (
          itemstoRender=  <div className="text-left">
              <Navbar2/>
                <h2>Customers</h2>

                <h4 className='text-success'>{customerData.message && customerData.message.data}</h4>
                <h4 className='text-danger'>{customerData.error && customerData.error}</h4>

                <table class="table table-dark  table-hover table-borderless">

                    <thead className='bg-dark'>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Email </th>
                            <th scope="col">Customer MobileNumber</th>
                            <th scope="col">Customer Location </th>
                        </tr>
                    </thead>
                    <tbody>{

customerData.customer.map(customer => (
                            <tr >
                                <th scope="row" >{customer.firstName+customer.lastName}</th>
                                <td >{customer.email}</td>
                                <td >{customer.mobileNumber}</td>
                                <td >{customer.city+","+customer.state+","+customer.country+"-"+customer.pincode}</td>
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
        customerData: state.customer

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      fetchCustomer: (customer) => dispatch(fetchCustomer(customer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCustomers)