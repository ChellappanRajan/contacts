import React,{useState,useEffect,useContext} from "react";
import AuthContext from '../context/auth/auth.context';

export default function Login(props) {
 
 const [loginDetails, setLoginstate] = useState({email:'',password:''});
 const context = useContext(AuthContext);

 useEffect(() => { 
   console.log('Login Context');
  // if(context.isLoggedIn){
  //   props.history.push('/');
  //  }else{
  //    props.history.push('/login');
  //  }
 }, [context.isLoggedIn])

 const login = (e)=>{
   e.preventDefault();
   context.login(loginDetails);
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
          <label htmlFor="email">Name</label>
          <input
            placeholder="Email"
            className="text-control rounded-radius"
            id="email"
            type="email"
            onChange={setLoginDetails}
            value={loginDetails.email}
            name="email"
          />
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
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
