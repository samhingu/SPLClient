import { createAction, Action }  from "redux-actions"
import * as ActionTypes  from "../constants/ActionTypes"
import { Link } from "../models/Link"

const createLink = createAction<Link>(ActionTypes.ADD_LINK)
const deleteLink = createAction<Link>(ActionTypes.DELETE_LINK)

export {
createLink,
deleteLink
}
