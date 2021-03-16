import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/users">Users</Link>
        </div>
      </>
    );
  }
}
