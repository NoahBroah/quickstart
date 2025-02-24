import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Users from "./Components/Users/Users";
import Register from "./Components/Register";
import NewTransaction from "./Components/Transactions/NewTransaction";
import { useEffect, useState } from "react";
import Transaction from "./Transaction";





function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4001/transactions`)
      .then((resp) => resp.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route path="/newtransactions">
          <NewTransaction setTransactions={setTransactions} transactions={transactions}/>
        </Route>
        <Route path="/transactions">
          <Transaction transactions={transactions}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
