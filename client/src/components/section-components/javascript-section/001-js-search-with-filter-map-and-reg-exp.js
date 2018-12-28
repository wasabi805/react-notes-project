import React  from 'react';
import {Section, Wrapper,ArticleContainer, TextBox} from '../../styled-components/common/Sections';

import {PlaceHolderTerminal} from '../../code-snipets/01-install-react-code-snippets'

const JsSearchFilterMapRegExp =()=>{
    return(
        <Section>
            <Wrapper>
                <ArticleContainer>
                    <h1>Search with .filter(), .map(), RegExp & More!</h1>
                    <h2>SubHeader </h2>
                    <img src='https://image.ibb.co/nxSAyA/magnifying-glass-no-bg.png' alt='' />

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

                    </TextBox>
                </ArticleContainer>
            </Wrapper>
        </Section>
    )
};

export default JsSearchFilterMapRegExp