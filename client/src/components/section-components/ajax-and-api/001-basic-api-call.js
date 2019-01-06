import React, {Component} from 'react';
import {connect} from 'react-redux';

import {get_images_001_ajax_and_api_basic_api_calls} from '../../../actions/images-actions';
import {get_snippets_001_ajax_and_api_basic_api_calls} from '../../../actions/code-snippets-actions'
import {get_text_001_ajax_and_api_basic_api_calls} from '../../../actions/section-text-actions';

import {Section, Article, ArticleContainer, SectionHeaderTextBox,TextBoxPreface, TextBox} from '../../styled-components/common/Sections';
import {ImageContainer, } from '../../styled-components/common/ImageContainers';
import Image from '../../common/Image';
import {InlinePresenter_Snippet_LEFT, InlinePresenter_Snippet_RIGHT, InlinePresenter_Image_LEFT, InlinePresenter_Image_RIGHT} from '../../common/inline-presenters'

import CodeSnippet from '../../common/Snipet';
import CodeBreakDown from '../../common/code-breakdown'

class BasicApiCall extends Component{
    constructor(props){
        super(props);
        this.props.get_snippets_001_ajax_and_api_basic_api_calls();
        this.props.get_text_001_ajax_and_api_basic_api_calls();

        this.state={
            images: this.props.set_images,
            code_snippets: this.props.set_snippets.code[0],
            inline_snippets: this.props.set_snippets.code[1],
            text: this.props.set_text.section_text,
            users: [],

        };

    }
    componentDidMount() {
        fetch('/api/users/all-users').then(res=>res.json()).then(users=> this.setState({users: users}))
    }


