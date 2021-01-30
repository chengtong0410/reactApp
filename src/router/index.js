import React from "react";
import {
  HashRouter,
  Route,
  Switch,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import Home from "../component/home";
import Login from "../component/login";

const BasicRoute = () => {
  const history = useHistory();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default BasicRoute;
