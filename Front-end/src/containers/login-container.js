import LandingPage from '../components/auth/LandingPage';
import {connect} from 'react-redux';
import UserService from '../services/user-service';
import { withRouter } from 'react-router-dom';

const stateToPropertyMapper = state => {
    return state;
}

const actionToPropertyMapper = dispatch => ({
    init: async () => {
        dispatch({
            type: "INITIAL"
        })
    },
    
    login : async () => {               
        dispatch({
            type: "LOG_IN",
            user: UserService.getCurrentUser()
        });
    }
});

const LoginPageContainer =withRouter( connect(stateToPropertyMapper,actionToPropertyMapper)(LandingPage));

export default LoginPageContainer;