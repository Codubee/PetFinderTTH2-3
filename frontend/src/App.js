import './App.css';
import LandingPage from './views/LandingPage'
import Navbar from './components/Navbar.js'
import AnimalDescription from './components/AnimalDescription.js'

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage/>
      <div className="Description">
        <AnimalDescription name="ruff" type="dog" sex="female" shelter_name="shelter"
            adoption_url="example.com"></AnimalDescription>
      </div>
    </div>
  );
};

export default App;
