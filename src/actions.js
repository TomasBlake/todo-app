import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUsers = () => dispatch => {
    dispatch({type: actionTypes.FETCHUSERS_PENDING});
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return dispatch(fetchUsersSuccess(response.data))
    })
    .catch(error => {
        return dispatch(fetchUsersFaild(error))
    })
}

export const fetchUsersSuccess = (data) => ({
    type: actionTypes.FETCHUSERS_SUCCESS,
    payload: data
})

export const fetchUsersFaild = (error) => ({
    type: actionTypes.FETCHUSERS_FAILD,
    payload: error
})

export const fetchPostsByUserId = (userId) => dispatch => {
    dispatch({type: actionTypes.FETCHPOSTSBYID_PENDING});
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        const data = response.data.filter(item => {
            return item.userId === userId;
        });
        return dispatch(fetchPostByUserIdSuccess(data));
    })
    .catch(error => dispatch(fetchPostByUserIdFaild(error)));
}

export const fetchPostByUserIdSuccess = (data) => {
    return {
        type: actionTypes.FETCHPOSTSBYID_SUCCESS,
        payload: data
    }
}

export const fetchPostByUserIdFaild = (error) => {
    return {
        type: actionTypes.FETCHPOSTSBYID_FAILD,
        payload: error
    }
}