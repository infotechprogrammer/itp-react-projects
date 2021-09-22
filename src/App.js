import React from "react";
import { Route, Switch } from "react-router-dom";
import ExpenseTracker from "./Projects/ExpenseTracker/ExpenseTracker";
import logo from "./logo.svg";
import "./App.css";
import GoalsList from "./Projects/GoalsList/GoalsList";

const Front = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Front />
      </Route>
      <Route path="/expense-tracker" exact>
        <ExpenseTracker />
      </Route>
      <Route path="/goals-list" exact>
        <GoalsList/>
      </Route>
    </Switch>
  );
}

export default App;
