import {useReducer} from 'react';
import AuthContext from "./auth.context";
import reducer from './auth.reducer';
import {LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT} from './auth.actions';
import axios from 'axios'


const AuthState  = (props) =>{

    const initialState = {
        isLoggedIn:true,
        isLoading:false,
        error: null
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const login = async (userDetails)=>{
     try {
      const isLoggedIn = await axios.post('/api/v1/login',{...userDetails});
      localStorage.setItem('contactAppToken',isLoggedIn.token);
      dispatch({type:LOGIN_SUCCESS,isLoggedIn:isLoggedIn?.success});
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

    return (
        <AuthContext.Provider
          value={{
              ...state,
              login,
              logout
          }}
        >
          {props.children}
        </AuthContext.Provider>
      );


}

export default AuthState;