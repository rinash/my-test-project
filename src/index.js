/**
 *
 * React, React-Route, Redux Test project.
 */

import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
/**
 * Index page.
 * React, React-Route, Redux Test project.
 */

import ReactDOM from "react-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import Item from "./Components/Item";
import About from "./Components/About";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import NotFound from "./Components/NotFound";

const store = createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const AppView = props => {
  return (
    <Provider store={store}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/item" component={Item} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Provider>
  );
};

ReactDOM.render(
  <Router>
    <Route render={routeProps => <AppView {...routeProps} />} />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
