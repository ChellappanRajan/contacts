const reducer = (state,action)=>{
    switch(action.type){
        case 'SHOW_TOAST_MSG':
            return [...state,action.toasterConfig]
        case 'HIDE_TOAST_MSG':
                return state.filter(item=>item.id !== action.id)
        default:
            return state;
    }
}

export default reducer;