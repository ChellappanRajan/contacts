const reducer = (state,action)=>{
    switch(action.type){
        case 'USERINFOSUCCESS':
        case 'LOGIN_SUCCESS':
            return {...state,isLoading:false,isLoggedIn:true,error:null};
        case 'USERINFOFAILED':
        case 'LOGIN_FAILED':
           return {...state,isLoading:false,error:action.payload}
        case 'LOGOUT':
           return {...state,isLoading:false,error:null, isLoggedIn:false}
        default:
            return state;
    }
}

export default reducer;