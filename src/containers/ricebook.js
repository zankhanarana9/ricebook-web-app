import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from '../components/auth/LandingPage';
import Profile from '../components/profile/profile-component-js';
import { Provider } from 'react-redux';
import MainPageContainer from './main-page-container';  
import {createStore} from 'redux';
import MainReducer from '../reducers/main-reducer';

const store = createStore(MainReducer);
console.log(store.getState());

class Ricebook extends React.Component {
    render() {
        return(            
            <Router>
                <Route path="/" 
                    exact
                    render={() =>
                        <LandingPage 
                            isUserLoggedIn = {this.state.isUserLoggedIn} />
                    }                     
                />    
                <Route path="/main" >                                 
                    <Provider store={store}>                    
                        <MainPageContainer />                      
                    </Provider>  
                </Route>               
                <Route 
                    exact
                    path="/profile"
                    render= {() => <Profile />}    
                />                    
            </Router>
        )
    }
}

export default Ricebook;