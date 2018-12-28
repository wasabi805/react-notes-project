import React, {Component} from 'react';
import {connect} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {get_images_008_a_backend_routes_part_I} from '../../actions/images-actions';
import {get_text_008a_backend_routes_part_I} from '../../actions/section-text-actions'
import {get_008_a_backend_routes_part_I} from '../../actions/code-snippets-actions'

import {Section, Article, ArticleContainer, SectionHeaderTextBox, TextBoxPreface, TextBox, InlineContainerStyled,} from '../styled-components/common/Sections';
import {ImageContainer, } from '../styled-components/common/ImageContainers';
import Image from '../../components/common/Image'
import InlineImageTextboxContainer from '../common/inline-textbox-container';
import {Inline_Item_Container_A} from "../common/inline-image-container";

import CodeSnippet from '../common/Snipet';


class CreateUserRegRoutes extends Component{
    constructor(props){
        super(props);
        this.state={
            code_snippets: [],
            images: this.props.set_images,

            all_text: {},

            text:{
                text_01: 'Which looked like this the last time we saw it',
                text_02: 'Edit the file so it looks like this:'
            },

            codeKey: {
                testUsersGetRoute: {
                    id: 'user-js-recap',
                    tab: 'routes/api/users.js'
                },
                createUsersGetRoute:{
                    id: 'create-user-reg-route',
                    tab: 'routes/api/users.js'
                }
            },
        };

        this.props.get_text_008a_backend_routes_part_I();
        this.props.get_008_a_backend_routes_part_I();
    }
    componentWillMount(){
        this.setState({
            code_snippets : this.props.set_snippets.code,
            all_text :  this.props.set_text.section_text,
        })
    }


