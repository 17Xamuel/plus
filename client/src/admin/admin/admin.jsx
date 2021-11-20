import React from "react";

//routes - admin
import Dashboard from "./Dashboard";

//design
import "../dashboard.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Admin() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Admin;
