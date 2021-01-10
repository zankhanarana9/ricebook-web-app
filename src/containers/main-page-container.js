import MainPage from '../components/main/main-page-component-js';
import {connect} from 'react-redux';
import ArticleService from '../services/article-service';
import UserService from '../services/user-service';

const stateToPropertyMapper = state => {
    return state;
}

const actionToPropertyMapper = dispatch => ({
    init: async () => {
        let posts = await ArticleService.getPosts();        
        let user = await UserService.getCurrentUser();
        let friends = await UserService.getFriendList(user);
        let followers = await UserService.getFollowers(user);                                                        

        dispatch({
            type: "INITIAL_STATE",
            posts: posts,
            currentUser: user,
            followers: followers,
            friends: friends
        });
    },  
    
    updateHeadLine: (newHeadLine) => {      
        dispatch({
            type: "UPDATE_HEADLINE",
            newHeadLine: newHeadLine
        });
    },

    updateFollower: (user, follower) => {       
        UserService.updateFollow(user, follower);       
        dispatch({
            type:"UPDATE_FOLLOWERS",
            followers: UserService.getFollowers(user),
            friends: UserService.getFriendList(user)
        })
    },

    addPost: (post) => {        
        ArticleService.addPost(post);
        console.log(ArticleService.getPosts());
        dispatch({
            type:"ADD_NEW_POST",
            posts: ArticleService.getPosts()
        })
    }
})

const MainPageContainer = connect(stateToPropertyMapper,actionToPropertyMapper)(MainPage)

export default MainPageContainer;