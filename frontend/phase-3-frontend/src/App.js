import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Transactions from "./Components/Transactions/Transactions"
import { useEffect, useState } from "react";
import Register from "./Components/Register";


function App() {


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/transactions">
          <Transactions />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
