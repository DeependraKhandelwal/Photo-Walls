import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Link, Switch ,useParams} from "react-router-dom";
import HomeProduct from "./components/HomeProduct";
import CreateCategory from "./components/CreateCategory";
import EditupdateCategory from "./components/EditupdateCategory";
import EditupdateProduct from "./components/EditupdateProduct";
import AllProduct from "./components/AllProduct";
import AllOrders from "./components/AllOrders";

import Home from "./components/Home";
// import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";
import MyCart from "./components/MyCart";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ContactUs from "./components/ContactUs";
import SignUpAction from "./components/SignUpAction";
import CreateCategoryf from "./components/Categoryc/CreateCategoryf";
import ViewCategoryf from "./components/Categoryc/ViewCategoryf";
import CreateProduct from "./components/products/CreateProduct";
import ViewCategoryCustumer from "./components/Categoryc/ViewCategoryCustumer";
import ViewProductf from "./components/products/ViewProductf";
import ViewProductCustomer from "./components/products/ViewProductCustomer";

import ProductPage from "./components/products/productpage";
import cart from "./components/MyCart/Cart";
import ProductByCategory from "./components/Categoryc/productByCategory";
// import cart from "./components/MyCart/cart";
function App() {
  return (
      <Router>
        <Provider store={store}>
    <div className="App">
        <Switch>
          <Route exact path="/HomeProduct" component={ViewProductCustomer} />
          <Route path="/createCategories" component={CreateCategoryf} />
          <Route path="/edit/updateCategory" component={ViewCategoryf} />
          <Route path="/edit/updateProduct" component={ViewProductf} />
          <Route path="/allProduct" component={CreateProduct} />
          <Route path="/allOrders" component={AllOrders} />
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={ViewCategoryCustumer} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/myCart" component={cart} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={Register} />

          <Route path="/signupactions" component={SignUpAction} />

          <Route path="/contactus" component={ContactUs} />

          <Route path="/productpage/:id" component={ProductPage} />
          <Route path="/productByCategory/:id" component={ProductByCategory} />


        </Switch>  
        </div>   
        </Provider>
      </Router>
  );
}

export default App;
