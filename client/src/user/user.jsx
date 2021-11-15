import React from "react";

//routes - home
import Home from "./Routes/home";

//routes - user
import Login from "./Routes/account/login";
import Register from "./Routes/account/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function User() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<Login />}>
          <Route path="login" element={<Login />} />
          <Route path="new" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // return <Home />;
}
//components
// import Home from "./Routes/home";

// class User extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return <Home />;
//   }
// }

export default User;
