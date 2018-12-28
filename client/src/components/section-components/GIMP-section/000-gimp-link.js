import React from 'react';
import {Section, Wrapper,ArticleContainer, TextBox} from '../../styled-components/common/Sections';
import {ImageContainer, ImageStyled} from '../../styled-components/common/ImageContainers'


import {PlaceHolderReact} from '../../code-snipets/01-install-react-code-snippets'

const GimpLinks = ()=>{
    return(

        <Section>
            <Wrapper>
                <ArticleContainer>
                    <h1>Gimp Links</h1>
                    <h2>Quick Links </h2>
                    <ImageContainer>
                        <ImageStyled>
                            <img src="https://image.ibb.co/jn7maq/GIMP.png" alt="GIMP" border="0"/>
                        </ImageStyled>
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
                        <h2>Remove White BackGround </h2>
                        <p>Source : </p>
                        <li><a href='https://www.youtube.com/watch?v=75o7S1TjgWA'>Remove A white BG</a></li>

                        <li><a href='http://gimpchat.com/viewtopic.php?f=8&t=256'>If there's an issue with exporting:</a></li>
                        <ImageContainer>
                            <ImageStyled>
                                <img src="https://image.ibb.co/b7pDoA/error-transparent-png-fuzzy-tool.png" alt="error-transparent-png-fuzzy-tool" border="0"/>
                            </ImageStyled>
                        </ImageContainer>


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
};

export default GimpLinks