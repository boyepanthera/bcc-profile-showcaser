import Home from "./Home";
import { Component } from "react";
import { Navbar } from "./Navbar";
import { User, GetUserById } from "./User";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={User} />
            <Route path="/users/:id" component={GetUserById} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    );
  }
}
