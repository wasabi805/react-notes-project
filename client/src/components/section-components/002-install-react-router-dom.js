import React, {Component} from 'react';
import {InstallReactRouterDomSnippet,InstallAJVSnippet, BuildTestCompsSnippet, ImportReactRouterDomCompsSnippet, RouterWrapSnippet, RouteWrapSnippet, MakeNavbarSnippet, ImportNavbarSnippet} from '../code-snipets/01-install-react-code-snippets'

class InstallReactRouterDom extends Component{
    render(){
        let shortHighlight = {
            browserRouter: `<BrowserRouter/>`,
            router: `<Router/>`,
            route: `<Route/>`,
            link: `<Link/>`
        };

        return(
            <section className='col-md-8  section-main' >
                <div className='wrapper'>
                    <div className='article'>
                        <h1>Install React Router</h1>
                        <h2>implement router </h2>
                        <img src='http://i44.photobucket.com/albums/f27/wasabi805/react-router-dom-log-nobg_zpsempqdo78.png'/>

                        <article className='wrapper wrapper-info-main' >
                            <h2>The Plan</h2>
                            <p>
                                The standard Lorem Ipsum passage, used since the 1500s
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                will frequently occur that pleasures have to be repudiated and annoyances accepted.
                            </p>
                        </article>

                        <article className='wrapper wrapper-contentLight'>

                            <h2>Install React Router via npm install in terminal </h2>
                            <p>cd into the client directory, then install react-router-dom by entering this command in your terminal: </p>
                            <InstallReactRouterDomSnippet/>
                            <p>As a side note from the command you just ran, the save flag (--save) installs react-router dom as a dev dependency .</p>
                            <br/>
                            <p>After react-router-dom is installed, you may have noticed that ajv is a dependency needed to run get react-router-dom to work. Let's go ahead and install it with the next command below: </p>
                            <InstallAJVSnippet/>
                            <p>Now that we've installed both react-router-dom and ajv, we can start to implement the router into our project</p>
                        </article>

                        <article className='wrapper wrapper-info'>
                            <h2>Build Test Components</h2>
                            <p>Before writing the code for the router's implementation, we'll need to build a few components in order to test if the router is working:</p>

                            <BuildTestCompsSnippet/>
                        </article>

                        <article className='wrapper wrapper-contentLight'>
                            <h2>Initial Implementation of React Router  </h2>
                            <p>Now that we have two components to test, import react-dom-router in App.js:</p>
                            <InstallReactRouterDomSnippet/>
                            <br/>
                            <p>Now that we've got it installed, let's go ahead and bring in the components we'll need to get up and running. Import the following react-router-dom components into your App.js file: </p>
                            <ImportReactRouterDomCompsSnippet/>
                            <p className='mb-5'><span className='d-block'>Notice that we've imported BrowserRouter as Router. </span>
                                Giving the BrowserRouter an alias of Router simply allows us to use the component <span className='terminal'><b>{shortHighlight.router}</b></span>  in place of  <span className='terminal'><b>{shortHighlight.browserRouter} .</b></span>
                            </p>

                            <h4>Wrap Everything in {shortHighlight.router}</h4>
                            <h6 className='mb-5'><b> Making our first routes and rendering components</b></h6>
                            <p>Next, let's actually use the router by wrapping it around everything that App.js returns:</p>
                            <RouterWrapSnippet/>
                            <p>Now that our project is wrapped in <span className='terminal'><b>{shortHighlight.router}</b></span>, we can refactor our code to use  the <span className='terminal'><b>{shortHighlight.route}</b></span> component to start defining which components render to a specific route:</p>
                            <RouteWrapSnippet/>
                            <p><span className='d-block'>Notice the difference how we routed these two components? </span>
                                talk about the difference between "exact path" vs. "path"</p>

                            <p className='mb-5'>For example, If you we're to go to URL  : <span className='terminal'>http://localhost:3000</span>, the landing component will display.
                                <span className='d-block'>Next, we can verify that our router is working by visiting our services route.</span>
                                <br/>
                                <span className='d-block'>If you go your browser and type in : <span className='terminal'>http://localhost:3000/services</span>, your screen now should switch displaying the landing component and instead, the services component should now render.</span>
                            </p>
                        </article>

                        <article className='wrapper wrapper-contentLight'>
                            <h4>Make a Navbar component</h4>
                            <h6 className='mb-3'><b> Enable component rendering by clicking on a link  </b></h6>
                            <p><span className='d-block'> Before we actually do this, we should create a navbar component to set up some links. Create a new file and name it something like <i>nav-bar.js</i></span>
                                <br/> The navbar should look more or less like this:
                            </p>
                            <MakeNavbarSnippet className='mb-3'/>
                            <p>And of course, make sure to import this component into App.js so it can render</p>
                            <ImportNavbarSnippet className='mb-3'/>

                            <p><span>With the navbar component , notice that I didn't use the router in order to render the navbar component. That's because we want this component to render on every page from within our site. </span>
                                Finally, we now have tha ability to click on a link and have the link render the component that corresponds to the url handle we provided at the beggining of this lesson.
                            </p>

                        </article>
                    </div>
                </div>
            </section>
        )
    }
}
export  default InstallReactRouterDom