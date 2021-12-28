import React, { Component } from "react";

//components
import MainHeader from "../../Components/MainHeader";
import MainFooter from "../../Components/MainFooter";
import Products from "../../Components/products_scroll";

//design
import "../Design/home.css";
import "../Design/item.css";

// icons
import { AddShoppingCartOutlined } from "@material-ui/icons";

//assets
import ProductImage from "../../assets/airmax.jpg";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <MainHeader />
        <section className="width-auto">
          <div className="item-ctr">
            <div className="-b-x">
              <div className="item-img-ctr">
                <img
                  src={ProductImage}
                  alt="ITEM MAIN "
                  height="200px"
                  width="200px"
                />
                <div>
                  <img
                    src={ProductImage}
                    alt="ITEM MAIN "
                    height="75px"
                    width="75px"
                  />
                </div>
              </div>
              <div className="item-details-ctr">
                <div>
                  Brand: Nike <small>Check other products from nike</small>
                </div>
                <div>
                  Nike Airmax - Short product description here (describes
                  briefly what the item is all about)
                </div>
                <div>
                  <div className="item-price">UGX 86000</div>
                  <div id="item-discount">
                    <span> Save: 5800 </span>
                    <span>-12%</span>
                  </div>
                  <button className="plus-btn item-btn">
                    <div>
                      <AddShoppingCartOutlined fontSize="medium" />
                    </div>
                    <span>Add this item to cart</span>
                  </button>
                </div>
                <div>No Promotions for this Product - At the moment</div>
              </div>
            </div>
            <div className="-b-x">
              <h4>Item Details</h4>
              <ul>
                <li>This item has no information at the moment</li>
              </ul>
              <h4>Delivery Information</h4>
              <ul>
                <li>
                  Delivered to one of the pickup stations below, a day after
                  your order is made
                </li>
                <li>Lira University</li>
                <li>Kakooge</li>
                <li>Lumumba</li>
              </ul>
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
        <MainFooter />
      </>
    );
  }
}

export default Item;
