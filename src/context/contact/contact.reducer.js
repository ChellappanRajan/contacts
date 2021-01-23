const reducer = (state,action)=>{
    switch(action.type){
        case 'CONTACTS_LOAD_SUCCESS':
            return {...state,isLoading:false,contacts:action.contacts,error:null};
        case 'CONTACTS_LOAD_FAILED':
           return {...state,isLoading:false,error:action.payload,contacts:[]};
        case 'CONTACT_CREATE_FAILED':
            return {...state,contacCreatedFailed: action.error};
        default:
            return state;
    }
}

export default reducer;