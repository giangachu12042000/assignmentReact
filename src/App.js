import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";

import Product from "./pages/Products";
import Detail from "./pages/Products/details";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import BuyProduct from "./pages/BuyProduct";
import Login from "./pages/Auth/Login";
import { isAuthenticated } from "./localStorege/Auth";
import Register from "./pages/Auth/Register";

const App = () => {
  const user = isAuthenticated();
  console.log(user, "==========>");
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/products/detail/:id">
            <Detail />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/buy/:id/:quantity">
            <BuyProduct />
          </Route>
          <Route exact path="/">
            <Home />
            {/* {user ? <Home /> : <Redirect to="/login" />} */}
          </Route>
          <Route exact={true} path="/login">
            <Login />
          </Route>
          <Route exact={true} path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
