import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import Products from "../../Components/products_scroll";

//assets
import Banner from "../../assets/banner.jpg";

//styles
import "../Design/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MainHeader />
        <main>
          <section className="main-banner-ctr">
            <ul className="ctg-li">
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-shopping-basket ctg-icon"></i>
                  EasyMarket with Yammie
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-pizza-slice ctg-icon"></i>
                  Fast Foods &amp; Drinks
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-layer-group ctg-icon"></i>
                  Supermarket
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-headphones-alt ctg-icon"></i>
                  Phones &amp; Accessories
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-charging-station ctg-icon"></i>
                  Electronics
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-tshirt ctg-icon"></i>
                  Clothes &amp; Shoes
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-utensils ctg-icon"></i>
                  Kitchen stuff &amp; Utensils
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Computing &amp; Accessories
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-child ctg-icon"></i>
                  Kid's Section
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Cleaning, Healthy &amp; Beauty
                </span>
              </li>
              <li className="ctg-item">
                <span className="ctg-name">
                  <i className="las la-paperclip ctg-icon"></i>
                  Stationery
                </span>
              </li>
            </ul>
            <div className="banner-pm">
              <img
                src={Banner}
                alt="BANNER"
                width="100%"
                height="100%"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="banner-pm-sm">
              <div className="">
                <img
                  src={Banner}
                  alt="BANNER"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="">
                <img
                  src={Banner}
                  alt="BANNER"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "5px" }}
                />
              </div>
            </div>
          </section>
          <section className="main-welcome-ctr">
            <div className="welcome-ctr">
              <div className="welcome-hdr">
                <span>Plus, Thanks For The Visit</span>
                <span>Shop The Best Products</span>
              </div>
              <div className="welcome-items">
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
              </div>
              <div className="welcome-items">
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={Banner} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
              </div>
            </div>
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
          <section className="products-scroll-ctr">
            <Products />
          </section>
          <section className="products-scroll-ctr">
            <Products />
          </section>
        </main>
      </>
    );
  }
}

export default Home;
