import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";

//styling
import "../Design/MainHeader.css";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header>
          <div className="hdr-banner-ctr">
            <div className="hdr-banner">Banner</div>
          </div>
          <nav className="hdr-nav">
            <div className="hdr-nav-logo">PLUS</div>
            <div className="hdr-search-ctr">
              <input type="text" />
              <SearchIcon />
            </div>
            <div className="hdr-user">
              <div className="hdr-user-help">Help</div>
              <div className="hdr-user-help">Account</div>
              <div className="hdr-user-help">Cart</div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default MainHeader;
