import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    REFRESH
 } from '../actions/types';

const INITIAL_STATE = { 
    email: "",
    password: "",
    loading: false,
    error: "",
    user: null,
    isLoggedIn: false
}

export default ( state = INITIAL_STATE, action ) => {
    switch (action.type){
        case EMAIL_CHANGED: 
            return { 
                ...state,
                email: action.payload    
            };

        case PASSWORD_CHANGED: 
            return { 
                ...state,
                password: action.payload    
            };
            
        case LOGIN_USER_SUCCESS: 
            return { 
                ...state,
                user : action.payload,
                isLoggedIn: true
                
            };

        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: "Login Failed",
                password: "",
                loading: false
            }

        case LOGIN_USER:
            return {
                ...state,
                error: "",
                loading: true
            }

        case REFRESH:
            return {
                ...state,
                email: "",
                password: "",
                loading: false,
                error: "",
            }

        default: 
            return state;
    }
};