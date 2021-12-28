import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import Products from "../../Components/products_scroll";
import CatalogCtr from "../../Components/CatalogCtr";

//styles
import "../Design/home.css";
import "../Design/Category.css";

//assets
import BannerImage from "../../assets/airmax.jpg";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MainHeader />
        <section className="ctg-banner-ctr">
          <img src={BannerImage} alt="SHOP ON PLUS" />
        </section>
        <section className="products-scroll-ctr">
          <Products />
        </section>
        <section className="products-scroll-ctr">
          <Products />
        </section>
        <section className="products-scroll-ctr">
          <Products />
        </section>
        <section className="products-scroll-ctr">
          <Products />
        </section>
        <div className="width-auto">
          <CatalogCtr />
        </div>
        <MainFooter />
      </>
    );
  }
}

export default Category;
