const initialState = {
    "followers": [],
    "posts":[],    
    "currentUser" : {}
}

const ContentReducer = function(state = initialState, action) {
    switch(action.type) {
        case "INITIAL_STATE":                          
            return {
                ...state,                
                posts:action.posts,                
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

        case "UPDATE_FOLLOWERS" :                   
            return {
                ...state,
                followers: action.followers ,                           
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
