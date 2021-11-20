import React from "react";

//config
import user from "./app.config";

//users
// import User from "./user/user";
import Seller from "./admin/seller/seller";

//overall styling
import "./app.css";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user,
    };
  }
  render() {
    let user_role = user.user.user_role || "";
    if (user_role === "admin") {
      return <h1>Admin</h1>;
    } else if (user_role === "seller") {
      return <h1>Seller</h1>;
    } else {
      return <Seller />;
    }
  }
}

// export default function App() {
//   return (
//     <>
//       <User />
//     </>
//   );
// }

export default App;
