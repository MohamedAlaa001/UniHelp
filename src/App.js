import "./vendor/font-awesome/css/font-awesome.min.css";
import "./vendor/font.css";
import "./App.css";
import "./customStyle.css";

import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cookies from "js-cookie";
// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./store";
// import persistor from './store';
import { PersistGate } from "redux-persist/integration/react";
import { loadUser } from "./actions/auth";

import PrivateRoute from "./components/routing/PrivateRoute";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import { CLEAR_CONFIRMATIONS } from "./actions/types";
import setCSRFToken from "./utils/setCSRFToken";

const App = () => {
  useEffect(() => {
    if (Cookies.get("sessionid")) {
      store.dispatch(loadUser());
    }
    if (Cookies.get("csrftoken")) {
      setCSRFToken(Cookies.get("csrftoken"));
    } else {
      store.dispatch({ type: "AUTH_ERROR" });
    }
    store.dispatch({ type: CLEAR_CONFIRMATIONS });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Fragment>
            <Switch>
              <Route exact path='/' component={Landing} />
              <PrivateRoute component={Dashboard} />
            </Switch>
          </Fragment>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
