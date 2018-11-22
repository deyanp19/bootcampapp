import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';
import AccountReducer from './AccountReducer';

export default combineReducers({
    auth: AuthReducer,
    register: RegisterReducer,
    userAccounts: AccountReducer
})