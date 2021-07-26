import React from 'react';
import "./App.css";
// import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container }from 'react-bootstrap';
// import Header from "./components/Header";
import LandingPage from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  document.title="Stocka"
  return (
    <Router>
      <Container fluid>
        {/* <Header/> */}
        
        <Switch>
           <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/login" exact>
            <Container fluid className="p-0 m-0">            
            <Login/>
            </Container>
          </Route>
          <Route path="/signup" exact>
            <Container fluid className="p-0 m-0">
               <Signup/>
            </Container>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
