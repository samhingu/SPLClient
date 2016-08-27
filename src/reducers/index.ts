
import { routeReducer as routing } from "react-router-redux"
import { combineReducers } from "redux"

import { reducer as toastrReducer } from 'redux-toastr'
import links from "./Link"


export default combineReducers({
    links,
    routing,
    toastrReducer
})
