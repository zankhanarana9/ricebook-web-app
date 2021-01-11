const initialState = {
    "isUserLoggedIn": false,
    "currentUser": {}
}
const LoginReducer = function(state = initialState,action) {
    switch(action.type) {
        case "INITIAL_STATE" : 
            return state;

        case "LOG_IN":
            return {
                "isUserLoggedIn" : true,
                "currentUser": action.user                            
            }
        default: return state
    }
}

export default LoginReducer