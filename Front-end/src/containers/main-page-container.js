import MainPage from '../components/main/main-page-component-js';
import {connect} from 'react-redux';
import ArticleService from '../services/article-service';
import UserService from '../services/user-service';
import { withRouter } from 'react-router-dom';

const stateToPropertyMapper = state => {    
    return state.ContentReducer;
}

const actionToPropertyMapper = dispatch => ({
    init: async () => {
        let posts = [];
        let user = [];

        ArticleService.getPosts()
            .then(res => posts = res);
        
        UserService.getCurrentUser()
            .then(res => user = res)          
                                                       
        let headline = await fetch('http://localhost:4200/api/users/1')
            .then( response => response.json())
            .then(response => response.headline);
                
        dispatch({
            type: "INITIAL_STATE",
            posts: posts,
            headline: headline,
            user: user
            // followers: followers,
            // friends: friends
        });
    },  
        

    updateFollower: (user, follower) => {       
        UserService.updateFollow(user, follower);       
        dispatch({
            type:"UPDATE_FOLLOWERS",
            // followers: UserService.getFollowers(user),
            // friends: UserService.getFriendList(user)
        })
    },

    addPost: (post) => {        
        ArticleService.addPost(post);        
        dispatch({
            type:"ADD_NEW_POST",
            posts: ArticleService.getPosts()
        })
    } 
})

const MainPageContainer = withRouter(connect(stateToPropertyMapper,actionToPropertyMapper)(MainPage))

export default MainPageContainer;