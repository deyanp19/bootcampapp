import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import{
    USER_FETCH_SUCCESS,
} from './types'



export const userAccountFetch = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
        .on('value', snapshot => {
            dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val()})
            console.log('snap: ' , snapshot),
            console.log('currentUser: ', currentUser.uid)
        });
    };
};
