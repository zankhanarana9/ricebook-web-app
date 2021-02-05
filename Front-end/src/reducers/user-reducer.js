const initialState = {
    currentUser:{},    
    userHeadLine:"" 
}

const UserReducer = function(state=initialState, action) {
    switch(action.type) {
        case "INITIAL_STATE":                     
            return {
                userHeadLine: action.headline ,                
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