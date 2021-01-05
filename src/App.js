import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProductsPage from "./components/ProductsPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ScrollTopBtn from "./components/ScrollTopBtn";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
      <ScrollTopBtn />
      <Footer />
    </div>
  );
}

export default App;
