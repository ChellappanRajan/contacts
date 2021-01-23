import {useReducer} from 'react';
import AuthContext from "./auth.context";
import reducer from './auth.reducer';
import {LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT,USERINFOSUCCESS,USERINFOFAILED} from './auth.actions';
import axios from 'axios'
import setToken from "../../utils/token";

const AuthState  = (props) =>{

    const initialState = {
        isLoggedIn:false,
        isLoading:false,
        error: null,
        userName:null
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const login = async (userDetails)=>{
     try {
      const isLoggedIn = await axios.post('/api/v1/login',{...userDetails});
      localStorage.setItem('contactAppToken',isLoggedIn.data.token);
      setToken(localStorage.contactAppToken);
      dispatch({type:LOGIN_SUCCESS,isLoggedIn:isLoggedIn?.data.success});
     } catch (error) {
      localStorage.removeItem('contactAppToken');
       const errorMsg = error?.code == '404' ? 'User Not Found' : 'Invalid Credentails'
       dispatch({type:LOGIN_FAILED,payload:errorMsg});
     }
    }

    const logout = ()=>{
       localStorage.removeItem('contactAppToken');
       dispatch({type:LOGOUT});
    }

    const getUserInfo = async ()=>{
      try {
        const userInfo = await axios.get('/api/v1/auth');
        dispatch({type:USERINFOSUCCESS,userName:userInfo.data.userName});
      } catch (error) {
        dispatch({type:USERINFOFAILED})
      }
    }

    return (
        <AuthContext.Provider
          value={{
              ...state,
              login,
              logout,
              getUserInfo
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );


}

export default AuthState;