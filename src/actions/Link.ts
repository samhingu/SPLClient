import { createAction, Action }  from "redux-actions"
import * as ActionTypes  from "../constants/ActionTypes"
import { Link, IState } from "../models/Link"
import { get } from "./fetch";


const getLinksRequest = createAction(ActionTypes.GET_LINKS_REQUEST)
const getLinksError = createAction<string>(ActionTypes.GET_LINKS_ERROR)
const getLinksSuccss = createAction<IState>(ActionTypes.GET_LINKS_SUCCESS)
const getLinks = () => (dispatch) => {
    dispatch(getLinksRequest())
    get('links', (links: IState) => dispatch(getLinksSuccss(links)), (errMsg) => dispatch(getLinksError(errMsg)))
}

const createLink = createAction<Link>(ActionTypes.ADD_LINK)
const deleteLink = createAction<Link>(ActionTypes.DELETE_LINK)

export {
getLinks,
createLink,
deleteLink
}
