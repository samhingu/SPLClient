import { createAction, Action } from "redux-actions"

import * as ActionTypes from "../constants/ActionTypes"
import { ILink, IState } from "../models/Link"
import { get } from "../api/fetch"


const getLinksRequest = createAction<void>(ActionTypes.GET_LINKS_REQUEST)
const getLinksError = createAction<string>(ActionTypes.GET_LINKS_ERROR)
const getLinksSuccss = createAction<IState>(ActionTypes.GET_LINKS_SUCCESS)

const getLinks = () => (dispatch) => {
    dispatch(getLinksRequest())
    get('links',
        (links: IState) => dispatch(getLinksSuccss(links)),
        (errMsg: string) => dispatch(getLinksError(errMsg)))
}

const createLink = createAction<ILink>(ActionTypes.ADD_LINK)
const deleteLink = createAction<ILink>(ActionTypes.DELETE_LINK)

export {
    getLinks,
    createLink,
    deleteLink
}
