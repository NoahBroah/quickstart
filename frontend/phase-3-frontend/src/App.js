import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact patch="/login">
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
