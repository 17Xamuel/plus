import React from "react";

//routes - seller
import Dashboard from "./Dashboard";

//design
import "../dashboard.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Seller() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Seller;
