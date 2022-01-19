import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Help from "@material-ui/icons/HelpOutline";
import ExpandUpIcon from "@material-ui/icons/ExpandLess";
import ExpandDownIcon from "@material-ui/icons/ExpandMore";
import User from "@material-ui/icons/PersonOutlined";
import Menu from "@material-ui/icons/MenuOutlined";
import Close from "@material-ui/icons/Close";

//styling
import "../Design/MainHeader.css";

//assets
import PlusLogo from "../assets/logos/plus_logo_black.png";
import { Link } from "react-router-dom";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpDropDownActive: false,
      userDropDownActive: false,
      sideNav: false,
    };
  }
  focus = () => {
    this.setState({
      ...this.state,
      helpDropDownActive: true,
    });
  };
  blur = () => {
    this.setState({
      ...this.state,
      helpDropDownActive: false,
    });
  };
  render() {
    return (
      <>
        <div
          className="sidenav-ctr"
          style={
            this.state.sideNav
              ? { width: "100%", left: "0px" }
              : { left: "-70%", width: "0px" }
          }
        >
          <button
            className="close-side-nav"
            onClick={() => {
              this.setState({ ...this.state, sideNav: !this.state.sideNav });
            }}
          >
            <Close fontSize="medium" />
          </button>
          <div className="side-nav-content">
            <ul className="sd-ns1 sd-ns">
              <div className="sd-hdr">Shop These Categories - Plus</div>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-shopping-basket ctg-icon"></i>
                  EasyMarket On Plus
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-pizza-slice ctg-icon"></i>
                  Fast Foods &amp; Drinks
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-layer-group ctg-icon"></i>
                  Supermarket
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-headphones-alt ctg-icon"></i>
                  Phones &amp; Accessories
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-charging-station ctg-icon"></i>
                  Electronics
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-tshirt ctg-icon"></i>
                  Clothes &amp; Shoes
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-utensils ctg-icon"></i>
                  Kitchen stuff &amp; Utensils
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Computing &amp; Accessories
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-child ctg-icon"></i>
                  Kid's Section
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Cleaning, Healthy &amp; Beauty
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-paperclip ctg-icon"></i>
                  Stationery
                </span>
              </li>
            </ul>
            <ul className="sd-ns1 sd-ns">
              <div className="sd-hdr">Shop These Categories - Plus</div>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-shopping-basket ctg-icon"></i>
                  EasyMarket On Plus
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-pizza-slice ctg-icon"></i>
                  Fast Foods &amp; Drinks
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-layer-group ctg-icon"></i>
                  Supermarket
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-headphones-alt ctg-icon"></i>
                  Phones &amp; Accessories
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-charging-station ctg-icon"></i>
                  Electronics
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-tshirt ctg-icon"></i>
                  Clothes &amp; Shoes
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-utensils ctg-icon"></i>
                  Kitchen stuff &amp; Utensils
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Computing &amp; Accessories
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-child ctg-icon"></i>
                  Kid's Section
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Cleaning, Healthy &amp; Beauty
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-paperclip ctg-icon"></i>
                  Stationery
                </span>
              </li>
            </ul>
            <ul className="sd-ns1 sd-ns">
              <div className="sd-hdr">Shop These Categories - Plus</div>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-shopping-basket ctg-icon"></i>
                  EasyMarket On Plus
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-pizza-slice ctg-icon"></i>
                  Fast Foods &amp; Drinks
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-layer-group ctg-icon"></i>
                  Supermarket
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-headphones-alt ctg-icon"></i>
                  Phones &amp; Accessories
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-charging-station ctg-icon"></i>
                  Electronics
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-tshirt ctg-icon"></i>
                  Clothes &amp; Shoes
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-utensils ctg-icon"></i>
                  Kitchen stuff &amp; Utensils
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Computing &amp; Accessories
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-child ctg-icon"></i>
                  Kid's Section
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Cleaning, Healthy &amp; Beauty
                </span>
              </li>
              <li className="sd-item">
                <span className="sd-item-name">
                  <i className="las la-paperclip ctg-icon"></i>
                  Stationery
                </span>
              </li>
            </ul>
          </div>
        </div>
        <header>
          <div className="hdr-banner-ctr">
            <div className="hdr-banner">Banner</div>
          </div>
          <nav className="hdr-nav-ctr">
            <div className="hdr-nav">
              <div
                className="menu-toggle"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    sideNav: !this.state.sideNav,
                  });
                }}
              >
                <Menu fontSize="large" />
              </div>
              <Link to="/">
                <div className="hdr-nav-logo">
                  <img src={PlusLogo} alt="" />
                </div>
              </Link>
              <div className="hdr-search-ctr">
                <div className="hdr-search">
                  <input type="text" placeholder="Search Plus...." />
                  <div className="search-icon">
                    <SearchIcon fontSize="medium" />
                  </div>
                </div>
              </div>
              <div className="hdr-user">
                <div className="hdr-user-help">
                  <button
                    className="-dropdown"
                    onFocus={this.focus}
                    onBlur={this.blur}
                  >
                    <Help fontSize="small" />
                    <span>Help</span>
                    {this.state.helpDropDownActive ? (
                      <ExpandUpIcon />
                    ) : (
                      <ExpandDownIcon />
                    )}
                  </button>
                  <ul
                    className="-help-list -acc-l"
                    style={
                      this.state.helpDropDownActive
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    <a href="./account/profile">
                      <li className="-help">
                        <i className="lar la-user"></i>
                        My Profile
                      </li>
                    </a>
                    <a href="./cart">
                      <li className="-help">
                        <i className="las la-shopping-cart"></i>
                        My Cart
                      </li>
                    </a>
                    <a href="./account/orders">
                      <li className="-help">
                        <i className="las la-gift"></i>
                        My Orders
                      </li>
                    </a>
                    <a href="./account/edit">
                      <li className="-help">
                        <i className="las la-user-edit"></i>
                        Edit Profile
                      </li>
                    </a>
                    <li className="-help">
                      <button className="-a-btn -lg" style={{ width: "100%" }}>
                        <i className="las la-sign-out-alt"></i>
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="hdr-user-account">
                  <button
                    className="-dropdown"
                    onFocus={() => {
                      this.setState({
                        ...this.state,
                        userDropDownActive: true,
                      });
                    }}
                    onBlur={() => {
                      this.setState({
                        ...this.state,
                        userDropDownActive: false,
                      });
                    }}
                  >
                    <User />
                    <span>Account</span>
                    {this.state.userDropDownActive ? (
                      <ExpandUpIcon />
                    ) : (
                      <ExpandDownIcon />
                    )}
                  </button>
                  <ul
                    className="-help-list -acc-l"
                    style={
                      this.state.userDropDownActive
                        ? { display: "flex" }
                        : { display: "none" }
                    }
                  >
                    <a href="./account/profile">
                      <li className="-help">
                        <i className="lar la-user"></i>
                        My Profile
                      </li>
                    </a>
                    <a href="./cart">
                      <li className="-help">
                        <i className="las la-shopping-cart"></i>
                        My Cart
                      </li>
                    </a>
                    <a href="./account/orders">
                      <li className="-help">
                        <i className="las la-gift"></i>
                        My Orders
                      </li>
                    </a>
                    <a href="./account/edit">
                      <li className="-help">
                        <i className="las la-user-edit"></i>
                        Edit Profile
                      </li>
                    </a>
                    <li className="-help">
                      <button className="-a-btn -lg" style={{ width: "100%" }}>
                        <i className="las la-sign-out-alt"></i>
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="hdr-user-cart">
                  <Cart />
                  <span>Cart</span>
                </div>
              </div>
              <div className="search-i-sm">
                <SearchIcon fontSize="large" />
              </div>
              <div className="user-i-sm">
                <User fontSize="large" />
              </div>
              <div className="cart-i-sm">
                <Cart fontSize="large" />
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default MainHeader;
