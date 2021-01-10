const initialState = {
    isUserLoggedIn: false,
    currentUser:{},    
    userHeadLine:"" , 
    posts: [],
    followers: []     
}

const MainReducer = function(state=initialState, action) {
    switch(action.type) {
        case "INITIAL_STATE": 
            return {
                followers : action.followers,
                posts: action.posts,
                userHeadLine: "Hello, sunshine!",
                currentUser:action.currentUser,
                isUserLoggedIn: true
            }

        case "UPDATE_HEADLINE" :
            return {
                ...state,
                userHeadLine: action.newHeadLine
            }
        default: return state;
    }
}

export default MainReducer;