import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import{
    FIRST_NAME_CHANGED,
    LAST_NAME_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS,
} from './types'

export const emailCreate = (text) => {
    return { 
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordCreate = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const firstNameChanged = (text) => {
    return { 
        type: FIRST_NAME_CHANGED,
        payload: text
    }
}

export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    }
}

const createUserSuccess = (dispatch, user) => {
    dispatch({
        type: CREATE_USER_SUCCESS,
        payload: user
    });
};

const createUserFail = (dispatch, error) => {
    dispatch({
        type: CREATE_USER_FAIL,
        payload: error
    })
}

export const createUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => createUserSuccess(dispatch, user))
            .then(()=>Actions.registerSuccess())
            .catch(error => createUserFail(dispatch, error));
    };

};