import * as actionTypes from './actionTypes';

const initialState = {
    userPosts: [],
    isPending: false,
    error: null,
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case (actionTypes.FETCHPOSTSBYID_PENDING):
            return {...state, isPending: true}
        case (actionTypes.FETCHPOSTSBYID_SUCCESS):
            return {...state, isPending: false, userPosts: action.payload}
        case (actionTypes.FETCHPOSTSBYID_FAILD):
            return {...state, isPending: false, error: action.payload}
        case (actionTypes.FETCHUSERS_PENDING):
           return {...state, isPending: true}
        case (actionTypes.FETCHUSERS_SUCCESS):
            return {...state, isPending: false, users: action.payload}
        case (actionTypes.FETCHUSERS_FAILD): 
            return {...state, isPending: false, error: action.payload}
    }
}

export default reducer;