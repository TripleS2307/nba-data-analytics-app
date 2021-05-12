import React from "react";
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}