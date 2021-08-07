import React from "react";

//assets
import Banner from "../assets/banner.jpg";

//the styling...
import "../Design/products_scroll.css";

export default function Products(props) {
  return (
    <div className="-ct -b-x">
      <button className="-sc-b">
        <i className="las la-chevron-left"></i>
      </button>
      <button className="-sc-n">
        <i className="las la-chevron-right"></i>
      </button>
      <div className="-ch-all">
        <span>Trending On Yammie</span>
      </div>
      <div className="-scroll -ct -ct-trending">
        <div className="-ct-item">
          <div>
            <img src={Banner} alt="PLUSPROMOTION" />
          </div>
          <div className="">
            <div className="-ct-item-name">Nike Air - Best Step</div>
            <div className="-ct-item-price">UGX 500 - UGX 750</div>
          </div>
        </div>
        <div className="-ct-item">
          <div>
            <img src={Banner} alt="PLUSPROMOTION" />
          </div>
          <div className="">
            <div className="-ct-item-name">Nike Air - Best Step</div>
            <div className="-ct-item-price">UGX 500 - UGX 750</div>
          </div>
        </div>
        <div className="-ct-item">
          <div>
            <img src={Banner} alt="PLUSPROMOTION" />
          </div>
          <div className="">
            <div className="-ct-item-name">Nike Air - Best Step</div>
            <div className="-ct-item-price">UGX 500 - UGX 750</div>
          </div>
        </div>
        <div className="-ct-item">
          <div>
            <img src={Banner} alt="PLUSPROMOTION" />
          </div>
          <div className="">
            <div className="-ct-item-name">Nike Air - Best Step</div>
            <div className="-ct-item-price">UGX 500 - UGX 750</div>
          </div>
        </div>
        <div className="-ct-item">
          <div>
            <img src={Banner} alt="PLUSPROMOTION" />
          </div>
          <div className="">
            <div className="-ct-item-name">Nike Air - Best Step</div>
            <div className="-ct-item-price">UGX 500 - UGX 750</div>
          </div>
        </div>
      </div>
    </div>
  );
}
