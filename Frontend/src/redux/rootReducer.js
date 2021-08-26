import { combineReducers } from 'redux'
import {addUserReducer,deleteUserReducer,updateUserReducer,loginUserReducer} from './reduxuser/UserReducers'     

const rootReducer = combineReducers({
  
  addU:addUserReducer,
  deleteU:deleteUserReducer,
  updateU:updateUserReducer,
  loginU:loginUserReducer,
  
});

export default rootReducer