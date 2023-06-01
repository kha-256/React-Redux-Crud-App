import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
});

const userDeleted = () => ({
    type: types.DELETE_USERS
});

export const loadUsers = () => {
    return function(dispatch){
        axios
        .get(`http://localhost:5000/users`)
        .then((resp)=>{
            console.log('resp' , resp)
            dispatch(getUsers(resp.data))
        })
        .catch((error)=> console.log('error'+ error))
    }
}

export const deleteUser = (id) => {
    return function(dispatch){
        axios
        .delete(`http://localhost:5000/users/${id}`)
        .then((resp)=>{
            console.log('resp' , resp)
            dispatch(userDeleted())
            dispatch(loadUsers())
        })
        .catch((error)=> console.log('error'+ error))
    }
}