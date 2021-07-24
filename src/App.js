import React from 'react';
import "./App.css";
import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button, Container }from 'react-bootstrap';
import Header from "./components/Header";
import LandingPage from "./components/Main";
function App() {
  return (
    <Router>
      <Container fluid>
        {/* <Header/> */}
        
        <Switch>
           <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Link to="/">Home</Link>
            <div>Login component</div>
          </Route>
          <Route path="/signup">
          <div>Signup component</div>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
