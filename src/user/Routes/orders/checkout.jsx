import React, { Component } from "react";

//components
import MainHeader from "../../../Components/MainHeader";
import MainFooter from "../../../Components/MainFooter";

//styles
import "../../Design/home.css";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MainHeader />
        <main>Hello checkout</main>
        <MainFooter />
      </>
    );
  }
}

export default Checkout;
