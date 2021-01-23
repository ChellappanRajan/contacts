import React,{useState,useEffect,useContext} from "react";
import AuthContext from '../context/auth/auth.context';
import { ToasterContext } from "../context/toaster/toaster.context";


export default function Login(props) {
 
 const [loginDetails, setLoginstate] = useState({email:'',password:''});


 const [isValidEmail,setEmailValidState] = useState(false);
 const [isPasswordValid,setPasswordState] = useState(false);


 const context = useContext(AuthContext);

 const toasterContext = useContext(ToasterContext);

 useEffect(() => { 
   console.log(toasterContext);
  if(context.isLoggedIn){
    props.history.push('/');
   }
 }, [context.isLoggedIn,props.history])

 const login = (e)=>{
   e.preventDefault();
   toasterContext.showToaster({msg:'LoginSuccessFull', id:0});
  //  const {email,password} = loginDetails;
  //  setEmailValidState(!email?.length);
  //  setPasswordState(!password?.length);
  //  if(loginDetails.email?.length > 0 && loginDetails.password?.length){
  //    context.login(loginDetails);
  //  }
 }


 
const setLoginDetails =(e)=>{
  setLoginstate((previousState)=>({
    ...previousState,[e.target.name]:e.target.value
   }))
 }


  return (
    <div className="login-container">
      <form onSubmit={login}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            className="text-control rounded-radius"
            id="email"
            type="email"
            onChange={setLoginDetails}
            value={loginDetails.email}
            name="email"
          />
          {isValidEmail && <div className="error">Please enter valid email.</div>}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            className="text-control rounded-radius"
            id="password"
            type="password"
            onChange={setLoginDetails}
            value={loginDetails.password}
            name="password"
          />
        {isPasswordValid && <div className="error">Please enter valid password.</div>}
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
