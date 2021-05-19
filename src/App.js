import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import SkinCategory from "./Pages/SkinCategory"; 
import HairCategory from "./Pages/HairCategory"; 
import BodyCategory from "./Pages/BodyCategory";
import CosmeticCategory from "./Pages/CosmeticCategory";
import Products from "./Pages/Products";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducer";

const initialStore = {
  count: 0,
  total: 0,
  cartItem: []
};

const store = createStore(rootReducer, initialStore);

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Router>
          <Navigation />

          <Switch>
            <Route exact path="/">
              <SkinCategory />
            </Route>
            <Route path="/hair">
              <HairCategory />
            </Route>
            <Route path="/body">
              <BodyCategory />
            </Route>
            <Route path="/cosmetics">
              <CosmeticCategory />
            </Route>
            <Route path="/products/:pid">
              <Products />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </main>
    </Provider>
  );
};

export default App;
