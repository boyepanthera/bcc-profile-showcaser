import { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <>
        <div className="text-4">Welcome to our Blog</div>
        <div>
          Need an Account ? <Link to="/signup">Signup here </Link>{" "}
        </div>
        <div>
          Already have an account? <Link to="/login">Login Here</Link>
        </div>
      </>
    );
  }
}
