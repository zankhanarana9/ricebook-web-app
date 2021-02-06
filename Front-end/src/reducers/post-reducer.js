const initialState = {
    "posts": []
}

const PostReducer = function(state = initialState, action) {
    switch(action.type) {
        case "FIND_ALL_POSTS" :
            return {
                posts: action.posts
            };

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

export default PostReducer