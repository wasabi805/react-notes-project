import React, {Component} from 'react';
import {connect} from 'react-redux'

import {get_008_c_backend_routes_part_III_token} from '../../actions/code-snippets-actions';
import {get_text_008c_backend_routes_part_III_issue_token} from '../../actions/section-text-actions'
import {get_images_008_c_backend_routes_part_III} from '../../actions/images-actions'

import {Section, Article, ArticleContainer, SectionHeaderTextBox, TextBoxPreface, TextBox, InlineContainerStyled,} from '../styled-components/common/Sections';
import {ImageContainer, } from '../styled-components/common/ImageContainers';
import Image from '../common/Image'
import {Inline_Item_Container_A} from "../common/inline-image-container";

import CodeSnippet from '../common/Snipet';
import CodeBreakDown from '../common/code-breakdown'


class IssueToken extends Component{

    constructor(props){
        super(props);
        this.props.get_008_c_backend_routes_part_III_token();
        this.props.get_text_008c_backend_routes_part_III_issue_token();

        this.state={
            code_snippets: this.props.set_snippets.code[0],
            inline_snippets: this.props.set_snippets.code[1],
            images: this.props.set_images,
            text: this.props.set_text.section_text
        }

    };

    render(){
        let {code_snippets, inline_snippets} = this.state;
        let {hero_img_token, seeUsersJs, verifyTokenPostman} = this.state.images;
        let {text} =this.state;
        let {issue_token} = this.state.text;
        console.log(this.state.images, 'images');


        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h1>Backend Routes Part I</h1>
                            <h2>Configure the User Routes</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>

                            <ImageContainer>
                                <Image img={hero_img_token}/>
                            </ImageContainer>


                            <TextBoxPreface>
                                <h2>Before We Start</h2>
                                <p>
                                    In the last section, we set up our login route to:
                                    <ul>
                                        <li>
                                            a.) check the email from the form submit exists in our data base.
                                        </li>
                                        <li>
                                            b.) if the email does not exist, our server responds with a message notifying the user there's an error.
                                        </li>
                                        <li>c.) if the email does exist, our server responds with a message of sucess.</li>
                                    </ul>
                                    At this point in creating a site, weather or not login is successful or not the only thing we are doing is sending back response messages from our server.
                                </p>

                                <p> In this section, we'll want to send back a token to the user. The token acts as a virtual key containing user data that's unique for every user such as an id number, their name, their email, etc.
                                    Also, we can use the data stored in the token to restrict or permit users access to certain pages on our app.</p>

                            </TextBoxPreface>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>JSON WEBTOKEN</h2>
                        </SectionHeaderTextBox>
                        <ArticleContainer>
                            <TextBox>
                                <h2>Bring in Json Web token</h2>
                                <p>Go to the users.js file and require json web token by storing it as a variable. Here, we'll call the variable "jwt." We'll also include the keys file</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users.js'
                                             codeKey='bring-in-jwt'/>

                                <p>Lets continue below by editing our login route from the previous section..</p>

                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>IMPLEMENT JSON WEBTOKEN</h2>
                        </SectionHeaderTextBox>
                        <ArticleContainer>
                            <TextBox>
                                <h2>Edit the login route</h2>
                                <p>meh</p>

                                <Inline_Item_Container_A image={seeUsersJs}
                                                         inline_snippets={inline_snippets} //if none, send in empty array
                                                         tab_01={'routes/api/users.js'}
                                                         codeKey='set-up-login-route'
                                />

                                <TextBox>
                                    <p>  Edit the file look like this..</p>

                                    <CodeSnippet code_snippets={code_snippets}
                                                 tabName='routes/api/users.js'
                                                 codeKey='add-jwt-token-to-login'/>

                                    <h2>Breaking Down the Code...</h2>
                                    <p>Let's go through this code:</p>
                                    <CodeBreakDown section={issue_token} text={text}/>

                                    <p>A few important things to note about step 3g.)</p>
                                        <ul>
                                            <li>1.) "Bearer " must be capitalized AND it MUST INCLUDE THE WHITESPACE at the end:  It must be in this format so that we can successfully add the response to the header which i'll discuss in the next section.</li>
                                            <li>2.) The <i>key</i> of token was created when we define the object that is inside res.json() </li>
                                            <li>3.) The <i>value</i> of <span className='highlight-text text-yellow'>token</span> inside res.json() has to be the argument passed in from step 3f.) </li>
                                        </ul>
                                </TextBox>
                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2 id='jwt-get-token'>Verify in Postman</h2>
                        </SectionHeaderTextBox>
                        <ArticleContainer>

                                <h2>Send the Post request</h2>

                                    <Image img={verifyTokenPostman}/>



                        </ArticleContainer>
                    </Article>
                </Section>

            </React.Fragment>
        )
    }
}

const mapDispatchToProps={
    get_008_c_backend_routes_part_III_token,
    get_images_008_c_backend_routes_part_III,
    get_text_008c_backend_routes_part_III_issue_token,
};

const mapStateToProps =(state)=>({
    // set_snippets: state.code_snippets,
    set_snippets: state.code_snippets,
    set_images: state.images.images_008_c_set_up_json_web_token,
    set_text : state.text
});

export default connect(mapStateToProps, mapDispatchToProps)(IssueToken)