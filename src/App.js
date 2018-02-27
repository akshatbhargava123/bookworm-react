import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Reboot from "material-ui/Reboot";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

const App = () => 
  <div style={{margin: 20}}>
    <Reboot />
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />
  </div>

export default App;
