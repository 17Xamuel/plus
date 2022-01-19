import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import Products from "../../Components/products_scroll";
import MainFooter from "../../Components/MainFooter";

//assets
import Banner from "../../assets/banner.jpg";
import welcome_shoes from "../../assets/airmax.jpg";
import welcome_phone_accessories from "../../assets/studio-speech.png";
import welcome_sandals from "../../assets/men_sandals.jpg";
import welcome_utencils from "../../assets/utencils.jpg";
import welcome_tshirts from "../../assets/cloth4.jpg";
import welcome_drinks from "../../assets/milk.jpg";
import welcome_foodstuffs from "../../assets/super_rice.png";
import welcome_electronics from "../../assets/tea.jpg";
import welcome_laptop_accessories from "../../assets/hp_battery.jpg";
import welcome_music from "../../assets/headsets.png";
import welcome_computers from "../../assets/hp-elitebook.png";
import welcome_cleaning from "../../assets/cleaning.jpg";

//styles
import "../Design/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerCounter: 1,
      bannerTimerStart: 0,
    };
  }
  componentDidMount = () => {
    this.bannerTimer();
  };
  bannerTimer = () => {
    setInterval(() => {
      this.setState({
        ...this.state,
        bannerCounter:
          this.state.bannerCounter === 6 ? 1 : this.state.bannerCounter + 1,
      });
    }, 5000);
  };
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
                  EasyMarket On Plus
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
              <PromotionImage active={this.state.bannerCounter} />
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
                    <img src={welcome_utencils} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Utencils</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_tshirts} alt="T shirts on plus" />
                  </div>
                  <div>
                    <div>T Shirts</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_sandals} alt="Get Sandals on Plus" />
                  </div>
                  <div>
                    <div>Sandals</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_phone_accessories}
                      alt="Shop your Phone accessories from plus"
                    />
                  </div>
                  <div>
                    <div>Phone Accessories</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_shoes} alt="Shop Nice Shoes from plus" />
                  </div>
                  <div>
                    <div>Shoes</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_foodstuffs} alt="Shop Foods on Plus" />
                  </div>
                  <div>
                    <div>Food Stuffs</div>
                  </div>
                </div>
              </div>
              <div className="welcome-items">
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_music}
                      alt="Get Music Accessories on Plus"
                    />
                  </div>
                  <div>
                    <div>For Music</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_electronics}
                      alt="One Stop for electronics"
                    />
                  </div>
                  <div>
                    <div>Electronics</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_drinks} alt="Get Cold Drinks on Plus" />
                  </div>
                  <div>
                    <div>Drinks</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_cleaning}
                      alt="Cleaning Materials On Plus"
                    />
                  </div>
                  <div>
                    <div>Cleaning</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img src={welcome_computers} alt="Shop Foods on Yammie" />
                  </div>
                  <div>
                    <div>Computers</div>
                  </div>
                </div>
                <div className="welcome-item">
                  <div>
                    <img
                      src={welcome_laptop_accessories}
                      alt="Shop Foods on Yammie"
                    />
                  </div>
                  <div>
                    <div>PC Accessories</div>
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
        <MainFooter />
      </>
    );
  }
}

export default Home;

const PromotionImage = (props) => {
  return (
    <>
      <div className="banner-pm-indicators">
        {[1, 2, 3, 4, 5, 6].map((v, i) => (
          <button
            className={
              props.active === i + 1 ? "banner-pm-indicator-active" : ""
            }
          ></button>
        ))}
      </div>
      <img
        src={Banner}
        alt="BANNER"
        width="100%"
        height="100%"
        style={{ borderRadius: "5px" }}
      />
      <button className="banner-pm-btns-left">
        <i className="las la-chevron-left"></i>
      </button>
      <button className="banner-pm-btns-right">
        <i className="las la-chevron-right"></i>
      </button>
    </>
  );
};
