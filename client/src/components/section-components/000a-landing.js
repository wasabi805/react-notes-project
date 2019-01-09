import React from 'react';
import {Section, Article,ArticleContainer, TextBox} from '../styled-components/common/Sections';

const Landing = ()=>{
    return(
        <Section>
            <Article>
                <ArticleContainer>
                    <h1>WELCOME<span><h2>to CodingBudy!</h2></span> </h1>
                    < img src='https://i.ibb.co/RBCX5z0/p2-Vri-Y-iron-man-free-download-transparent-zpsd7czzddj.png' alt='' />
                    < img style={{width:"50%"}} src='https://i.ibb.co/n1J9wCQ/under-construction.png' alt='' />

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
                        {/*<PlaceHolderTerminal/>*/}


                    </TextBox>

                    <TextBox className='article-content-box1 '>
                        <h2>Header 3 </h2>
                        <p>Some more text </p>
                        {/*<PlaceHolderReact/>*/}

                    </TextBox>
                </ArticleContainer>
            </Article>
        </Section>
    )
};

export default Landing