import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import WinforDetail from "./pages/WinforDetail";
import SauceLive from "./pages/SauceLive";
import ReactNativeDetail from "./pages/ReactNativeDetail";
export class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Detail" component={Detail} />
          <Route exact path="/WinforDetail" component={WinforDetail} />
          <Route exact path="/SauceLiveDetail" component={SauceLive} />
          <Route
            exact
            path="/ReactNativeDetail"
            component={ReactNativeDetail}
          />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