    render(){
        let {find_user_email, promises} = this.state.all_text
        let {highlight, color, term, bcrypt_gen_salt, err_and_salt, hash, inside_hash, inside_dot_then, lets_recap, postman_initial_set_up} =  this.state.all_text.bcrypt_breakdown

        let {code_snippets} = this.state;
        let {seeUsersJs, set_up_postman, enter_form_data_postman, user_added_postman} =this.state.images;
        let {testUsersGetRoute, createUsersGetRoute} = this.state.codeKey;

        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h1>Backend Routes Part I</h1>
                            <h2>Registration Sign up Form & User Routes</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <img src='https://i.ibb.co/ZVtSNkZ/Hook.png' alt=''/>


                            <TextBoxPreface>
                                <h2>Creating a User Geristraion Form</h2>
                                <p>
                                    In our last episode....From the previosu section, POSTMAN, we set up postman so we can verify if our request to the back end are actually making it there.
                                    Now lets set up the node backend routes.


                                </p>
                            </TextBoxPreface>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Bring In BodyParser & Bcrypt</h2>
                        </SectionHeaderTextBox>
                        <TextBox>
                            <p>Before we make any adjustments to our files, we'll need to bring in body parser and bcrypt. Remember, we already
                                installed them in the the prior section (make a link to the section).
                            </p>
                            <p>Go to server.js and bring it in:</p>

                            <CodeSnippet code_snippets={code_snippets}
                                         tabName='server.js'
                                         codeKey='require-body-parser'/>

                        </TextBox>

                        <ArticleContainer>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Configure Users Routes</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2>More Edits to users.js</h2>
                            <TextBox>
                                <p>Lets start  by revisiting our users.js file:</p>
                                <ArticleContainer>

                                    {/*USE  Inline_Image_Container_A for any other one you decide to format this way*/}
                                    <Inline_Item_Container_A
                                        image={seeUsersJs}

                                        text_01={this.state.text.text_01}
                                        text_02={this.state.text.text_02}

                                        id_01={testUsersGetRoute.id}
                                        tab_01={testUsersGetRoute.tab}

                                        id_02={createUsersGetRoute.id}
                                        tab_02={createUsersGetRoute.tab}

                                        code_snippets={this.state.code_snippets} alt='' />

                                    <TextBox>
                                        <p>Make the following changes:</p>
                                    </TextBox>

                                </ArticleContainer>
                            </TextBox>
                        </ArticleContainer>

                        <ArticleContainer>
                            <h2>Find User Submitted Email</h2>
                            <TextBox>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/usres.js'
                                             codeKey='create-user-reg-route-part-01'/>
                                <ul>
                                    {find_user_email.map((item, index)=>{
                                        return <li key={'find-user-email-list-item'+index}>
                                            {item.list_item}
                                        </li>
                                    })}
                                </ul>
                            </TextBox>
                        </ArticleContainer>

                        <ArticleContainer>
                            <h2>Promises</h2>
                            <TextBox>
                                <p>After the .findOne() method completes, we've got two options: </p>
                                    <ul>
                                        <li>{promises.after_promise_a}</li>
                                        <li>{promises.after_promise_b}</li>
                                    </ul>
                                <p>In order to perform either a or b, we'll need to add a promise and use .then() and .catch() to handle either case.</p>
                                <p>Bellow we'll use <span className='text-red'>.then()</span>  and pass in a callback to perform a check in the database to see if the email provide by the user from the form submit:</p>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/usres.js'
                                             codeKey='create-user-reg-route-part-02'/>
                                    <p></p>
                               <ul>
                                   <li>1.) When User.findOne() executes, the return value gets passed into the "user" arg we define in the callback</li>
                                   <li>2.) If the user's email DOES exist, meaning that the user will not be able to register the email they input into the form, the server will respond with an object where the value for the email key will inform the user that the 'email already exists </li>
                               </ul>
                                <p>Next, we'll set up the server responce for an email the user CAN register with:</p>

                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users.js'
                                             codeKey='create-user-reg-route-part-03'/>

                                <p>In the code above,  if the email from the form submit is not in the database, we'll continue with an else statement by defining a new object called "newUser" where the post request data from the form  will get stored</p>

                                <p>We'll absolutely want to encrypt the password since it's getting sent through URL to our database. We'll continue below to go over password encryption. </p>

                            </TextBox>
                            <span id='bcrypt'/>
                            <h2>BCRYPT</h2>

                            <TextBox>
                                <p>We'll use bcrypt to hash the password before we insert the password into the newUser object.</p>
                                <CodeSnippet code_snippets={code_snippets}
                                             tabName='routes/api/users.js'
                                             codeKey='create-user-reg-route-part-04'/>

                                <TextBox>
                                    <h2>Breaking down the code...</h2>
                                    <p>So let's examine what's happening here.</p>
                                    <h2>Set up the hashing function</h2>

                                    <ul>a.) <span className={highlight+color.white}>{term.bcrypt}<span className={highlight+color.purple}><b>{term.genSalt}</b></span></span>  :  {bcrypt_gen_salt.start_text}</ul>
                                    <ul className='indent_list'>
                                        <li>{bcrypt_gen_salt.list_item_01}</li>
                                        <li>{bcrypt_gen_salt.list_item_02}</li>
                                    </ul>
                                    <ul>b.) <span className={highlight+color.white}><i>{term.err}</i></span> and <span className={highlight+color.yellow}><b><i>{term.salt}</i></b></span>  : {err_and_salt}  </ul>
                                    <ul>c.) <span className={highlight+color.cyan}><b>{term.hash}</b></span>  :  {hash.start_text} </ul>
                                    <ul className='indent_list'>
                                        <li>1.) <span className={highlight+color.orange}><b>{term.newUser}</b><span className={highlight+color.white}>{term.password}</span></span>{hash.list_items_01}</li>
                                        <li>2.) <span className={highlight+color.yellow}><b><i>{term.salt}</i></b></span>{hash.list_items_02}</li>
                                        <li>3.) <span className={highlight+color.white}>  {hash.render_cb}</span> : {hash.list_items_03}</li>
                                        <li>4.) <span className={highlight+color.white}><i>{term.err}</i></span> and <span className={highlight+color.pink}><b><i>{term.hash}</i></b></span> {hash.list_items_04}</li>
                                    </ul>
                                    <br/>

                                    <h2>Inside the hash( ) method</h2>
                                    <p>{inside_hash.start_text}</p>
                                    <ul>d.) <span className={highlight+color.white}>{term.if_} (<i>{term.err}</i>) {term.throw_error} </span> :  {inside_hash.list_items_01} </ul>
                                    <ul>e) <span className={highlight+color.orange}><b>{term.newUser}</b><span className={highlight+color.white}>{term.password_equals} </span><span className='text-pink'><b><i>{term.hash}</i></b></span></span>    :   {inside_hash.list_items_02}</ul>
                                    <ul>f.) <span className={highlight+color.orange}><b>{term.newUser}</b><span className='text-lime'><b>{term.save}</b></span></span>    :  {inside_hash.list_items_03}</ul>
                                    <br/>

                                    <h2>Processing the newUser obj</h2>
                                    <p>{inside_dot_then.start_text}</p>
                                    <ul>g.) <span className={highlight+color.red}><b>{term.then}</b></span>  :  {inside_dot_then.list_items_01}
                                        <li className="indent_list">1.) <span className={highlight+color.white}>  {inside_dot_then.render_cb}</span> : {inside_dot_then.list_items_02_a}  <span className={highlight+color.white}><i>{term.user}</i></span> {inside_dot_then.list_items_02_b}  <span className={highlight+color.white}> {inside_dot_then.res_dot_json}</span> .</li>
                                        <li>h.)<span className={highlight+color.white}>{term.catch}</span> : {inside_dot_then.list_items_03} </li>
                                    </ul>

                                    <p>At this point we can verify our registration form with Postman</p>
                                </TextBox>
                            </TextBox>
                        </ArticleContainer>
                    </Article>
                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Verify With Postman</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <TextBoxPreface>
                                <h2>Let's recap</h2>
                                <p>Before we test with Postman, let's go over the order of events:</p>
                                <p>When the user fills out the form, a post request is sent to /register</p>
                                <ul>
                                    {lets_recap.map((item, index)=>{
                                        return <li key={'lets-recap-list-item-'+index}>{item.list_item}</li>
                                    })}
                                </ul>
                            </TextBoxPreface>

                            <h2>Verify the server is running</h2>
                            <TextBox>
                                <p>Before we do anything, make sure that your server on port 5000 is up and running</p>
                            </TextBox>

                            <h2>Open Postman</h2>

                            <TextBox>
                                <h2>Initial set up</h2>
                                <ImageContainer>
                                    <Image img={set_up_postman}/>
                                </ImageContainer>

                                <TextBox>
                                    <ul>{postman_initial_set_up.map((item, index)=>{
                                            return <li key={'postman-initial-set-up-'+index}>{item.list_item}</li>})}
                                    </ul>
                                </TextBox>

                                <h2>Make the Request</h2>

                                <ImageContainer>
                                    <Image img={enter_form_data_postman}/>
                                </ImageContainer>

                                <p>After you click submit, if everything was done correctly, you should see this:</p>

                                <ImageContainer>
                                    <Image img={user_added_postman}/>
                                </ImageContainer>


                            </TextBox>




                        </ArticleContainer>
                    </Article>
                </Section>

            </React.Fragment>
        )
    }
};

const mapDispatchToProps={
    get_008_a_backend_routes_part_I,
    get_images_008_a_backend_routes_part_I,
    get_text_008a_backend_routes_part_I
};

const mapStateToProps =(state)=>({
    set_snippets : state.code_snippets,
    set_text: state.text,
    set_images : state.images.images_008_a_create_users_reg_route
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserRegRoutes)