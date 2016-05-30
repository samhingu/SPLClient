//
// import { handleActions, Action } from 'redux-actions';
//
// import * as _ from "lodash";
//
import {ADD_LINK, DELETE_LINK} from "../constants/ActionTypes";
//
import {Link, IState} from "../models/Link";
//
const initialState: IState = [<Link>{
    _id: 'id',
    title: 'title1',
    body: 'body 1',
    createdOn: 'created jon date'
}];
//
// export default handleActions({
//     [ADD_LINK]: (state: IState, action): IState => {
//         return state;
//     }
// }, initialState);

export default (state: IState = initialState, action) => {
    switch (action.type) {
        case ADD_LINK:
            return state;
        default:
            return state;

    }
}
