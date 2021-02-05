const initialState = {
    "followers": [],
    "posts":[],
    "friends" : []
}

const ContentReducer = function(state = initialState, action) {
    switch(action.type) {
        case "INITIAL_STATE":                    
            return {
                followers:action.followers,
                posts:action.posts,
                friends: action.friends
            }

        case "UPDATE_FOLLOWERS" :                   
            return {
                ...state,
                followers: action.followers ,
                friends: action.friends              
            } 
        
        case "ADD_NEW_POST":         
            return {
                ...state,
                posts: action.posts
            }

        case "ADD_NEW_COMMENT":
            return {
                ...state,
                posts: action.posts
            } 
            
        case "LIKE_COMMENT":
            return {
                ...state,
                posts: action.posts
            }    
        default: return state;    
    }
}

export default ContentReducer;
