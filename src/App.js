import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import CreateContact from './components/CreateContact';
import About from './components/About';
import Login from './components/Login';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Switch>
       <Fragment>
          <div className="App">
          <Header />
          <Route exact path="/">    
            <Redirect to="/home/grid" />
          </Route>
          <Route path="/home/:layout?" component={Contacts} />
          <Route path="/add">
            <CreateContact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Footer />
        </div>
       </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
