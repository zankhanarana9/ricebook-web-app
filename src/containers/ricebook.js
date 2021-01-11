import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Profile from '../components/profile/profile-component-js';
import { Provider } from 'react-redux';
import MainPageContainer from './main-page-container';  
import {createStore} from 'redux';
import MainReducer from '../reducers/main-reducer';
import LoginPageContainer from './login-container';

const store = createStore(MainReducer);

class Ricebook extends React.Component {
    render() {
        return(                      
            <Router>
                <Provider store={store}>
                <Route path="/" exact
                    render={() => <LoginPageContainer 
                    login={store.getState().login} 
                        LoginReducer={store.getState().LoginReducer}
                    />  }
                />                    

                <Route path="/main" exact >                                 
                    <MainPageContainer />  
                </Route>               
                <Route 
                    exact
                    path="/profile/:id"
                    render= {() => <Profile user={store.getState().LoginReducer.currentUser}/>}    
                />   
                </Provider>                 
            </Router>
            
            
        )        
    }
}

export default Ricebook;