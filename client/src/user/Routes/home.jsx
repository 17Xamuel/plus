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
            <div className="ctg-li-ctr">
              <ul className="ctg-li">
                <li>Xamuel</li>
                <li>Xamuel</li>
                <li>Xamuel</li>
                <li>Xamuel</li>
                <li>Xamuel</li>
                <li>Xamuel</li>
                <li>Xamuel</li>
                <li>Xamuel</li>
              </ul>
            </div>
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
