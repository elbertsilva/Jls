import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAutenticated } from "../auth";
import Auth from "../auth";
import View from "../view/registration/";
import Home from "../view/home/";
import Player from "../view/player";
import Registration from "../view/registration";
import Contacts from "../view/home/contacts";
import Spent from "../view/spent";

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
    <BrowserRouter basename="/Jls">
      <Switch>
        <Route exact path="/" render={() => <Auth />} />
        {/* <PrivateRoute exact path="/home" component={() => <Home />} />
        <PrivateRoute exact path="/view" component={() => <View />} />
        <PrivateRoute exact path="/player" component={() => <Player />} />
        <PrivateRoute exact path="/contact" component={() => <Contacts />} /> */}

        <Route exact path="/home" render={() => <Home />} />
        <Route exact path="/view" render={() => <View />} />
        <Route exact path="/player" render={() => <Player />} />
        <Route exact path="/contact" render={() => <Contacts />} />
        <Route exact path="/registration" render={() => <Registration />} />
        <Route exact path="/spent" render={() => <Spent />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
