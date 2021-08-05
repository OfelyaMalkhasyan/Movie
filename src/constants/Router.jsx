import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";
import Movies from "../components/MoviePage/Movies/Movies";

export default function Routers() {
    return(
        <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/movie' component={Movies}/>
      </Switch>
      <Redirect from='/' to='/login' />
    </Router>
    )
}