import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './assets/css/main.css';

import NavBar from './components/01-nav-bar';
import SideBarNav from './components/02-side-bar'
import RefLinks from './components/04-ref-links';
import Landing from "./components/landing";

import InstallReact from './components/section-components/001-install-react';
import InstallReactRouterDon from './components/section-components/002-install-react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="Main">
                <NavBar/>
                <Route exact path="/" render={()=> <Landing/>} />
                <SideBarNav/>
                <Route path="/install-react" render={() =>  <InstallReact/>} />
                <Route path="/install-react-router-dom" render={() =>  <InstallReactRouterDon/>} />

                <RefLinks/>
            </div>
        </Router>
    );
  }
}

export default App;
