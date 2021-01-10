const initialState = {
    isUserLoggedIn: false,
    currentUser:{},    
    userHeadLine:"" 
}

const UserReducer = function(state=initialState, action) {
    switch(action.type) {
        case "INITIAL_STATE":            
            return {
                userHeadLine: "Hello, sunshine!",
                currentUser:action.currentUser,
                isUserLoggedIn: true
            }

        case "UPDATE_HEADLINE" :
            return {
                ...state,
                userHeadLine: action.newHeadLine
            }
        default: 
            return state;
    }
}

export default UserReducer;