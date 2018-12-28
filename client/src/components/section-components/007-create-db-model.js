import React, {Component} from 'react';
import {connect} from 'react-redux';

import {get_007_create_db_model_snippets} from '../../actions/code-snippets-actions';
import {get_images_007_create_db_model} from '../../actions/images-actions';

import {Section, Article, SectionHeaderTextBox, ArticleContainer, TextBoxPreface, TextBox} from '../styled-components/common/Sections';
import {ImageContainer,} from '../styled-components/common/ImageContainers';
import {ThemeProvider} from 'styled-components';
import CodeSnippet from '../common/Snipet';
import InlineImageTextboxContainer from '../common/inline-textbox-container';

class CreateDbModel extends Component{
    constructor(props){
        super(props);
        this.state={
            code_snippets: [],
            images: {},
        }
    }
    componentWillMount(){
        this.getSnippets();
        this.setCodeSnippet();
        this.setImages();

        console.log(this.props, 'let get this setUp');

    }

    getSnippets =()=>{
        this.props.get_007_create_db_model_snippets();
    };

    setCodeSnippet=()=>{
        this.setState({
            code_snippets: this.props.set__create_db_model_snippets.code,
        })
    };

    setImages=()=>{
        this.setState({
            images: this.props.set_images
        })
    };


   render(){
       window.scrollTo(0,0)


       let{code_snippets} = this.state;
       let {database_cylinder, create_user_js} = this.state.images;
        console.log(this.state, 'createmodel state');

       return(
           <React.Fragment>
               <Section>
                   <SectionHeaderTextBox>
                       <h1>Models and Schemas</h1>
                       <h2>Creating Database Models </h2>
                   </SectionHeaderTextBox>

                   <Article>
                       <ArticleContainer>
                           <ThemeProvider theme={database_cylinder.container_properties}>
                               <ImageContainer >
                                   <img src={database_cylinder.img_properties.src} alt=''/>
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
                       <SectionHeaderTextBox>
                           <h2>The Models</h2>
                       </SectionHeaderTextBox>

                       <h2>Create Models File</h2>

                       <p>We'll start by creating a directory for our model files. In the root of our app, create a directory called <i>"models"</i> and inside your new models directory, create a file called "User.js"</p>

                       <ArticleContainer>
                           <h2>Create actions.js</h2>
                           <InlineImageTextboxContainer image={create_user_js} alt='' />
                       </ArticleContainer>

                   </Article>
               </Section>

               <Section>
                   <SectionHeaderTextBox>
                       <h2>Configure</h2>
                   </SectionHeaderTextBox>
                   <Article>
                       <ArticleContainer>
                           <h2>Bring in Mongoose</h2>

                           <TextBox className='article-content-box1 '>
                               <h2>Bring in mongoose and Schema </h2>
                               <p>Some more text </p>

                               <CodeSnippet code_snippets={code_snippets}
                                            codeKey='initialize-schema-var'
                                            tabName='model/User.js'/>

                           </TextBox>

                           <h2>Define the Model</h2>
                           <TextBox>
                               <p>Go to models/User.js and add the following:</p>
                               <CodeSnippet code_snippets={code_snippets}
                                            codeKey='create-user-model-snippet'
                                            tabName='model/User.js'/>

                               <p>So a breakdown of our code and what it means; </p>
                               <ul>
                                   <li>1</li>
                                   <li>2</li>
                                   <li>3</li>
                               </ul>
                           </TextBox>
                       </ArticleContainer>
                   </Article>
               </Section>

           </React.Fragment>
       )
   }
};


const mapStateToProps = (state)=>({
    set__create_db_model_snippets : state.code_snippets,
    set_images : state.images.images_007_create_db_model
});

const mapDispatchToProps={
    get_007_create_db_model_snippets,
    get_images_007_create_db_model
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDbModel)