
const initialState = {}

const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {}
        default:
            return state;
    }
}

export default cartReducer;