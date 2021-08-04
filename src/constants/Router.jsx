import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";


export default function Routers() {
    return(
        <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage}/>
      </Switch>
      <Redirect from='/' to='/login' />
    </Router>
    )
}