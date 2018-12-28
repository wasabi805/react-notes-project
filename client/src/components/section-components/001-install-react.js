import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components'
import {get_001_InstallReact} from '../../actions/code-snippets-actions'
import {Section, SectionHeaderTextBox, Article, ArticleContainer, TextBoxPreface, TextBox} from '../styled-components/common/Sections';
import {ImageContainer} from "../styled-components/common/ImageContainers";
import CodeSnippet from '../common/Snipet';

class InstallReact extends Component{
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
    }

    getSnippets =()=>{
        this.props.get_001_InstallReact();
    };

    setCodeSnippet =()=>{
        this.setState({
            code_snippets: this.props.setInstallReactSnippets.code
        })
    };

    setImages=()=>{
        this.setState({
            images: this.props.set_images
        })
    };

    render(){
        window.scrollTo(0,0);
        let {code_snippets} = this.state;
        let{reactLogo} = this.state.images
        console.log(this.props, 'whats in here?');

        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h1>Install React</h1>
                            <h2>Starting Your Project </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                                <ImageContainer>
                                    <ThemeProvider theme={reactLogo.container_properties}>
                                        <ImageContainer >
                                            <img src={reactLogo.img_properties.src} alt='' />
                                        </ImageContainer>
                                    </ThemeProvider>
                                </ImageContainer>

                            <TextBoxPreface>
                                <h2>Before We Start</h2>
                                <p>
                                    The standard Lorem Ipsum passage, used since the 1500s
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation
                                </p>
                            </TextBoxPreface>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Install React via npm install in terminal </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <TextBox>
                                <p>cd into the root directory of your project THEN, global install react-create-app by entering this command in your terminal: </p>
                            </TextBox>

                            <CodeSnippet code_snippets={code_snippets}
                                tabName='terminal'
                                codeKey='global-install-react-snippet'/>

                            <TextBox>
                                <p>Now that React is globally installed, run the <i>react-create-app</i> command followed by a directory name. For this example,
                                    I'm calling it <i>client</i> since I want to keep my front end files together and seperate from my server files which will get created later on.</p>
                            </TextBox>

                            <CodeSnippet code_snippets={code_snippets}
                                tabName='terminal'
                                codeKey='create-project-snippet'/>

                            <TextBox>
                                <p>The command will take a few minutes to install. After the install completes, cd into the client directory to start your app.
                                    Once you are in the directory from within you terminal, to start your new app run: </p>
                            </TextBox>

                            <CodeSnippet code_snippets={code_snippets}
                                tabName='terminal'
                                codeKey='start-react-snippet'/>

                        </ArticleContainer>
                    </Article>
                </Section>
            </React.Fragment>
           )
    }
}

const mapDispatchToProps ={
    get_001_InstallReact
};

const mapStateToProps = (state)=>({
    setInstallReactSnippets : state.code_snippets,
    set_images : state.images.images_001_install_react
});

export  default connect(mapStateToProps, mapDispatchToProps)(InstallReact)