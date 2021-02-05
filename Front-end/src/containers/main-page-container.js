import MainPage from '../components/main/main-page-component-js';
import {connect} from 'react-redux';
import ArticleService from '../services/article-service';
import UserService from '../services/user-service';
import { withRouter } from 'react-router-dom';

const stateToPropertyMapper = state => {
    return state;
}

const actionToPropertyMapper = dispatch => ({
    init: async () => {
        let posts = await ArticleService.getPosts();        
        let user = await UserService.getCurrentUser();
        // let friends = await UserService.getFriendList(user);
        // let followers = await UserService.getFollowers(user);                                                        
        let headline = await fetch('http://localhost:4200/api/users/1')
            .then( response => response.json())
            .then(response => response.headline);
        
        dispatch({
            type: "INITIAL_STATE",
            posts: posts,
            headline: headline
            // followers: followers,
            // friends: friends
        });
    },  
    
    updateHeadLine: (newHeadLine) => { 
        let user = UserService.updateUserHeadline(1, newHeadLine);     
        dispatch({
            type: "UPDATE_HEADLINE",
            newHeadLine: newHeadLine
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
    },

    addComment: (post, newComment) => {
        ArticleService.addComment(post,newComment);
        dispatch({
            type:"ADD_NEW_COMMENT",
            posts: ArticleService.getPosts()
        });
    },

    likeComment: (comment,like) => {
        console.log("I am here");
        ArticleService.likeComment(comment,like);
        dispatch({
            type: "LIKE_COMMENT",
            posts: ArticleService.getPosts()
        })
    }
})

const MainPageContainer = withRouter(connect(stateToPropertyMapper,actionToPropertyMapper)(MainPage))

export default MainPageContainer;