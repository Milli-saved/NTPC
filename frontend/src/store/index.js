// import { createStore, combineReducers } from 'redux'
// import Mode from './setting/setting'
// export default createStore(
//     combineReducers({
//         mode: Mode
//     })
// )

import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./member/memberSlice";
import settingReducer from "./setting/reducers";
import programReducer from "./program/programSlice";
import departmentReducer from "./department/departmentSlice";
import churchReducer from "./church/churchSlice";
import accessReducer from "./access/accessSlice";
import churchBranchReducer from "./churchBranch/churchBranchSlice";
export const store = configureStore(
  {
    reducer: {
      setting: settingReducer,
      member: memberReducer,
      program: programReducer,
      department: departmentReducer,
      church: churchReducer,
      churchbranch: churchBranchReducer,
      access: accessReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
