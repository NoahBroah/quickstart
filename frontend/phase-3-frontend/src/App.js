import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Users from "./Components/Users/Users";
import Transactions from "./Components/Transactions/Transactions"
import { useEffect, useState } from "react";
import Register from "./Components/Register";


function App() {
  const [userData, setUserData] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  const changeUser = (user) => {
    setCurrentUser(user)
  }

    useEffect(() => {
        fetch('http://localhost:4001/users')
        .then(resp => resp.json())
        .then(users => setUserData(users))
    },[])



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
          <Login changeUser={changeUser}/>
        </Route>
        <Route exact path="/users">
          <Users userData={userData} />
        </Route>
        <Route path="/transactions">
          <Transactions />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
