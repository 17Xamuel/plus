import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import CatalogCtr from "../../Components/CatalogCtr";
import Products from "../../Components/products_scroll";

//styles
import "../Design/home.css";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MainHeader />
        <main className="width-auto">
          <CatalogCtr />
          <Products />
        </main>

        <MainFooter />
      </>
    );
  }
}

export default Catalog;
