import { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      redirect: false,
      isRegistered: false,
      messageType: "",
      isFormSubmitting: false,
    };
  }

  handleSubmit = async (formValues) => {
    try {
      this.setState({ isFormSubmitting: true });
      let response = await axios.post(
        "https://bcc-blog-api.herokuapp.com/auth/signup",
        formValues
      );
      this.setState({
        message:
          response?.data?.message + ". Redirecting you to your dashboard.",
        messageType: "success",
        isFormSubmitting: false,
        isRegistered: true,
      });
      let stringifiedToken = JSON.stringify(response.data.token);
      localStorage.setItem("bcc-blog-token", stringifiedToken);
      setTimeout(() => this.setState({ redirect: true }), 5000);
    } catch (err) {
      if (err.response && err.response.data) {
        this.setState({
          message: err.response.data.message,
          messageType: "danger",
          isFormSubmitting: false,
        });
      } else {
        this.setState({
          message: "Issues occured. check your internet",
          messageType: "danger",
          isFormSubmitting: false,
        });
      }
    }
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { handleInputChange, handleSubmit } = this;
    let {
      email,
      password,
      confirmPassword,
      message,
      messageType,
      isRegistered,
      isFormSubmitting,
      redirect,
    } = this.state;
    return (
      <>
        {redirect ? <Redirect to="/dashboard" /> : null}
        <div className="">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit({ email, password, confirmPassword });
            }}
            className="auth-form mx-auto mt-5"
          >
            {message.length > 0 ? (
              <p className={`text-${messageType} `}>{message}</p>
            ) : (
              ""
            )}
            {isRegistered ? null : (
              <>
                <h1>Signup Page</h1>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className=" fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    // placeholder="e.g. malikoba@sodiqmubarak.com"
                    onChange={handleInputChange}
                    className="form-control boye"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className=" small form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label fw-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleInputChange}
                    id="exampleInputPassword1"
                    name="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    onChange={handleInputChange}
                    name="confirmPassword"
                  />
                </div>
                <button
                  disabled={isFormSubmitting}
                  type="submit"
                  className="btn btn-primary col"
                >
                  {isFormSubmitting ? "Registering..." : "Submit"}
                </button>
              </>
            )}
          </form>
        </div>
      </>
    );
  }
}
