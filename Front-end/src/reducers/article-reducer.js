const intialState = {
    comments: [],
    newComment: ""
}

function ArticleReducer (state = intialState, action) {
    switch(action.type) {
        case "INITIAL":
            return  {
                ...state,
                comments: action.comments
            }

        case "ADD_NEW_COMMENT":                  
            return {
                ...state,
                comments: [...state.comments, action.comment],
                newComment: ""
            }     
    
        case "HANDLE_COMMENT_CHANGE":
            return {
                ...state,
                newComment: action.newComment
            }    
        default: return state;
    }
}

export default ArticleReducer;
