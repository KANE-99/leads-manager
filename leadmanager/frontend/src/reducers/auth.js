import { USER_LOADING,USER_LOADED,AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS,LOGOUT_SUCCESS } from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isLoading: false,
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action){
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading:false
            }
        
        case LOGOUT_SUCCESS:        
        case AUTH_ERROR:
        case LOGIN_FAILED:
            localStorage.removeItem("token");
            return {
                ...state,
                isLoading:false,
                isAuthenticated: false,
                token: null,
                user: null
            }
        
    
        default:
            return state;
    }
}