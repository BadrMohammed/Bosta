import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "../src/Redux/Reducers/index";
import "./assets/styles/style.css";
import "./assets/styles/mobile.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shipments from "./Components/Shipments/Shipments";
import { changeLanguage, getLanguage } from "./Localization/local";
import AOS from "aos";
import "aos/dist/aos.css";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(ReduxThunk))
);

AOS.init();

export default class App extends Component {
  constructor(props) {
    super(props);
    changeLanguage();
  }

  componentDidMount() {
    if (getLanguage() === "en") {
      document.body.style.direction = "ltr";
      document.body.style.textAlign = "left";
    } else {
      document.body.style.direction = "rtl";
      document.body.style.textAlign = "right";
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Shipments />
        {/* <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Shipments {...props} />}
            />
          </Switch>
        </BrowserRouter> */}
      </Provider>
    );
  }
}
