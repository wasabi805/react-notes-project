import React,{Component}  from 'react';
import Highlight from 'react-highlight'

//Install React

export const GlobalInstallReactSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet terminal'>
        {`npm i -g create-react-app`}
    </Highlight>;

export const CreateProjectSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet terminal'>
        {`create-react-app client`}
    </Highlight>;

export const StartReactSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet terminal'>
        {`npm start`}
    </Highlight>;

//    Install React Router

export const InstallReactRouterDomSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet terminal'>
        {`npm install --save react-router-dom`}
    </Highlight>;

export const InstallAJVSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet terminal'>
        {`npm install ajv`}
    </Highlight>;

export const BuildTestCompsSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>
    {`
    import React, {Component} from 'react';
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <div className="main">
                    <Landing/>
                    <Services/>
                </div>
            );
        }
    }
    `}
    </Highlight>;

export const ImportReactRouterDomCompsSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <div className="main">
                    <Landing/>
                    <Services/>
                </div>
            );
        }
    }
    `}</Highlight>;

export const RouterWrapSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <Router>
                    <div className="main">
                        <Landing/>
                        <Services/>
                    </div>
                </Router>
            );
        }
    }
    `}</Highlight>;

export const RouteWrapSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <Router>
                    <div className="main">
                        <Route exact path="/" render={ ()=> <Landing/> }/>
                        <Route path="/services" render={ ()=> <Services/> }/>
                        <Services/>
                    </div>
                </Router>
            );
        }
    }
    `}</Highlight>;

export const MakeNavbarSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>
        {`
    import React from 'react';
    import {Link} from 'react-router-dom'

    const Navbar =()=>{
        return(
            <nav className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
            </nav>
        );
    }
    export default Navbar
    `}</Highlight>;


export const ImportNavbarSnippet =()=>
    <Highlight language="javascript" className='code-block-snippet ide'>
        {`
    import React, {Component} from 'react';
    import {BrowserRouter as Router, Route} from 'react-router-dom'
    import Navbar from './components/nav-bar.js
    import Landing from "./components/landing.js";
    import Services from "./components/services.js";

    class App extentds Component{
        render(){
            return(
                <Router>
                    <div className="main">
                        <Navbar/>
                        <Route exact path="/" render={ ()=> <Landing/> }/>
                        <Route path="/services" render={ ()=> <Services/> }/>
                        <Services/>
                    </div>
                </Router>
            );
        }
    }
    `}</Highlight>;

