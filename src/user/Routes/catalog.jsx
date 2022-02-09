import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import CatalogCtr from "../../Components/CatalogCtr";
import Products from "../../Components/products_scroll";

//styles
import "../Design/home.css";
import FormsApi from "../../api/api";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  search = async (i) => {
    let api = new FormsApi();
    let res = await api.get(`/product/search/${i}`);
    // console.log(res);
    if (res !== "Error") this.setState({ ...this.state, products: res });
  };
  render() {
    const searchParams = new URLSearchParams(window.location.search);
    this.search(searchParams.get("q"));
    return (
      <>
        <MainHeader />
        <main className="width-auto">
          <div style={{ width: "100%" }}>
            <CatalogCtr products={this.state.products} />
          </div>
          <Products />
        </main>

        <MainFooter />
      </>
    );
  }
}

export default Catalog;
