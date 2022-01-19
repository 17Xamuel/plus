import react from "react";

//assets
import Banner from "../assets/airmax.jpg";

// styling
import "../Design/products_scroll.css";

export default () => {
  return (
    <>
      <div className="-ct-item">
        <div>
          <img src={Banner} alt="PLUSPROMOTION" />
        </div>
        <div className="">
          <div className="-ct-item-name">
            Nike Air - Best Step Shoe from plus with a cheap price
          </div>
          <div className="-ct-item-price">UGX 500 - UGX 750</div>
          <div className="-ct-item-price-before">UGX 750</div>
        </div>
      </div>
    </>
  );
};
