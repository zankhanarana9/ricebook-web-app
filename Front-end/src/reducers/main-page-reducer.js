const initialState = {
    "followers": [],
    "posts":[],    
    "currentUser" : {},
    "friends": []
}

const ContentReducer = function(state = initialState, action) {
    switch(action.type) {
        case "INITIAL_STATE":                          
            return {
                ...state,                
                posts:action.posts,   
                followers: action.followers,             
                friends: action.friends,
                currentUser: action.user
            }

    case "FIND_ALL_POSTS" :
        return {
            ...state,
            posts: action.posts
        };
        case "UPDATE_HEADLINE" :
            return {  
                ...state,
                currentUser: action.user,                           
            }   
            
        case "ADD_FOLLOWER":
            let users = state.friends.filter(user => user.id !== action.followed.user.id);            
            return {
                ...state,
                friends: users,   
                followers: [...state.followers, action.followed] 
            }

        case "REMOVE_FOLLOWER":
            let friends = state.friends
            if(friends.length < 5) {
                friends = [...friends, action.user]
            }
            return {
                ...state,
                friends: friends,
                followers: action.followers
            }    
        case "ADD_NEW_POST":         
            return {
                ...state,
                posts: action.posts
            }
  
        default: return state;    
    }
}

export default ContentReducer;
