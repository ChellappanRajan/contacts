import { Fragment,useEffect, useContext } from "react";
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
import ContactState from "./context/contact/contact.state";
import { PrivateRoute } from "./utils/PrivateRoute";
import {AuthContext} from './context/auth/auth.context';
import Toaster from './components/Toaster';
import { ToasterContext} from './context/toaster/toaster.context';

function App() {
  
  const toasterContext = useContext(ToasterContext)

  return (
    <Router>
      <AuthState>
        <ContactState>
        <Fragment>
          <div className="App">
            {toasterContext?.toaster.length > 0 && toasterContext.toaster.map(({msg})=>
              (<Toaster >
              {msg}
            </Toaster>))
}
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
        </ContactState>
      </AuthState>
    </Router>
    
  );
}

export default App;
