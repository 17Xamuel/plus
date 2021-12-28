import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";

//styles
import "../Design/home.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MainHeader />
        <main>Hello Cart</main>
        <MainFooter />
      </>
    );
  }
}

export default Cart;
