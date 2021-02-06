const initialState = {
    currentUser:{},    
}

const UserReducer = function(state=initialState, action) {
    switch(action.type) {
        case "INITIAL_STATE":                     
            return {
                userHeadLine: action.headline ,                
                isUserLoggedIn: true
            }
        
        default: 
            return state;
    }
}

export default UserReducer;