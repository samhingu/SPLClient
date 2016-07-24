//
// import { handleActions, Action } from 'redux-actions'
//
// import * as _ from "lodash"
//
import { GET_LINKS_REQUEST, GET_LINKS_ERROR, GET_LINKS_SUCCESS, ADD_LINK, DELETE_LINK} from "../constants/ActionTypes"
//
import {ILink, IState, IState2} from "../models/Link"
//
const initialState: IState2 = {
    links: [<ILink>{
        _id: 'id',
        title: 'Temporary Link',
        body: 'body 1',
        createdOn: 'created jon date'
    }],
    isLoading: false,
    errorMessage: ''
}
//
// export default handleActions({
//     [ADD_LINK]: (state: IState, action): IState => {
//         return state;
//     }
// }, initialState);

export default (state: IState2 = initialState, action) => {
    switch (action.type) {
        case ADD_LINK:
            return {
                isLoading: state.isLoading,
                errorMessage: state.errorMessage,
                links: [...state.links, action.payload]
            }
        case GET_LINKS_REQUEST:
            return {
                isLoading: true,
                errorMessage: '',
                links: state.links
            }
        case GET_LINKS_ERROR:
            return {
                isLoading: false,
                errorMessage: <string>action.payload,
                links: state.links
            };
        case GET_LINKS_SUCCESS:
            return {
                isLoading: false,
                errorMessage: '',
                links: action.payload
            };
        default:
            return state;

    }
}
