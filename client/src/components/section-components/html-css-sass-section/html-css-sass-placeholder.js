import React, {Component} from 'react';
import {Section, Wrapper,ArticleContainer, TextBox} from '../../styled-components/common/Sections';
import {ImageContainer, ImageStyled} from '../../styled-components/common/ImageContainers'

import {PlaceHolderTerminal, PlaceHolderReact} from '../../code-snipets/01-install-react-code-snippets'

class HTMLCssSassPlaceHolder extends Component{
    componentWillMount(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <Section>
                <Wrapper>
                    <ArticleContainer>
                        <h1>Main Title For section</h1>
                        <h2>SubHeader </h2>

                        <ImageContainer>
                            <ImageStyled> <div className='tf-hook'> <img src="https://image.ibb.co/b3WsAq/Hook.png" alt="Hook" border="0"/></div></ImageStyled>

                            <div className=''><img src="https://image.ibb.co/ccnhAq/Under-construction.png" alt="Under-construction" border="0"/></div>
                        </ImageContainer>



                        <TextBox className='article-preface'>
                            <h2>Before We Start</h2>
                            <p>
                                The standard Lorem Ipsum passage, used since the 1500s
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                always holds in thesects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                            </p>
                        </TextBox>

                        <TextBox className='article-content-box1 '>
                            <h2>Header 2 </h2>
                            <p>some text</p>
                            <PlaceHolderTerminal/>

                        </TextBox>

                        <TextBox className='article-content-box1 '>
                            <h2>Header 3 </h2>
                            <p>Some more text </p>
                            <PlaceHolderReact/>

                        </TextBox>
                    </ArticleContainer>
                </Wrapper>
            </Section>
        )
    }
};

export default HTMLCssSassPlaceHolder