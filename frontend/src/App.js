import './App.css';
import LandingPage from './views/LandingPage';
import Navbar from './components/Navbar.js';
import Match from './views/Match'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <div>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/match">
                <Match />
              </Route>
            </Switch>
          </Router>

      </div>
    </div>
  );


};

export default App;
