import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Calculators } from "./components/Calculators";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Calculator } from 'react-bootstrap-icons';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Calculators />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
