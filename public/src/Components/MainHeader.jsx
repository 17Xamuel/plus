import React, { Component } from "react";

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
          <div class="banner">
            <div class="-b-ctr">banner</div>
          </div>
          <div>
            <div className="header-logo header-content">YAMIE</div>
            <div className="header-search header-content">
              <form className="search">
                <input
                  type="text"
                  name="q"
                  placeholder="Search Yamie...."
                  className="-ns"
                  id="v-search"
                />
                <button type="submit" className="search-button">
                  <i className="fas fa-search"></i>
                  00
                </button>
              </form>
            </div>
            <div className="header-user header-content">
              <div className="-help -user -dp">
                <button className="-dropdown -hp">
                  <i className="far fa-question-circle"></i>
                  <span className="-c-text">Help</span>
                  <i className="fas fa-chevron-down chev"></i>
                </button>
                <ul className="-help-list -hlp">
                  <a href="./404">
                    <li className="-help">
                      <i className="fas fa-clock"></i>
                      How to Order
                    </li>
                  </a>
                  <a href="./404">
                    <li className="-help">
                      <i className="fas fa-truck-loading"></i>
                      Delivery Times
                    </li>
                  </a>
                  <a href="./404">
                    <li className="-help">
                      <i className="far fa-question-circle"></i>
                      FAQs
                    </li>
                  </a>
                  <li className="-help">
                    <button className="-a-btn">
                      <i className="fas fa-sign-out-alt"></i>
                      Help Center
                    </button>
                  </li>
                </ul>
              </div>
              <div className="-help -user -dp">
                <button className="-dropdown -hp">
                  <i className="far fa-question-circle"></i>
                  <span className="-c-text">Help</span>
                  <i className="fas fa-chevron-down chev"></i>
                </button>
                <ul className="-help-list -hlp">
                  <a href="./404">
                    <li className="-help">
                      <i className="fas fa-clock"></i>
                      How to Order
                    </li>
                  </a>
                  <a href="./404">
                    <li className="-help">
                      <i className="fas fa-truck-loading"></i>
                      Delivery Times
                    </li>
                  </a>
                  <a href="./404">
                    <li className="-help">
                      <i className="far fa-question-circle"></i>
                      FAQs
                    </li>
                  </a>
                  <li className="-help">
                    <button className="-a-btn">
                      <i className="fas fa-sign-out-alt"></i>
                      Help Center
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default MainHeader;
