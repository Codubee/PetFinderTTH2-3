import './App.css';
import LandingPage from './views/LandingPage';
import Navbar from './components/Navbar.js';

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
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Router>

      </div>
    </div>
  );


};

export default App;
