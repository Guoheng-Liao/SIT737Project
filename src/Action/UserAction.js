import Cookie from 'js-cookie';
import Axios from 'axios';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../Constants/UserConstants';

const login = (username, password) => async (dispatch) => {
    dispatch({type: USER_LOGIN_REQUEST, payload: {username, password}});
    try{
        // http://localhost:5000
        // const {data} = await Axios.post("/users/login", {username, password});
        const {data} = await Axios.post("http://localhost:5000/users/login", {username, password});
        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_LOGIN_FAIL, payload: error.message});
    }
}

const register = (username, password) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {username, password}});
    try{
        // const {data} = await Axios.post("/users/register", {username, password});
        const {data} = await Axios.post("http://localhost:5000/users/register", {username, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}
export{ login, register }