import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAutenticated } from "../auth";
import Auth from "../auth";
import View from "../view/registration/";
import Home from "../view/home/";
import Player from "../view/player";
import Registration from "../view/registration";
import Contacts from "../view/home/contacts";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);
const Routes = () => {
  return (
    <BrowserRouter basename="/Jsl">
      <Switch>
        <Route exact path="/" render={() => <Auth />} />
        {/* <PrivateRoute exact path="/home" component={() => <Home />} />
        <PrivateRoute exact path="/view" component={() => <View />} />
        <PrivateRoute exact path="/player" component={() => <Player />} />
        <PrivateRoute exact path="/contact" component={() => <Contacts />} /> */}

        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/view" component={() => <View />} />
        <Route exact path="/player" component={() => <Player />} />
        <Route exact path="/contact" component={() => <Contacts />} />
        <Route exact path="/registration" component={() => <Registration />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
