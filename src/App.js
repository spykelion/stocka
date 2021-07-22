import React from 'react';
import "./App.css";
import styles from "./app.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Button, Container }from 'react-bootstrap';
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <Container fluid>
        <Header/>
        <Main />
        <Switch>
          <Route path="/login">
            <div>Login component</div>
          </Route>
          <Route path="/signup">
          <div>Signup component</div>
          </Route>
          <Route path="/">
          <div>Welcome</div>
          <Button className={styles.error}>My button</Button>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
