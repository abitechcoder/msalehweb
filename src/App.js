import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProductsPage from "./components/ProductsPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
