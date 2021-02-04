const initialState = {
    "isUserLoggedIn": false,
    "currentUser": {}
}
const LoginReducer = function(state = initialState,action) {
    switch(action.type) {
        case "INITIAL" : 
            return state;

        case "LOG_IN":            
            let newstate = {
                "isUserLoggedIn" : true,
                "currentUser": action.user                            
            }           
            return newstate;
        default: return state
    }
}

export default LoginReducer