    render(){
        let {hero_img_api_logo, create_server_js, create_users_js, verify_ajax_call_01, verify_ajax_call_02, verify_ajax_call_03} = this.state.images;
        let {code_snippets, inline_snippets, text, images} = this.state;
        let {install_dependencies, set_up_users_js_ajax_call, fetch_api} = this.state.text;


        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h1>Test Making a basic API CALL</h1>
                            <h2>make a call</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <ImageContainer>
                                <Image img={hero_img_api_logo}/>
                            </ImageContainer>

                            <TextBoxPreface>
                                <h2>Before We start</h2>
                               <p> Basic API call</p>
                            </TextBoxPreface>

                        </ArticleContainer>

                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Set Up</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>

                            <TextBox>
                                <h2>Install Dependencies</h2>
                                <p>Lets use the terminal to install the basic necessities in order to make an Ajax call:</p>

                                <InlinePresenter_Snippet_LEFT
                                    code_snippets={inline_snippets}
                                    tabName='terminal'
                                    codeKey='npm-init-backend-snippet'
                                    inLineText={"First, make sure that you have an express server: In your terminal, make sure that you're in the root directory then run:"}
                                />

                                <InlinePresenter_Snippet_RIGHT
                                    code_snippets={inline_snippets}
                                    tabName='terminal'
                                    codeKey='install-deps-basic-api-call-express-axios'
                                    inLineText={'SECOND, install express and axios:'}
                                />

                                <InlinePresenter_Snippet_LEFT
                                    code_snippets={inline_snippets}
                                    tabName='terminal'
                                    codeKey='install-deps-basic-api-call-nodemon'
                                    inLineText={'Third, install nodemon as a dev dependency:'}
                                />

                            </TextBox>

                        </ArticleContainer>

                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Create Server and Route Files</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>

                            <TextBox>
                                <h2>Server</h2>
                                <p>Lets use the terminal to install the basic necessities in order to make an Ajax call:</p>

                                <InlinePresenter_Image_LEFT
                                    img={create_server_js}
                                    inLineText={"In the root directory of your project, create a server.js file"}
                                />

                                <InlinePresenter_Image_LEFT
                                    img={create_users_js}
                                    inLineText={"next, create the users routes file"}
                                />

                            </TextBox>

                        </ArticleContainer>

                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Set up Server fle</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>

                            <TextBox>
                                <h2>Set up Server File</h2>
                                <p>Add the following code</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='server.js'
                                             codeKey='set-sup-server-js'/>
                            </TextBox>

                        </ArticleContainer>

                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Set Up the Backend</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>

                            <TextBox>
                                <h2>Set up users route file</h2>
                                <p>The important part when setting up an API call to an external server is to make sure that we are hitting that URI. We;ll start simply by seeing we can console log the response from the API. </p>
                                <br/>
                                <p>Add the following code</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users/users.js'
                                             codeKey='set-up-users-js-basic-api-call'/>

                                <p>Note: cite <a href='https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest'>XHR</a> methods when speaking about .send( ) </p>
                                <h2>Breaking down the code...</h2>
                                <p>Let's go through the code:</p>
                                <CodeBreakDown section={set_up_users_js_ajax_call} text={text}/>

                                <h2>Check API Contact in Terminal</h2>
                                <p>Now that we have our basic set up, lets visit the our " /all-users " route for our node server: In the browser, visit the route : "http://localhost:5000/api/users/all-users" .  It's important to note that the browser may return an empty response however, we can check our terminal to see if the we are logging the api data . see step 3a </p>

                                <p>As you can see our node server is in fact logging the response from the API : </p>
                                <ImageContainer>
                                    <Image img={verify_ajax_call_01}/>
                                </ImageContainer>

                                <p>That's great, we can see that we're reaching the api but, let's see how this data is being stored on their database. </p>
                                <p>In the terminal, scroll up untill we can see the the first user :</p>

                                <InlinePresenter_Image_LEFT
                                    img={verify_ajax_call_02}
                                    inLineText={"Notice that each user is an object stored in an array called 'data' "}
                                />
                                <p>It's important to note that the object returned from the API call contains a key of data whose value is an array of objects that contain each user's data. This means that we can target all the users by accessing users.data .    </p>

                                <h2>Target the users</h2>
                                <p>Below, let's now edit the all-users route so that are server targets only the users. make the following edit to the users.js file:</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users/users.js'
                                             codeKey='set-up-users-js-02-basic-api-call'/>

                                <p>The only thing we've done here is we taken our res arg from the callback passed to router.get() and used the .send() method provided from -put in the language that provides .send()- and pass in user.data </p>

                                <h2>Verify The Response </h2>
                                <p></p>
                                <InlinePresenter_Image_RIGHT
                                    img={verify_ajax_call_03}
                                    inLineText={"Now that we're actually sending back a response instead iof just logging it in the terminal, lets verify in the browser by typing in ' http://localhost:5000/api/users/all-users ' "}
                                />

                            </TextBox>

                        </ArticleContainer>

                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Set Up the FrontEnd</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>

                            <TextBox>
                                <h2>Define a Proxy Server</h2>
                                <p>In package.json LOCATED in the client directory.. This is is the package.json that was created from create-react app</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users/users.js'
                                             codeKey='declare-proxy-server'/>

                                <p>State what the proxy server does</p>
                            </TextBox>

                            <TextBox>
                                <h2>fecth API</h2>
                                <p>Edit the component ...</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users/users.js'
                                             codeKey='fetch-api'/>
                                <h2>Breaking Down the Code ...</h2>
                                <p>Lets go through the code..</p>
                                <CodeBreakDown section={fetch_api} text={text}/>

                            </TextBox>

                        </ArticleContainer>

                    </Article>
                </Section>

            </React.Fragment>
        )
    }
}

const mapStateToProps =(state)=>({

    set_snippets: state.code_snippets,
    set_images: state.images.images_001_ajax_and_api_basic_api_call,
    set_text : state.text
});

const mapDispatchToProps ={
    get_images_001_ajax_and_api_basic_api_calls,
    get_snippets_001_ajax_and_api_basic_api_calls,
    get_text_001_ajax_and_api_basic_api_calls
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicApiCall)