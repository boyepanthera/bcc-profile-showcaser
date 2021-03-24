import { Component } from "react";
import JWT from "jsonwebtoken";
import axios from "axios";
import { Redirect } from "react-router-dom";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      email: "",
      message: "",
      firstName: "",
      lastName: "",
      messageType: "",
      redirect: false,
      isFormSubmitting: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleProfileUpdate = async (formValues) => {
    try {
      this.setState({ isFormSubmitting: true });
      let response = await axios.put(
        `https://bcc-blog-api.herokuapp.com/user/${this.state._id}`,
        formValues
      );
      this.setState({
        message: response?.data?.message,
        messageType: "success",
        isFormSubmitting: false,
        firstName: response?.data?.user.firstName,
        lastName: response?.data?.user.lastName
      });
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

  async componentDidMount() {
    let token = JSON.parse(localStorage.getItem("bcc-blog-token"));
    let decodeUserDet = await JWT.decode(token);
    let { _id, email } = decodeUserDet;
    this.setState({ _id, email });
    try {
      let user = await axios.get(
        `https://bcc-blog-api.herokuapp.com/user/${_id}/self`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(user);
    } catch (err) {
      if (err.response && err.response.data) {
        if (err.response.data.message === "jwt expired") {
          this.setState({
            redirect: true,
            message: err.response.data.message,
            messageType: "danger",
          });
        } else {
          this.setState({
            message: err.response.data.message,
            messageType: "danger",
          });
        }
      } else {
        this.setState({
          message: "Issues occured. check your internet",
          messageType: "danger",
        });
      }
    }
  }
  render() {
    let {
      email,
      _id,
      message,
        messageType,
        firstName, 
        lastName,
        redirect,
      isFormSubmitting,
    } = this.state;
    let { handleInputChange } = this;
    return (
      <div>
        {redirect ? (
          <Redirect
            to={{ pathname: "/login", state: { email, message, messageType } }}
          />
        ) : null}
        {message.length > 0 ? (
          <p className={`text-${messageType} `}>{message}</p>
        ) : (
          ""
        )}
        This is your Dashboard <strong>{_id}: {firstName} { lastName}</strong>
        {email}{" "}
        <>
          <h3>Update Profile</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className=" fw-bold">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              onChange={handleInputChange}
              className="form-control boye"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-bold"
            >
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleInputChange}
              id="exampleInputPassword1"
              name="lastName"
            />
          </div>
          <button
            disabled={isFormSubmitting}
            type="submit"
            className="btn btn-secondary col"
          >
            {isFormSubmitting ? "Updating" : "Update"}
          </button>
        </>
      </div>
    );
  }
}
