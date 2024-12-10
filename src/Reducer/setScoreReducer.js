function setScoreReducer(state,action){
    if(action.type == 'add_score'){
        return state + 10;
    }
    else return state;
}

export default setScoreReducer;