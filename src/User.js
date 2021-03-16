import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class User extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      message: "",
    };
  }

  async componentDidMount() {
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      console.log(response);
      this.setState({ users: response.data });
    } catch (err) {
      if (err && err.response.data) {
        this.setState({ message: err.response.data.message });
      } else {
        this.setState({ message: "Issues occured, check your internet" });
      }
    }
  }
  render() {
    const { message, users } = this.state;
    return (
      <>
        <div>{message.length > 0 ? message : ""}</div>
        <ol>
          {users.map((user) => (
            <li key={user.id}>
              <strong>Name</strong>: {user.name} | <strong>Username</strong>:{" "}
              {user.username} | <strong>Email</strong>: {user.email}{" "}
              <Link to={`/users/${user.id}`}>View More</Link>
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export class GetUserById extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      user: {
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
          street: "",
          suite: "",
          city: "",
          zipcode: "",
          geo: {
            lat: "",
            lng: "",
          },
        },
        phone: "",
        website: "",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      },
    };
  }
  async componentDidMount() {
    const id = this?.props?.match?.params?.id;
    try {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      this.setState({ isLoading: false });
      this.setState({ user: response.data });
    } catch (err) {
      if (err && err.response.data) {
        this.setState({ message: err.response.data.message });
      } else {
        this.setState({ message: "Issues occured, check your internet" });
      }
    }
  }

  render() {
    const { user, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <>
            {" "}
            <div>FullName : {user.name}</div>
            <div>userId : {user.id}</div>
            <div>Email : {user.email}</div>
            <div>
              Address : {user?.address?.suite} , {user?.address?.street},{" "}
              {user?.address?.city}, {user?.address?.zipcode}
            </div>
            <div>Phone: {user.phone}</div>
            <div>Website : {user.website}</div>
            <div>
              Company: {user?.company?.name} - {user?.company?.catchPhrase}
            </div>
          </>
        )}
      </>
    );
  }
}
