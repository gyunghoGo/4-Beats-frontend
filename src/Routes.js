import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Main from './pages/Main/Main'
import SignInUp from "./pages/SignInUp/SignInUp";
import Main from "./pages/Main/Main";
import Products from "./pages/Products/Products";
import ProductDetailPage from "./pages/Products/ProductDetailPage/ProductDetailPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signIn" component={SignInUp} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/detail" component={ProductDetailPage} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
