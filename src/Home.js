import { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      purpose: "",
      social: "",
      fullName: "",
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  //no direct mutation of state;
  //binding methods to your component using constructor method;

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // handleInputChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    return (
      <>
        <Intro age={this.state.age} fullName={this.state.fullName} />
        <Purpose age={this.state.age} designation={this.state.purpose} />
        <Social age={this.state.age} twitter={this.state.social} />
        <div>I am {this.state.age} years old</div>
        <div>Make the profile yours Fill the form below </div>
        <div>
          <label htmlFor="fullName">FullName</label>
          <input
            onChange={this.handleInputChange}
            id="fullName"
            type="text"
            name="fullName"
          />
        </div>
        <div>
          <label htmlFor="purpose">Purpose</label>
          <input
            onChange={this.handleInputChange}
            id="purpose"
            type="text"
            name="purpose"
          />
        </div>
        <div>
          <label htmlFor="social">Social</label>
          <input
            onChange={this.handleInputChange}
            id="social"
            type="text"
            name="social"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            onChange={this.handleInputChange}
            id="age"
            step="1"
            type="number"
            name="age"
          />
        </div>
      </>
    );
  }
}

class Intro extends Component {
  render() {
    return (
      <div>
        I am {this.props.fullName} and age {this.props.age}
      </div>
    );
  }
}

class Purpose extends Component {
  render() {
    return (
      <div>
        I am {this.props.designation} and age {this.props.age}
      </div>
    );
  }
}

class Social extends Component {
  render() {
    return (
      <div>
        You can Reach me on Twitter @{this.props.twitter} and age{" "}
        {this.props.age}
      </div>
    );
  }
}
