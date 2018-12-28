import React, {Component} from 'react';
import {connect} from 'react-redux'


import {get_008_b_backend_routes_part_II_login} from '../../actions/code-snippets-actions';
import {get_text_008b_backend_routes_part_II_login} from '../../actions/section-text-actions'
import {get_images_008_b_backend_routes_part_II} from '../../actions/images-actions'

import {Section, Article, ArticleContainer, SectionHeaderTextBox, TextBoxPreface, TextBox, InlineContainerStyled,} from '../styled-components/common/Sections';
import {ImageContainer, } from '../styled-components/common/ImageContainers';
import Image from '../../components/common/Image'


import CodeSnippet from '../common/Snipet';
import CodeBreakDown from '../common/code-breakdown'


class CreateLogin extends Component{
    constructor(props){
        super(props);
        this.props.get_008_b_backend_routes_part_II_login();
        this.props.get_text_008b_backend_routes_part_II_login();


        this.state={
            code_snippets: this.props.set_snippets.code,
            images:this.props.set_images,
            text: this.props.set_text.section_text
        };
    }
    render(){

        let {code_snippets} = this.state;
        let {text} =this.state;
        let {edit_users_js} = this.state.text;
        let {postman_set_up_test_login_route, postman_success_login_route} = this.state.images;
        console.log(postman_set_up_test_login_route, 'whats in here');
        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h1>Backend Routes Part I</h1>
                            <h2>Configure the User Login Route</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <img src='https://i.ibb.co/ftC8J6M/kisspng-rumble-transformers-the-game-shockwave-soundwave-5b0b07f469faa3-6605663115274495884341.png' alt=''/>

                            <TextBoxPreface>
                                <h2>Before We Start</h2>
                                <h5>Previously...</h5>
                                <p>{text.intro.content.previously} <a href='http://localhost:3000/008-a-create-user-reg-routes#bcrypt'>clickme</a></p>

                                <h5>Creating a Token :JSONwebtoken</h5>
                                <p>
                                    {text.intro.content.create_json_web_token}
                                </p>
                                <h5>Validating the Token: Passport and Passport jwt</h5>
                                <p> {text.intro.content.validate_token_passport_jwt}</p>

                                <h5>Setting up the User Login Route </h5>
                                <p>{text.intro.content.set_up_user_login_route}</p>
                            </TextBoxPreface>
                        </ArticleContainer>
                    </Article>
                </Section>

                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Bring in the Modules</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2>Bring in jwt</h2>

                            <TextBox>
                                <p>{text.bring_in_jwt.content.recall_dep_install} <i>see:</i>
                                    <a href={text.bring_in_jwt.linksTo.install_passport_and_jwt}>Set Up Backend Server</a>
                                </p>

                                <p>{text.bring_in_jwt.content.require_jwt_and_passport}</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users.js'
                                             codeKey='require-jwt'/>
                            </TextBox>

                            <CodeSnippet code_snippets={code_snippets}
                                         tabName='terminal'
                                         codeKey='global-install-react-snippet'/>
                        </ArticleContainer>
                    </Article>
                </Section>

                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Set up the User Login Route</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2>Edits to Users.js</h2>

                            <TextBox>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users.js'
                                             codeKey='set-up-login-route'/>
                            </TextBox>

                            <TextBox>
                                <h2>Breaking Down the Code...</h2>
                                <p>Let's go through this code:</p>

                                <CodeBreakDown section={edit_users_js} text={text}/>

                            </TextBox>

                        </ArticleContainer>
                    </Article>
                </Section>

                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Verify Authentication with Postman</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2>Postman</h2>

                            <TextBox>
                                <h2>Set up Postman</h2>

                                <ImageContainer>
                                    <Image img={postman_set_up_test_login_route}/>
                                </ImageContainer>

                                <ul>
                                    <li>1.)Set the request to POST</li>
                                    <li>2.) enter the route to our login</li>
                                    <li>3.)Select the Body radio button</li>
                                    <li>4.)enter values for email and password with a user we know is in the database</li>
                                    <li>4.)click send</li>
                                </ul>
                                <p>Below, if everything was done correctly, you should see the success message we previously create <a href='#bcrypt-return-success-msg-login'>click here for the step</a></p>

                                <ImageContainer>
                                    <Image img={postman_success_login_route}/>
                                </ImageContainer>
                            </TextBox>

                            <TextBox>


                            </TextBox>

                        </ArticleContainer>
                    </Article>
                </Section>

                {/*=====    =====   =====   =====   =====   =====   =====   =====   =====   ====*/}

            </React.Fragment>
        )
    }
};

const mapDispatchToProps={
    get_008_b_backend_routes_part_II_login,
    get_text_008b_backend_routes_part_II_login,
    get_images_008_b_backend_routes_part_II
};

const mapStateToProps=(state)=>({
    set_snippets : state.code_snippets,
    set_text: state.text,
    set_images : state.images.images_008_b_set_up_user_login,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateLogin)