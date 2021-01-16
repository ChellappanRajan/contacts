import { useContext } from "react";

import { Redirect, Route } from "react-router-dom";
import AuthContext from "../context/auth/auth.context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);

  const { isLoggedIn } = authContext;
  const routeComponent = (props) =>
    isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
  return <Route {...rest} render={routeComponent} />;
};
