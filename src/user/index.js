import React from "react";

//routes - home
import Home from "./Routes/home";
import Category from "./Routes/category";
import Cart from "./Routes/cart";
import Item from "./Routes/item";

//routes orders
import Checkout from "./Routes/orders/checkout";

//routes - user
import Login from "./Routes/account/login";
import Register from "./Routes/account/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./Routes/catalog";

function User() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="item/:id" element={<Item />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user" element={<Login />}>
          <Route path="login" element={<Login />} />
          <Route path="new" element={<Register />} />
        </Route>
        <Route path="order" element={<Checkout />}>
          <Route path="checkOut" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default User;
