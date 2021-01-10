import MainPage from '../components/main/main-page-component-js';
import {connect} from 'react-redux';
import ArticleService from '../services/article-service';
import UserService from '../services/user-service';

const stateToPropertyMapper = state => {
    return {
        isUserLoggedIn: state.isUserLoggedIn,
        currentUser: state.currentUser,    
        userHeadLine:state.userHeadLine , 
        posts: state.posts,
        followers: state.followers 
    }
}

const actionToPropertyMapper = dispatch => ({
    init: async () => {
        let posts = await ArticleService.getPosts();        
        let followers = await UserService.getUsers();                               
        dispatch({
            type: "INITIAL_STATE",
            posts: posts,
            currentUser: followers[followers.length-1],
            followers: followers.slice(0,2)
        });
    },  
    
    updateHeadLine: (newHeadLine) => {      
        dispatch({
            type: "UPDATE_HEADLINE",
            newHeadLine: newHeadLine
        });
    },
})

const MainPageContainer = connect(stateToPropertyMapper,actionToPropertyMapper)(MainPage)

export default MainPageContainer;