import Home from "./Home";
import { Component } from "react";
import { Navbar } from "./Navbar";
import { User, GetUserById } from "./User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={User} />
          <Route exact path="/users/:id" component={GetUserById} />
        </Switch>
      </Router>
    );
  }
}
