import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Blog</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav my-auto">
        <li className="nav-item p-2">
        <Link className="link-primary" to="/signup">Register</Link>
        </li>
        <li className="nav-item p-2">
        <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    );
  }
}
