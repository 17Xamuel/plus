import React, { Component } from "react";

//components
import Home from "./Routes/home";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Home />;
  }
}

export default User;
