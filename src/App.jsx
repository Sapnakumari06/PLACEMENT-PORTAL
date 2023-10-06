import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Startups from "./pages/startups/Startups";
import Login from "./pages/login/Login";
import Cabin from "./pages/cabin/Cabin";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
