import {authAPI} from "../api/api";

const SET_LOGIN_WEB = 'SET-LOGIN-WEB ';

let initialState = {
    userName: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_WEB: {
            return {...state, ...action.data, isAuth: true};
        }
        default:
            return state;
    }
}

export const setAuthUserData = (login, password) =>
    ({type: SET_LOGIN_WEB, data: {login, password}})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (!response.data) {
                let {login, password} = response.data.data;
                dispatch(setAuthUserData(login, password));
            }
        });
}
export const login = (login, password) => (dispatch) => {
    authAPI.login(login, password)
        .then(response => {
            if (!response.data) {
                dispatch(getAuthUserData());
            }
        });
}
export const logout = (login, password) => (dispatch) => {
    authAPI.logout(login, password)
        .then(response => {
            if (!response.data) {
                dispatch(setAuthUserData(null, null));
            }
        });
}

export default authReducer;