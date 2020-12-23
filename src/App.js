import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import Image from "react-bootstrap/Image"
import OurCompany from "./components/OurCompany";
import Products from "./components/Products";
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
      <Products />
      <OurCompany />

    </div>
  );
}

export default App;
