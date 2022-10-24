import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Components/Home";
import Users from "./Components/Users/Users";
import Transactions from "./Components/Transactions/Transactions"
import Register from "./Components/Register";
import NewTransaction from "./Components/Transactions/NewTransaction";
import BarChart from "./BarChart";




function App() {


  return (
    <div className="App">
      <NavBar />
      {/* <BarChart/> */}
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route path="/transactions">
          <NewTransaction />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
