import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import CreateContact from "./components/CreateContact";
import About from "./components/About";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Fragment } from "react";
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
              <Route exact path="/">
                <Redirect to="/home/grid" />
              </Route>
              <Route path="/home/:layout?" component={Contacts} />
              <Route path="/add">
                <CreateContact />
              </Route>
              <PrivateRoute path="/about" component={About} />
                {/* <About /> */}
              {/* </PrivateRoute> */}
              <Route path="/login">
                <Login />
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
