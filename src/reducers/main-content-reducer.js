const intialState = {
    posts: []
}

const MainContentReducer = function(state = intialState, action) {
    switch(action.type) {
        case "INITIAL_STATE" : 
            return {
                posts: action.posts
            }

        default: return state;
    }
}

export default MainContentReducer