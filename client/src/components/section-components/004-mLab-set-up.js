import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_images_004_m_lab_setup} from '../../actions/images-actions';
import {ThemeProvider} from 'styled-components'

import {Section, SectionHeaderTextBox, Article, ArticleContainer, TextBoxPreface,TextBox} from '../styled-components/common/Sections';

import {ImageContainer,} from '../styled-components/common/ImageContainers'
import Image from '../../components/common/Image'


class MLabSetUP extends Component{

    constructor(props){
        super(props);
        this.state={
            code_snippets: [],
            images: this.props.set_images,
        }
    }
    componentWillMount(){

    }


    render(){
        let {mLabLogo, mLabSignUp, mLabCreateNewDb, mLabSelectEnv, mLabSelectRegion, mLabSelectDbName, mLabConfirmDb, mLabDbCreateSuccess, mLabCreateUser, mLabSubmitCreateUserInfo, mLabCreateUserSuccess} = this.state.images;


        return(
            <React.Fragment>
            <Section>
                <Article>
                    <ArticleContainer>
                        <h2>Working with MLab</h2>
                        <h3>Create a cloud database </h3>

                        <ImageContainer>
                            <Image img={mLabLogo}/>
                        </ImageContainer>


                        <TextBoxPreface className='article-preface'>
                            <h2>Before We Start</h2>
                            <p>
                                The standard Lorem Ipsum passage, used since the 1500s
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                always holds in thesects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                            </p>
                        </TextBoxPreface>
                    </ArticleContainer>

                    <ArticleContainer>
                        <h2>Creating an Mlab Account</h2>

                        <TextBox>
                            <h2>Sign Up</h2>
                            <p>Sign up by clicking the button</p>
                            <ImageContainer>
                                <Image img={mLabSignUp}/>
                            </ImageContainer>
                        </TextBox>

                        <TextBox>
                            <h2> Blah</h2>
                            <p>more blah</p>
                            <ImageContainer>
                                <Image img={mLabCreateNewDb}/>
                            </ImageContainer>
                        </TextBox>

                        <TextBox>
                            <h2> Select Environment</h2>
                            <p>more and  blah</p>
                            <ImageContainer>
                                <Image img={mLabSelectEnv}/>
                            </ImageContainer>
                        </TextBox>

                        <TextBox>
                            <h2> Select Region</h2>
                            <p>more and  blah</p>
                            <ImageContainer>
                                <Image img={mLabSelectRegion}/>
                            </ImageContainer>
                        </TextBox>

                        <TextBox>
                            <h2> Select A DB NAME</h2>
                            <p>more and  blah</p>
                            <ImageContainer>
                                <Image img={mLabSelectDbName}/>
                            </ImageContainer>
                        </TextBox>

                        <TextBox>
                            <h2> Confirm Order</h2>
                            <p>more and  blah</p>
                            <ImageContainer>
                                <Image img={mLabConfirmDb}/>
                            </ImageContainer>
                        </TextBox>

                        <TextBox>
                            <h2> Db Create Success</h2>
                            <p>more and  blah</p>
                            <ImageContainer>
                                <Image img={mLabDbCreateSuccess}/>
                            </ImageContainer>

                            <p>Finally, click the name of the new db created . The next section, we'll grab the data we need to connect this new db to our node backend</p>
                        </TextBox>
                    </ArticleContainer>
                </Article>
            </Section>

                <Section>
                    <Article>
                        <SectionHeaderTextBox>
                            <h2>Initial Db Setup</h2>
                        </SectionHeaderTextBox>

                        <ArticleContainer>
                            <h2> Create A User</h2>
                            <TextBox>
                                <p>more and  blah</p>
                                <ImageContainer>
                                    <Image img={mLabCreateUser}/>
                                </ImageContainer>
                            </TextBox>

                            <TextBox>
                                <p>Then, fill out the user form to create initial user, the pw for this user is my_password123</p>
                                <ImageContainer>
                                    <Image img={mLabSubmitCreateUserInfo}/>
                                </ImageContainer>
                            </TextBox>

                            <TextBox>
                                <p>Basically done creating the db. take not of the user name and pw, we'll use it for the next section</p>
                                <ImageContainer>
                                    <Image img={mLabCreateUserSuccess}/>
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
    get_images_004_m_lab_setup : get_images_004_m_lab_setup
};



const mapStateToProps=(state)=>({
    set_routing_with_express_router_snippets : state.code_snippets,
    set_images : state.images.images_004_m_lab_setup
});

export default connect(mapStateToProps, mapDispatchToProps )(MLabSetUP)