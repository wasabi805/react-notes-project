import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {get_images_003_create_backend} from '../../actions/code-snippets-actions'

import {Section, SectionHeaderTextBox, Article, ArticleContainer, TextBoxPreface, TextBox} from '../styled-components/common/Sections';
import {ImageContainer, } from "../styled-components/common/ImageContainers";

import CodeSnippet from '../common/Snipet';

class SetUpCreateServer extends Component{
    constructor(props){
        super(props);
        this.state={
            code_snippets: [],
            images: {},
        }
    }
    componentWillMount(){
        this.props.get_images_003_create_backend();

        this.setState({
            images: this.props.set_images,
            code_snippets: this.props.setCreateBackendServerSnippets.code
        })
    }

   render(){


        let{code_snippets} = this.state;
       let{nodeLogo} = this.state.images;

       console.log(nodeLogo.container_properties, 'nodeLogo');
       return(
           <React.Fragment>
               <Section>
                   <Article>
                       <ArticleContainer>
                           <h2>THIS WILL BE SETTING UP FOR THE BACKEND</h2>
                           <h3>Starting Your Project </h3>

                           <ThemeProvider theme={nodeLogo.container_properties}>
                               <ImageContainer >
                                   <img src={nodeLogo.img_properties.src} alt=''/>
                               </ImageContainer>
                           </ThemeProvider>



                           <TextBoxPreface className='article-preface'>
                               <h2>Before We Start</h2>
                               <p>
                                   The standard Lorem Ipsum passage, used since the 1500s
                                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                   always holds in thesects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                               </p>
                           </TextBoxPreface>
                       </ArticleContainer>

                   </Article>
               </Section>

               <Section>
                   <Article>
                       <small id="install-backend-dependencies"/>

                       <SectionHeaderTextBox>
                           <h2>Backend Dependencies </h2>
                       </SectionHeaderTextBox>
                       <ArticleContainer>
                           <TextBox  className='article-content-box1 '>
                               <h2>Installing Through Terminal </h2>
                               <p>cd back into the ROOT directory of your project THEN, global initialize by entering this command in your terminal: </p>

                               {/*NpmInitBackend*/}

                               <CodeSnippet
                                   code_snippets={code_snippets}
                                   codeKey='npm-init-backend-snippet'
                                   tabName='terminal'
                               />

                               <p>Next, install all the dependencies that we need :</p>

                               {/*InstallAllBackEndDeps*/}


                               <CodeSnippet
                                   code_snippets={code_snippets}
                                   codeKey='install-all-backend-deps'
                                   tabName='terminal'
                               />


                               <p>The next step involves installing nodemon, will give the explanation later in this section as to what it does and why we need it.But for now,...</p>
                               {/*InstallNodemon*/}
                               <CodeSnippet
                                   code_snippets={code_snippets}
                                   codeKey='install-nodemon'
                                   tabName='terminal'
                               />
                           </TextBox>
                       </ArticleContainer>
                   </Article>
               </Section>

               <Section>
                   <Article>
                       <SectionHeaderTextBox>
                           <h2>Creating a Basic Server </h2>
                       </SectionHeaderTextBox>
                       <ArticleContainer>

                           <TextBox>
                               <TextBox>
                                   <h2>Making our first Route</h2>
                                   <p>Still, inside the ROOT directory of your project , create a server file. Most convention will have you call the file server.js for obviosu reasons </p>
                                   <div className='mb-3'>  <small style={{color: 'red'}}>NOTE: put a pic of the project folder structure</small></div>

                                   <p>Next, add these lines of code to tge server.js file::</p>

                                   {/*CreateServerJS*/}
                                   <CodeSnippet
                                       code_snippets={code_snippets}
                                       codeKey='create-server-js'
                                       tabName='server.js'
                                   />

                                   <p>So what did we do with these few lines?</p>

                                   <TextBoxPreface>
                                       <ul >
                                           <li>a.) Imported express </li>
                                           <li>b.) Defined a var for short hand usage of express from this point on</li>
                                           <li>c.) Created our first get route to the landing of '/'  </li>
                                       </ul>
                                   </TextBoxPreface>

                                   <p>in Part C, .get() in express get passed two args: the route and a callback that gets passed a request and response object
                                       I believe that the .send() method belongs to express or whatever were using to parse json: Verify this.
                                       But, when you attach that method to the response from the server the callback returns, you can put a msg in the .send() method
                                   </p>
                               </TextBox>

                               <TextBox>
                                   <h2>Adding a Port </h2>
                                   <p>Next, will need to assign a port</p>
                                   <p>Add the next two lines of code to your server.js file. The file should look like this:</p>

                                   {/*AddServerPort*/}
                                   <CodeSnippet
                                       code_snippets={code_snippets}
                                       codeKey='add-server-port'
                                       tabName='server.js'
                                   />

                                   <p>So what did we add here with these few lines?</p>
                                   <ul >
                                       <li>d.) defined a port for our back end </li>
                                       <li>e.) used the .listen() to tell our app to log a msg if we visit localhost:5000</li>
                                       <li>f.) used jsx string interpolation within the console.log  </li>
                                   </ul>
                                   <p>With these few steps, we can verify if our simple server is running , keep reading below.</p>
                               </TextBox>

                               <h2>Visit the Server's Index Page </h2>
                               <p>In the browser, go to localhost:5000. You should now see the server response we created earlier:</p>
                               <div className='mb-3'>  <small style={{color: 'red'}}>NOTE: put a pic of the server response displayed from the browser</small></div>
                           </TextBox>
                       </ArticleContainer>
                   </Article>
               </Section>

               <Section>
                   <Article>
                       <SectionHeaderTextBox>
                           <h2 >About Nodemon </h2>
                       </SectionHeaderTextBox>
                       <ArticleContainer>
                           <TextBoxPreface className='article-preface'>
                               <h2>Why Nodemon?</h2>
                               <p>
                                   Explain what it's doing later
                               </p>
                           </TextBoxPreface>
                       </ArticleContainer>

                       <ArticleContainer>
                           <TextBox>
                               <h2 >Define server scripts  </h2>
                               <p>in package.json, add the following script commands to that file:</p>
                               {/*AddServerScripts*/}
                               <CodeSnippet
                                   code_snippets={code_snippets}
                                   codeKey='add-server-scripts'
                                   tabName='package.json'
                               />
                           </TextBox>
                       </ArticleContainer>
                   </Article>
               </Section>



           </React.Fragment>


       )
   }
};

const mapStateToProps=(state)=>({
    setCreateBackendServerSnippets : state.code_snippets,
    set_images : state.images.images_003_create_backend,
});

const mapDispatchToProps={
    get_images_003_create_backend: get_images_003_create_backend
};

export default connect(mapStateToProps, mapDispatchToProps)(SetUpCreateServer)