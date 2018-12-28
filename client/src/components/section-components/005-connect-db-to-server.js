import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components'
import {get_005_connect_db_to_server_snippets} from '../../actions/code-snippets-actions'
import {Section, SectionHeaderTextBox, Article, ArticleContainer, TextBoxPreface, TextBox} from '../styled-components/common/Sections';
import {ImageContainer, ImageWrapperStyled} from "../styled-components/common/ImageContainers";
import CodeSnippet from '../common/Snipet';
import InlineImageTextboxContainer from '../common/inline-textbox-container';

class ConnectDbToServer extends Component{
    constructor(props){
        super(props);
        this.state={
            code_snippets: this.props.get_005_connect_db_to_server_snippets().payload,
            images: this.props.set_images,
            hero_container_props: this.props.set_images.hero_container_props,
        }
    }

   render(){
        console.log(this.state.images);


       window.scrollTo(0,0)
        let {code_snippets} = this.state;
       let{mongoDbLogo, nodeLogo, expressLogo, createKeysFile} = this.state.images
       return(
           <React.Fragment>
               <Section>
                   <Article>
                       <SectionHeaderTextBox>
                           <h1>Connecting mongoDb to Express Server</h1>
                           <h2>SubHeader </h2>
                       </SectionHeaderTextBox>

                       <ArticleContainer>

                           <ImageContainer theme={this.state.hero_container_props}>
                               <ThemeProvider theme={nodeLogo.container_properties}>
                                   <ImageWrapperStyled>
                                       <img src={nodeLogo.img_properties.src} alt=''/>
                                   </ImageWrapperStyled>
                               </ThemeProvider>

                               <ThemeProvider theme={mongoDbLogo.container_properties}>
                                   <ImageWrapperStyled>
                                       <img src={mongoDbLogo.img_properties.src} alt=''/>
                                   </ImageWrapperStyled>
                               </ThemeProvider>

                               <ThemeProvider theme={expressLogo.container_properties}>
                                   <ImageWrapperStyled>
                                       <img src={expressLogo.img_properties.src} alt=''/>
                                   </ImageWrapperStyled>
                               </ThemeProvider>
                           </ImageContainer>

                           <TextBoxPreface className='article-preface'>
                               <h2>Before We Start</h2>
                               <p>
                                   MongoDb requires us to authenticate the connection between the db and our express server.js file. This section covers merely how to make the connection. In the next section, I'll cover how to create the url route that correspond to the database models you'll create later.
                                   We can store our mongoDB user name and password in a separate file: The purpose for doing this is so that when you go to commit to github,
                                   we can omit pushing up the username and password by including the keys file to file that defines what will be seen publicly in github. We'll create that file at the end of this section.
                               </p>
                           </TextBoxPreface>
                       </ArticleContainer>
                   </Article>
               </Section>

               <Section>
                   <Article>
                       <SectionHeaderTextBox>
                           <h2>Initialize mongoose with your project</h2>
                       </SectionHeaderTextBox>

                       <ArticleContainer>
                           <TextBox>
                               <h2>Requiring mongoose</h2>
                               <p>Since we already installed mongoose (See Fullstack/Set Up Back End), we'll need to bring it into the server.js file.</p>

                               <CodeSnippet code_snippets={code_snippets}
                                            tabName='server.js'
                                            codeKey='require-mongoose-snippet'
                               />
                           </TextBox>


                       </ArticleContainer>
                   </Article>
               </Section>

               <Section>
                   <Article>
                       <SectionHeaderTextBox>
                           <h2>Connecting to mongoDB</h2>
                       </SectionHeaderTextBox>

                       <ArticleContainer>
                           <h2>Create a Keys file</h2>
                           <TextBox >

                               <p>Next, inside the root of our project directory, create a directory called <i>"keys"</i> and inside this directory, create a file named <i>"keys.js"</i></p>


                                <InlineImageTextboxContainer image={createKeysFile}/>


                               <p>Next, inside our new keys.js file, add the following:</p>

                               {/*{this.state.code_snippets.filter((code)=> code.key === 'create-keys-file-snippet' )}*/}
                               <CodeSnippet code_snippets={code_snippets}
                                            tabName='keys.js'
                                            codeKey='create-keys-file-snippet'/>

                               <ul>What this file allows us to do is :
                                   <li>a.) use "module.exports" object to export  our mongoDb username and password to our server.js file</li>
                                   <li>b.) secret : "later in issuing the toke, we'll need this string" </li>
                                   <li>c.) in our server.js file, we'll make a URI request to connect to the database </li>
                               </ul>
                           </TextBox>

                           <h2>Making the URI request to mongoDB </h2>
                           <TextBox>

                               <h4>Let's Verify We Can Connect to mongoDB</h4>
                               <p> At this step, we'll make a request to make a connection to the db by:</p>
                               <ul>
                                   <li>e) creating a variable called <i>"db"</i> which is equal to the mongoDB username and password.</li>
                                   <li>f.) using the <i>".connect()"</i> method provided by mongoose</li>
                                   <li>g.) attaching a promise function by using <i>".then()"</i> method chained to the <i>".connect()"</i> method.</li>
                               </ul>
                               <p>The code will look something like this:</p>

                               <CodeSnippet code_snippets={code_snippets}
                                            tabName='server.js'
                                            codeKey='connect-to-mongoose-snippet'/>

                               <p>What the code is saying is:</p>
                               <ul>
                                   <li>1.) We define a variable called "db" where db's value in the mongoDb username and password we created earlier in this section</li>
                                   <li>2.) pass the db variable into the .connect() method in order to authenticate upon making the request to connect to the database. </li>
                                   <li>3.) within the .then() method, we'll pass a callback that , if connection is successful (ie, the username and password are correct), we'll console.log  a message of "mongodb connect" to verify we are connected. </li>
                                   <li>4.) we'll then chain a .catch() to .then() if there's a error upon attempting to connect, we'll log the error.</li>
                               </ul>

                               <p>If everything was set up correctly, we should see the success message, <i>"mongodb connect!" </i></p>
                               <p>At this point, the code for server js should look something like this:</p>

                           </TextBox>

                           <h2>Protecting Your mongoDb Username and Password </h2>
                           <TextBox>
                               <h4>Omit keys.js with .gitignore </h4>
                               <p> Many of you know how to exclude files and directories such as your node_modules however, for those who don't,  we'll cover it here. </p>

                               <p>In your .gitignore file, include your keys file to be omitted from github commits.</p>
                               {this.state.code_snippets.filter((code)=> code.key === 'edit-gitignore-file-snippet' )}

                           </TextBox>
                       </ArticleContainer>


                       <TextBox >
                           <h4>Now that we've made a connection to our database and secured our keys, let's see how we can wire up the routes we create in our server.js to terminate to specif models within our mLab database.    </h4>

                       </TextBox>
                   </Article>

               </Section>


           </React.Fragment>
       )
   }
};

const mapDispatchToProps={
    get_005_connect_db_to_server_snippets
};

const  mapStateToProps =(state)=>({
    set_connect_db_to_server_snippets : state.code_snippets,
    set_images : state.images.images_005_connect_db_to_server
});

export default connect(mapStateToProps, mapDispatchToProps )(ConnectDbToServer)