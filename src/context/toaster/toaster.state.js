import { useReducer } from "react";
import { ToasterContext } from "./toaster.context";
import reducer from "./toaster.reducer";

import { SHOW_TOAST_MSG,HIDE_TOAST_MSG } from "./toaster.actions";

export const ToasterState = (props)=>{

    const initialState = [];
    const [state, dispatch] = useReducer(reducer, initialState);

    const showToaster = (payload)=>{
        dispatch({type:SHOW_TOAST_MSG,toasterConfig:{msg:payload.msg,id:payload.id} });
        setTimeout(()=>{
            console.log(payload.id);
            dispatch({type:HIDE_TOAST_MSG,id:payload.id});
        },2000);
    }

    return (<ToasterContext.Provider value={{toaster:state,showToaster}}>
            {props.children}
    </ToasterContext.Provider>) 

}