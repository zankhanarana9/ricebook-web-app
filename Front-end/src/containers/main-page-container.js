import MainPage from '../components/main/main-page-component-js';
import {connect} from 'react-redux';
import ArticleService from '../services/article-service';
import UserService from '../services/user-service';
import { withRouter } from 'react-router-dom';

const stateToPropertyMapper = state => {        
    return state.ContentReducer;
}

const actionToPropertyMapper = dispatch => ({
    init:  () => {
        let posts = [];
        let user = [];

        ArticleService.getPosts()
            .then(res => posts = res)
                .then(res => 
                UserService.getCurrentUser()
                .then(res => user = res)  
                .then(res => {
                    dispatch({
                        type: "INITIAL_STATE",
                        posts: posts,
                        user: user
                        // followers: followers,
                        // friends: friends
                    });
                } ) )
        
                               
       
    },  
    
    updateHeadline: (newHeadLine) => {         
        UserService.updateUserHeadline(1, newHeadLine).then(res => {
            dispatch({
                type: "UPDATE_HEADLINE",
                headline: newHeadLine,
                user: res
            });
        })             
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