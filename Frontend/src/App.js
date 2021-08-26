import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomeProduct from "./components/HomeProduct";
import CreateCategory from "./components/CreateCategory";
import EditupdateCategory from "./components/EditupdateCategory";
import EditupdateProduct from "./components/EditupdateProduct";
import AllProduct from "./components/AllProduct";
import AllOrders from "./components/AllOrders";

import Home from "./components/Home";
import Categories from "./components/Categories";
import AboutUs from "./components/AboutUs";
import MyCart from "./components/MyCart";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ContactUs from "./components/ContactUs";
import SignUpAction from "./components/SignUpAction";
function App() {
  return (
      <Router>
        <Provider store={store}>
    <div className="App">
        <Switch>
          <Route exact path="/HomeProduct" component={HomeProduct} />
          <Route path="/createCategories" component={CreateCategory} />
          <Route path="/edit/updateCategory" component={EditupdateCategory} />
          <Route path="/edit/updateProduct" component={EditupdateProduct} />
          <Route path="/allProduct" component={AllProduct} />
          <Route path="/allOrders" component={AllOrders} />
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/myCart" component={MyCart} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={Register} />

          <Route path="/signupactions" component={SignUpAction} />

          <Route path="/contactus" component={ContactUs} />
        </Switch>  
        </div>   
        </Provider>
      </Router>
  );
}

export default App;
