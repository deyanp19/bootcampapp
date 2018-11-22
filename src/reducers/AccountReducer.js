import { 
   USER_FETCH_SUCCESS
 } from '../actions/types';


const INITIAL_STATE = {
    userFirst: "",
    userLast: "",
    userEmail: "",
    userPassword: "",
}

export default ( state = INITIAL_STATE, action )=> {
    switch(action.type){
        case USER_FETCH_SUCCESS:
            // console.log('payload: ',action.payload)
            
            return state

        default:
            return state;



    }
}