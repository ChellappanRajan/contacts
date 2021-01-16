import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import CreateContact from "./components/CreateContact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import AuthState from "./context/auth/auth.state";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthState>
        <Fragment>
          <div className="App">
            <Header />
            <Switch>
              <PrivateRoute exact path="/home/:layout?" component={Contacts} />
              <PrivateRoute path="/add" component={CreateContact} />
              <PrivateRoute component={About} exact path="/about" />
              <Route exact path="/login" component={Login} />
              <Route exact path="/">
                <Redirect to="/home/grid" />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Fragment>
      </AuthState>
    </Router>
  );
}

export default App;
