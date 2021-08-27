import { combineReducers } from 'redux'
import categoryReducer from './Category/categoryReducer';
import productReducer from './Product/productReducer';
import {addUserReducer,deleteUserReducer,updateUserReducer,loginUserReducer} from './reduxuser/UserReducers'     

const rootReducer = combineReducers({
  
  addU:addUserReducer,
  deleteU:deleteUserReducer,
  updateU:updateUserReducer,
  loginU:loginUserReducer,
  category:categoryReducer,
  product:productReducer
  
});

export default rootReducer