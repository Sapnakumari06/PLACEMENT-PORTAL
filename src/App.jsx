import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Startups from "./pages/startups/Startups";
import Login from "./pages/login/Login.jsx"; // Use lowercase 'l' for 'login.js'
import Cabin from "./pages/cabin/Cabin";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Write from "./pages/write/Write";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/startups">
            <Startups />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cabin">
            <Cabin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/write">
            <Write />
          </Route>
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
