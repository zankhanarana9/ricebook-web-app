import {combineReducers} from 'redux';
import ContentReducer from './content-reducer';
import UserReducer from './user-reducer';

const MainReducer = combineReducers({
    ContentReducer,
    UserReducer
});

export default MainReducer;