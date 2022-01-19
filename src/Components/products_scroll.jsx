import React from "react";

//components
import Item from "./products_scroll_item";

//the styling...
import "../Design/products_scroll.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Products(props) {
  const scrollBackRef = useRef(null);
  return (
    <div className="-ct -b-x">
      <button
        className="-sc-b"
        onClick={() => {
          scrollBackRef.current.scrollBy({
            top: 0,
            left: -250,
            behavior: "smooth",
          });
        }}
      >
        <i className="las la-chevron-left"></i>
      </button>
      <button
        className="-sc-n"
        onClick={() => {
          scrollBackRef.current.scrollBy({
            top: 0,
            left: 250,
            behavior: "smooth",
          });
        }}
      >
        <i className="las la-chevron-right"></i>
      </button>
      <div className="-ch-all">
        <span>Recommended For You</span>
        <span>
          Check All <i className="las la-chevron-right"></i>
        </span>
      </div>
      <div className="-scroll  -ct-trending" ref={scrollBackRef}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, , 1, 3, 4, 5].map((v, i) => {
          return (
            <Link to="/item/id">
              <Item key={i} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
