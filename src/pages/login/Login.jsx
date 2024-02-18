/*import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        login page
      </div>
    )
  }
}*/
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./login.css";


function Login() {
  useEffect(() => {
    const loginData = {
      email: 'user@example.com', // Replace with the user's email
      password: 'password123', // Replace with the user's password
    };

    axios
      .post('http://localhost:5000/api/placements/api/login', loginData)
      .then((response) => {
        console.log('Login successful', response.data);
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  }, []);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link> </button>
    </div>
  );
}

export default Login;



// import Topbar from "./components/topbar/Topbar";
// import Homepage from "./pages/homepage/Homepage";
// import Startups from "./pages/startups/Startups";
// import Cabin from "./pages/cabin/Cabin";
// import Register from "./pages/register/Register";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./pages/login/Login"; // Import it only once

// function App() {
//   const currentUser = true;
//   return (
//     <Router>
//       <Topbar />
//       <div>
//         <Switch>
//           <Route exact path="/">
//             <Homepage />
//           </Route>
//           <Route path="/startups">
//             <Startups />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/cabin">
//             <Cabin />
//           </Route>
//           <Route path="/register">
//             <Register />
//           </Route>
//           {/* Add other routes as needed */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
