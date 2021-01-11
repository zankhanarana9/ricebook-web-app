import LandingPage from '../components/auth/LandingPage';
import {connect} from 'react-redux';
import UserService from '../services/user-service';

const stateToPropertyMapper = state => {
    return state;
}

const actionToPropertyMapper = dispatch => ({
    init: async () => {
        dispatch({
            type: "INITIAL_STATE"
        })
    },
    
    login : async () => {        
        dispatch({
            type: "LOG_IN",
            user: UserService.getCurrentUser()
        })
    }
});

const LoginPageContainer = connect(stateToPropertyMapper,actionToPropertyMapper)(LandingPage);

export default LoginPageContainer;