import React, {Component} from 'react';

import {connect} from 'react-redux'
import {get_images_008_d_backend_routes_part_IV} from '../../actions/images-actions';
import {get_008_d_backend_routes_part_IV_passport} from '../../actions/code-snippets-actions';
import {get_text_008d_backend_routes_part_IV_passport} from '../../actions/section-text-actions'

import {ThemeProvider} from 'styled-components'

import {Section, SectionHeaderTextBox, Article, ArticleContainer, TextBoxPreface,TextBox} from '../styled-components/common/Sections';

import {ImageContainer,} from '../styled-components/common/ImageContainers'
import Image from '../../components/common/Image';
import CodeSnippet from '../common/Snipet';
import CodeBreakDown from '../common/code-breakdown'

import {Inline_Item_Container_A} from "../common/inline-image-container";


class ImplementPassport extends Component{
    constructor(props){
        super(props);
        this.props.get_008_d_backend_routes_part_IV_passport();
        this.props.get_text_008d_backend_routes_part_IV_passport();

        this.state={
            code_snippets: this.props.set_snippets.code[0],
            inline_snippets: this.props.set_snippets.code[1],
            images: this.props.set_images,
            text: this.props.set_text.section_text,

        };
    }

    render(){

        let { passport_config_file, hero_img_passport, postman_verify_auth_obtain_token, postman_verify_auth_add_token_to_header, postman_verify_auth_check_terminal, } = this.state.images;
        let {text, code_snippets, inline_snippets} =this.state;
        let {jwt_strategy, create_protected_route} = this.state.text;

        console.log(code_snippets, 'code_snippets');
        console.log(jwt_strategy, 'WuTAng');
        return(
            <React.Fragment>
                <Section>
                    <SectionHeaderTextBox>
                        <h1>Backend Routes Part IV : Authentication</h1>
                        <h2>Passport</h2>
                    </SectionHeaderTextBox>
                    <Article>
                        <ArticleContainer>
                            <h2>Implementing Passport</h2>

                            <ImageContainer>
                                <Image img={hero_img_passport}/>
                            </ImageContainer>

                            <TextBoxPreface>
                                <h2>
                                    Before We Start
                                </h2>
                                <p>stuff and thing</p>
                            </TextBoxPreface>

                        </ArticleContainer>
                    </Article>
                </Section>
                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>
                                Passport
                            </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2>Set Up Passport</h2>
                            <TextBox>
                                <p>Go to the users.js file and require passport by storing it as a variable. Here, we'll call the variable "passport" .</p>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='server.js'
                                             codeKey='bring-in-passport'/>

                                <p>set up as middleware</p>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='server.js'
                                             codeKey='passport-middleware'/>

                                <p>We're going to need to create a passport configuration file in the next step to keep our server file organized and eaiser to read. While we're here in server.js, let's set up a route that will point to the config file: </p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='server.js'
                                             codeKey='require-passport-config-file'/>
                                <p>Now, that we have a route for our passport config file in our server.js file, let's create it in the next step.</p>

                            </TextBox>


                            <TextBox>


                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>
                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Passport Config File</h2>
                        </SectionHeaderTextBox>
                        <ArticleContainer>
                            <h2>Create the Config File</h2>

                            <TextBox>
                                <Inline_Item_Container_A image={passport_config_file}/>

                                <p>The tex above should be changed to "include the passport config file in the same dir as the keys.js file"</p>

                                <h2>Set up the configurations</h2>
                                <p>After the file is created, add the following inside config/passport.js: </p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='config/passport.js'
                                             codeKey='set-up-passport-config-js'/>

                                <p>What we have so far is:</p>
                                <ul>
                                    <li> - </li>
                                    <li> - </li>
                                    <li></li>
                                </ul>
                                <p>We'll continue adding to config/password.js by adding the options for passport, </p>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='config/passport.js'
                                             codeKey='set-up-passport-config-js-part-II'/>

                                <p>In this step:</p>
                                <ul>
                                    <li>-</li>
                                    <li>-</li>
                                    <li>-</li>
                                </ul>

                                <p>Make sure to check out the documentation for pasport regarding what the strategies are and if there are any others that might work for you.</p>
                                <p><a href='https://github.com/jaredhanson/passport-github#usage'>Passport Documentation</a></p>

                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>
                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>
                                Putting Passport to Use
                            </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2 id='set-up-jwt-strategy'>Set up JwtStrategy Functionality</h2>
                            <TextBox>
                                <p>Let's continue setting up our config/passport.js file by creating the code block for our passport Strategy : </p>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='server.js'
                                             codeKey='set-up-passport-config-js-part-III'/>

                                <h2>Breaking Down the Code...</h2>
                                <p>Let's go through this code:</p>
                                <CodeBreakDown section={jwt_strategy} text={text}/>

                                <h2>About jwt_payload</h2>

                                <small>Implement inline container b with text right and img left : explain where jwt_payload comes from see @ 8:10 : sec 3 lesson 13 passport jwt authentication strategy</small>
                                {/*<Inline_Item_Container_A image={seeUsersJs}*/}
                                                         {/*inline_snippets={inline_snippets} //if none, send in empty array*/}
                                                         {/*tab_01={'routes/api/users.js'}*/}
                                                         {/*codeKey='set-up-login-route'*/}
                                {/*/>*/}


                            </TextBox>

                            <TextBox>


                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>


                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>
                                Using Authentication
                            </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2 id='specify-protected-route-handle'>Specify a Route </h2>
                            <TextBox>
                                <p>The only way we can test if our authentication is on the right track as were setting it up is to specify it on a particular route. Go back to users.js and bring in passport .</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users.js'
                                             codeKey='bring-in-passport-users-js'/>

                                <p>Now that we have passport in the users.js file scroll lets create that private route. I'll place this route after the "/login" route and before the line containing module.exports = router .</p>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users.js'
                                             codeKey='create-restricted-route'/>

                                <p>Lets go over how we constructed this route..</p>

                                <CodeBreakDown section={create_protected_route} text={text}/>

                                <br/>
                                <p>Next,  we'll need to revisit Postman in order to grab the token.</p>

                            </TextBox>

                            <TextBox>


                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>
                                Postman
                            </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2>Grab the Token </h2>
                            <TextBox>
                                <p>Make sure that your server is running in the terminal then open up Postman and do the following:, </p>
                                <p>see the <a href="http://localhost:3000/008-c-something-else#jwt-get-token">Verify in Postman</a></p>

                                <ul className='indent_list'>
                                    <li> a.) set the request dropdown to "POST", and visit the '/login' route we created in the previous section:</li>
                                    <li> b.) enter the URI route inf the form field to the right of the request dropdown  </li>
                                    <li> c.) type in "email" as the first key for the form field in the the request body. </li>
                                    <li> d.) in the form field directly right of the "email" form field,  type an existing user's email address stored in our mLab db as the value for the "email" field in the the request body. </li>
                                    <li> e.) type in "password" as the second key for the form field in the the request body. </li>
                                    <li> f.) in the form field directly right of the "password" form field,  type the password used to register the email address . </li>
                                    <li> g.) click the send button . </li>
                                </ul>

                                <p>Now go ahead and copy the vale for token : make sure not to copy the quotation marks that encloses  Bearer followed by the token hash.</p>

                                <ImageContainer>
                                    <Image img={postman_verify_auth_obtain_token}/>
                                </ImageContainer>


                            </TextBox>

                            <h2>Add Token to Header</h2>
                            <TextBox>
                                <p>Now, copy the Bearer token and add it to the header</p>
                                <ImageContainer>
                                    <Image img={postman_verify_auth_add_token_to_header}/>
                                </ImageContainer>

                                <p>For a succesful request, make sure to do the following: </p>

                                <ul className='indent_list'>
                                    <li> a.) Click "Headers" directly under the URI form submit field then type 'Authorization' as the Key for the form field.</li>
                                    <li> b.) Paste the Bearer token as the Value associated with the 'Authorization' Key in the request form field</li>
                                    <li> c.) set the request dropdown to "GET", and visit the '/current' route we created in this section: see <a href='http://localhost:3000/008-d-implement-passport#specify-protected-route-handle'>Specify a Route</a></li>
                                    <li> d.) Click Send</li>
                                </ul>

                                <p>Keep in mind that at this point, the Postman GUI will not respond and you should see "Loading.."  however we can verify if the request made it to the server by checking that the console.log msg we set up in  you terminal  . See <a href='http://localhost:3000/008-d-implement-passport#set-up-jwt-strategy'>Set Up JwtStrategy Functionality</a></p>
                                <p>Now that we know we are user's data is getting stored in to the jwt_payload variable, let's continue by completing the full request and issuing the token</p>

                                <ImageContainer>
                                    <Image img={postman_verify_auth_check_terminal}/>
                                </ImageContainer>


                            </TextBox>

                        </ArticleContainer>
                    </Article>
                </Section>

                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>
                                Completing the request
                            </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2>Passport Vaidation Logic </h2>
                            <TextBox>
                                <p>Head back over to config/passport.js and instead of console logging the jwt_payload , make the following edits:  </p>


                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='config/passport.js'
                                             codeKey='set-up-passport-config-js-part-IV'/>
                            </TextBox>

                        </ArticleContainer>
                    </Article>
                </Section>



            </React.Fragment>
        )
    }
}
const mapDispatchToProps ={
    get_008_d_backend_routes_part_IV_passport,
    get_images_008_d_backend_routes_part_IV,
    get_text_008d_backend_routes_part_IV_passport
};

const mapStateToProps =(state)=>({

    set_snippets: state.code_snippets,
    set_images: state.images.images_008_d_implement_passport,
    set_text : state.text
});

export default connect(mapStateToProps , mapDispatchToProps)(ImplementPassport)