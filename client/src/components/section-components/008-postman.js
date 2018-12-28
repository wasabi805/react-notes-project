import React, {Component} from 'react';
import {connect} from 'react-redux';

import {get_images_008_postman} from '../../actions/images-actions'
import {Section, Article, ArticleContainer, SectionHeaderTextBox,TextBoxPreface, TextBox} from '../styled-components/common/Sections';
import {ImageContainer, RenderImage} from '../styled-components/common/ImageContainers';
import Image from '../../components/common/Image'


class Postman extends Component{
    constructor(props){
        super(props);
        this.state={
            images: {},
        }
    }
    componentWillMount(){
        this.setState({
            images: this.props.set_images.images_008_postman
        })
    }

    render(){

        let {postmanLogo, postMan_download_postman, postMan_select_os, postman_close_out_intro_menu, postman_test_users_route, postman_verify_users_test_route_01, postman_verify_users_test_route_02} = this.state.images

        console.log(this.state.images);

        return(
            <React.Fragment>
                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Postman</h2>
                        </SectionHeaderTextBox>

                            <ArticleContainer>
                                <h2>SubHeader </h2>
                                <ImageContainer>
                                    <img src={postmanLogo.img_properties.src} alt=""/>
                                </ImageContainer>


                                <TextBoxPreface >
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
                            <h2>
                                Install Postman
                            </h2>
                        </SectionHeaderTextBox>
                        <ArticleContainer>
                            <TextBox >
                                <h2>Header 2 </h2>
                                <p>go to https://www.getpostman.com/</p>
                            </TextBox>

                            <TextBox>
                                <h2>Sign Up</h2>
                                <p>Download the App</p>
                                <ImageContainer>
                                    <Image img={postMan_download_postman}/>
                                </ImageContainer>
                            </TextBox>

                            <TextBox>
                                <h2>Select your OS</h2>
                                <p>select the os of your cpu, wait for the compressed dmg/ exe file to download</p>
                                <p>once it downloads, click on the app icon for postman to open it</p>

                                <ImageContainer>
                                    <Image img={postMan_select_os}/>
                                </ImageContainer>
                            </TextBox>
                        </ArticleContainer>

                    </Article>

                </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>
                                Working in Postman
                            </h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <TextBox>
                                <h2>The intro menu</h2>
                                <p>This is the intro menu when you open up postman, close this window, we'll primarilly work with the console behind this menu </p>
                                <ImageContainer>
                                    <Image img={postman_close_out_intro_menu}/>
                                </ImageContainer>
                            </TextBox>

                            <TextBox>
                                <h2>Test the Users route</h2>
                                <p>Enter the backend route we previously created for users, then press get button</p>
                                <TextBox className='mb-5'>
                                    <ul>
                                        <li>1: Make sure that you submit a get request</li>
                                        <li>2: enter the url into the field</li>
                                        <li>3: press send</li>
                                    </ul>
                                </TextBox>

                                <ImageContainer>
                                    <Image img={postman_test_users_route}/>
                                </ImageContainer>
                            </TextBox>



                            <TextBox>
                                <h2>Verify</h2>

                                <p>Upon Success, our msg will appear in the textbox</p>
                                <ImageContainer>
                                    <Image img={postman_verify_users_test_route_01}/>
                                </ImageContainer>


                                <p>Also, let's verify by entering the url into the browser: We should see the test msg we set up earlier. Also, notice that we recieved a 200 status Also, explain what a 400 and 404 500 301 codes mean</p>

                                <ImageContainer>
                                    <Image img={postman_verify_users_test_route_02}/>
                                </ImageContainer>

                                <h1>NOW THAT POSTMAN IS SET UP, we can verify that our server make requests to our node server.
                                    The next section will deal with making request to the backend. END OF THIS SECTION</h1>
                            </TextBox>

                        </ArticleContainer>




                    </Article>

                </Section>

            </React.Fragment>


        )
    }
};

const mapStateToProps =(state)=>({
    set_set_up_redux_snippets : state.code_snippets,
    set_images : state.images
});

const mapDispatchToProps={
    get_images_008_postman
};

export default connect(mapStateToProps, mapDispatchToProps)(Postman)