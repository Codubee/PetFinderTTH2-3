import './App.css';
import LandingPage from './views/LandingPage'
import Navbar from './components/Navbar.js'
import DisplayAnimal from './components/DisplayAnimal.js'

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <DisplayAnimal image='https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg'/>
    </div>
  );
};

export default App;
