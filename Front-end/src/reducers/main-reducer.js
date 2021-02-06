import {combineReducers} from 'redux';
import ContentReducer from './content-reducer';
import UserReducer from './user-reducer';
import LoginReducer from './login-reducer';
import PostReducer from './post-reducer';
import SelfReducer from './self-reducer';

const MainReducer = combineReducers({
    ContentReducer,
    UserReducer,
    LoginReducer,
    PostReducer,
    SelfReducer
});

export default MainReducer;