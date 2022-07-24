import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Calculators } from "./components/Calculators";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Route, Link } from "react-router-dom";

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   // your config
// })

// const auth = firebase.auth();
// const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Calculators />
      {/* <Route exact path="/calculators" component={Calculators} /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
