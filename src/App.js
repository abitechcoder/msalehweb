import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Image from "react-bootstrap/Image"
import OurCompany from "./components/OurCompany";
import Products from "./components/Products";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <center className="partners">
        <Image src="/images/partners.jpg" fluid />
      </center>
      <hr/>
      <Products />
      <hr/>
      <OurCompany />
      <hr/>
      <Footer />
    </div>
  );
}

export default App;
