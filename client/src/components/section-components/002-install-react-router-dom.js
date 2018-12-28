import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components'
import {get_002_install_react_router_snippets} from '../../actions/code-snippets-actions'
import {Section, SectionHeaderTextBox, Article, ArticleContainer, TextBoxPreface, TextBox} from '../styled-components/common/Sections';
import {ImageContainer,} from "../styled-components/common/ImageContainers";
import CodeSnippet from '../common/Snipet';

class InstallReactRouterDom extends Component{
    constructor(props){
        super(props);
        this.state={
            code_snippets:  props.get_002_install_react_router(),
            images: props.set_images,
        }
    }
    componentWillMount(){
        this.setCodeSnippet();
    }

    setCodeSnippet =()=>{
        this.setState({
            code_snippets: this.props.setInstallReactRouterSnippets.code,
        })
    };

    render(){
        console.log(this.state.images, 'react router');
        window.scrollTo(0, 0);
        let {code_snippets} = this.state;
        let {reactRouterLogo } = this.state.images

        let shortHighlight = {
            browserRouter: `<BrowserRouter/>`,
            router: `<Router/>`,
            route: `<Route/>`,
            link: `<Link/>`
        };
        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h1>Install React Router</h1>
                            <h2>implement router </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <ThemeProvider theme={reactRouterLogo.container_properties}>
                                <ImageContainer >
                                    <img src={reactRouterLogo.img_properties.src} alt=''/>
                                </ImageContainer>
                            </ThemeProvider>

                            <TextBoxPreface>
                                <h2>The Plan</h2>
                                <p>
                                    The standard Lorem Ipsum passage, used since the 1500s
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    will frequently occur that pleasures have to be repudiated and annoyances accepted.
                                </p>
                            </TextBoxPreface>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        {/*INSTALL REACT ROUTER via NPM*/}
                        <SectionHeaderTextBox>
                            <h2>Install React Router via npm install in terminal </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <TextBox>
                                <p>cd into the client directory, then install react-router-dom by entering this command in your terminal: </p>

                                <CodeSnippet code_snippets={code_snippets}
                                             codeKey='install-react-router-snippet'
                                             tabName='terminal'/>

                                <p>As a side note from the command you just ran, the save flag (--save) installs react-router dom as a dev dependency .</p>
                                <br/>
                                <p>After react-router-dom is installed, you may have noticed that ajv is a dependency needed to run get react-router-dom to work. Let's go ahead and install it with the next command below: </p>
                                <CodeSnippet code_snippets={code_snippets}
                                             codeKey='install-ajv-snippet'
                                             tabName='terminal'/>
                                <p>Now that we've installed both react-router-dom and ajv, we can start to implement the router into our project</p>
                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                    {/*Build TEST COMPONENTS*/}
                        <SectionHeaderTextBox>
                            <h2>Build Test Components</h2>
                        </SectionHeaderTextBox>
                        <TextBox>
                            <p>Before writing the code for the router's implementation, we'll need to build a few components in order to test if the router is working:</p>

                            <CodeSnippet code_snippets={code_snippets}
                                         codeKey='build-test-comps-snippet'
                                         tabName='terminal'/>
                            {/*{this.state.code_snippets.filter(code => code.key === 'build-test-comps-snippet' )}*/}
                        </TextBox>

                        <SectionHeaderTextBox>
                            <h2>Using React Router  </h2>
                        </SectionHeaderTextBox>


                        {/*INITIAL IMPLEMENTATION of REACT ROUTER*/}
                        <TextBox className='article-content-box1 '>
                            <h2>Importing</h2>

                            <p>Now that we've got it installed, let's go ahead and bring in the components we'll need to get up and running. Import the following react-router-dom components into your App.js file: </p>
                            {/*{this.state.code_snippets.filter(code => code.key === 'import-react-router-snippet' )}*/}
                            <CodeSnippet code_snippets={code_snippets}
                                         codeKey='import-react-router-snippet'
                                         tabName='terminal'/>
                            <p className='mb-5'><span className='d-block'>Notice that we've imported BrowserRouter as Router. </span>
                                Giving the BrowserRouter an alias of Router simply allows us to use the component <span className='terminal'><b>{shortHighlight.router}</b></span>  in place of  <span className='terminal'><b>{shortHighlight.browserRouter} .</b></span>
                            </p>
                        </TextBox>

                        <TextBox>
                            {/*Wrap Everything in <Router/>*/}
                            <h4>Wrap Everything in Router</h4>
                            <h6 className='mb-5'><b> Making our first routes and rendering components</b></h6>
                            <p>Next, let's actually use the router by wrapping it around everything that App.js returns:</p>
                            {/*{this.state.code_snippets.filter(code => code.key === 'router-wrap-snippet' )}*/}
                            <CodeSnippet code_snippets={code_snippets}
                                         codeKey='router-wrap-snippet'
                                         tabName='terminal'/>
                            <p>Now that our project is wrapped in <span className='terminal'><b>{shortHighlight.router}</b></span>, we can refactor our code to use  the <span className='terminal'><b>{shortHighlight.route}</b></span> component to start defining which components render to a specific route:</p>
                            {/*{this.state.code_snippets.filter(code => code.key === 'route-exact-path-snippet' )}*/}
                            <CodeSnippet code_snippets={code_snippets}
                                         codeKey='route-exact-path-snippet'
                                         tabName='terminal'/>

                            <p><span className='d-block'>Notice the difference how we routed these two components? </span>
                                talk about the difference between "exact path" vs. "path"</p>

                            <p className='mb-5'>For example, If you we're to go to URL  : <span className='terminal'>http://localhost:3000</span>, the landing component will display.
                                <span className='d-block'>Next, we can verify that our router is working by visiting our services route.</span>
                                <br/>
                                <span className='d-block'>If you go your browser and type in : <span className='terminal'>http://localhost:3000/services</span>, your screen now should switch displaying the landing component and instead, the services component should now render.</span>
                            </p>

                        </TextBox>

                    </Article>
                </Section>

                <Section>
                    <Article>
                        {/*Make a Navbar component*/}
                        <TextBox className='article-content-box1 '>
                            <h4>Make a Navbar component</h4>
                            <h6 className='mb-3'><b> Enable component rendering by clicking on a link  </b></h6>
                            <p><span className='d-block'> Before we actually do this, we should create a navbar component to set up some links. Create a new file and name it something like <i>nav-bar.js</i></span>
                                <br/> The navbar should look more or less like this:
                            </p>
                            {/*{this.state.code_snippets.filter(code => code.key === 'make-navbar-snippet' )}*/}
                            <CodeSnippet code_snippets={code_snippets}
                                         codeKey='make-navbar-snippet'
                                         tabName='terminal'/>
                            <p>And of course, make sure to import this component into App.js so it can render</p>
                            {/*{this.state.code_snippets.filter(code => code.key === 'import-navbar-snippet' )}*/}
                            <CodeSnippet code_snippets={code_snippets}
                                         codeKey='import-navbar-snippet'
                                         tabName='terminal'/>

                            <p><span>With the navbar component , notice that I didn't use the router in order to render the navbar component. That's because we want this component to render on every page from within our site. </span>
                                Finally, we now have tha ability to click on a link and have the link render the component that corresponds to the url handle we provided at the beggining of this lesson.
                            </p>
                        </TextBox>
                    </Article>
                </Section>


            </React.Fragment>
        )
    }
}
const mapDispatchToProps ={
    get_002_install_react_router: get_002_install_react_router_snippets
};

const mapStateToProps =(state)=>({
    setInstallReactRouterSnippets : state.code_snippets,
    set_images : state.images.images_002_install_react_router,
});


export  default connect(mapStateToProps, mapDispatchToProps)(InstallReactRouterDom)