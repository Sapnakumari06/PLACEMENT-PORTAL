import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Startups from "./pages/startups/Startups";
import Cabin from "./pages/cabin/Cabin";
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
          <Route path="/cabin">
            <Cabin />
          </Route>
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
