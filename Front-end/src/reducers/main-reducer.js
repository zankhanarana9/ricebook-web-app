import {combineReducers} from 'redux';
import ContentReducer from './content-reducer';
import UserReducer from './user-reducer';
import LoginReducer from './login-reducer';

const MainReducer = combineReducers({
    ContentReducer,
    UserReducer,
    LoginReducer
});

export default MainReducer;