import React, { useState } from "react";

import { connect } from "react-redux";
import { saveCustomer } from "../../redux/Customer/customerThunks";
import Navbar from "../Navbar";
function CreateCustomer(props) {
  const [customers, SetCustomers] = useState({

    buildingName: "",

    city: "",
    country: "",
    email: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    password: "",
    pincode: "",
    state: "",
    streetNo: "",
  });

  function handleInput(e) {
    SetCustomers({
      ...customers,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    props.saveCustomers(customers);
    console.log(customers);
  }

  return (
    <div>
      <Navbar />
      <div class="container mt-5">
        <h2>Customer</h2>
        <hr />

        <h1>functional</h1>
        <form
          class="row row-cols-lg-auto g-3 align-items-center"
          onSubmit={handleSubmit}
        >
          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Customer Name
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>

              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.firstName}
                name="firstName"
                placeholder="first Name"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <div class="input-group">
              <div class="input-group-text">@</div>

              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.lastName}
                name="lastName"
                placeholder="last Name"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Building Name
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <textarea
                type="text"
                name="description"
                class="form-control"
                id="inlineFormInputGroupUsername"
                name="customerBuildingName"
                cols="70"
                rows="1"
                value={customers.buildingName}
                name="buildingName"
                onChange={handleInput}
                placeholder="building Name"
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              City
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.city}
                name="city"
                placeholder="City"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Country
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.country}
                name="country"
                placeholder="Country"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Email
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.email}
                name="email"
                placeholder="Email"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Mobile Number
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.mobileNumber}
                name="mobileNumber"
                placeholder="Mobile Number"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Pin Code
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.pincode}
                name="pincode"
                placeholder="Pincode"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              State
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.state}
                name="state"
                placeholder="state"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <label class="visually-hidden" for="inlineFormInputGroupUsername">
              Street Number
            </label>
            <div class="input-group">
              <div class="input-group-text">@</div>
              <input
                type="text"
                class="form-control"
                id="inlineFormInputGroupUsername"
                value={customers.streetNo}
                name="streetNo"
                placeholder="Street Number"
                onChange={handleInput}
              />
            </div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    customerData: state.customer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveCustomers: (customer) => dispatch(saveCustomer(customer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomer);
