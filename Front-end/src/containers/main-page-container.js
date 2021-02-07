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
        let followers = []
        let friends = []

        ArticleService.getPosts()
            .then(res => posts = res)
            .then(res =>  UserService.getCurrentUser())
            .then(res => user = res)  
            .then(res =>  UserService.getFollowers(user))
            .then(res => followers = res)
            .then(res => UserService.getFriendList(user,followers))
            .then(res => friends = res)
            .then(res => dispatch({
                type: "INITIAL_STATE",
                posts: posts,
                user: user,
                followers: followers,
                friends: friends
            }))                 
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

    addFollower: (user, follower) => {
        UserService.addFollower(user,follower)
            .then(res => dispatch({
                type: "ADD_FOLLOWER",
                followed: res
            }));
    },

    removeFollower: (user, follower) => {
        let followers = []
        UserService.removeFollower(user, follower)
            .then(res => {
                followers = res;
                UserService.getUserById(follower.user.id)
                .then(res => dispatch({
                    type: "REMOVE_FOLLOWER",
                    followers: followers,
                    user: res
                }))
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