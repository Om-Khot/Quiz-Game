function QueStatusReducer(state,action){
    if(action.type == 'changeQueStatus'){
        const queId = action.payload.ID;
        let newState = [...state];
        newState[queId] = true;
        return newState;
    }
    else return state;
}

export default QueStatusReducer;