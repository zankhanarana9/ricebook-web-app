import {combineReducers} from 'redux';
import ContentReducer from './main-page-reducer';
import UserReducer from './user-reducer';
import LoginReducer from './login-reducer';
import ArticleReducer from './article-reducer';

const MainReducer = combineReducers({
    ContentReducer,
    UserReducer,
    LoginReducer,
    ArticleReducer
});

export default MainReducer;