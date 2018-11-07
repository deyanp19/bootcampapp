import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
    REFRESH
 } from '../actions/types';

const INITIAL_STATE = {
    email: "",
    password: "",
    first: "",
    last: "",
    loading: false,
    error: "",
    user: null
}

 export default ( state = INITIAL_STATE, action) => {
     console.log(state);
     switch (action.type){
        case FIRST_NAME_CHANGED: 
            return { 
                ...state,
                first: action.payload    
            }; 

        case LAST_NAME_CHANGED: 
            return { 
                ...state,
                last: action.payload    
            }; 

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

        case CREATE_USER_SUCCESS: 
            return { 
                ...state,
                user : action.payload,
                error: "" ,
                loading: false,
            };

        case CREATE_USER_FAIL:
            return {
                ...state,
                error: "Account Creation Failed",
                password: "",
                loading: false
            }

        case CREATE_USER:
            return {
                ...state,
                error: "",
                loading: true,
            }

        case REFRESH:
            return{
                ...state,
                ...INITIAL_STATE
            }

        default: 
            return state;
     }
 }