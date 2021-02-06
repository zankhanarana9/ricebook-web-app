const initialState = {
    headline: "",
    newHeadLine: ""
}

function SelfReducer(state = initialState, action) {
    switch(action.type) {
        case "INITIAL":         
            return {
                ...state,
                headline: action.headline
            }
        case "NEW_HEADLINE" :
            return {
                ...state,
                newHeadLine: action.headline
            }

        case "UPDATE_HEADLINE" :
        return {  
            ...state,
            headline: action.headline,
            newHeadLine: ""
        }
        default: return state;
    }
}

export default SelfReducer;