
import { routeReducer as routing } from "react-router-redux"
import { combineReducers } from "redux"

import links from "./Link"

export default combineReducers({
    links,
    routing
})
