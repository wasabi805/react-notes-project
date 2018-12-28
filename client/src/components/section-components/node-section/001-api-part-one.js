import React from 'react';
import {Section,Article,ArticleContainer, InlineImage, ImageRight, TextBox, InlineTextBox} from '../../styled-components/common/Sections';
import {ImageContainer, LogoImageContainer, } from '../../styled-components/common/ImageContainers';
import {shortHighlight, DateNow, Md5Js, RequireJSMd5,ExportKeys, ImportKeys, InstallAxios,ImportAxios} from '../../code-snipets/01-install-react-code-snippets'

const ApiPartOne = ()=>{

    return(
        <React.Fragment>
            {/*Section1of5*/}
            <Section>
                <Article>
                    <ArticleContainer>
                        <div className='article-header'>
                            <h1 className='moonlight'>Authenticated API Request</h1>
                        </div>
                        <h2>Part I </h2>
                            <LogoImageContainer>
                                <img src="https://image.ibb.co/ggY9BV/nodejs-logo-no-bg.png" alt="nodejs-logo-no-bg" border="0"/>
                                <img src="https://image.ibb.co/b7ErrV/express-no-bg.png" alt="express-no-bg" border="0"/>
                                <img src="https://image.ibb.co/cfWtoA/axios-banner-clear.png" alt="axios-banner-clear" border="0"/>
                            </LogoImageContainer>

                        <TextBox className='article-preface'>
                            <h2>Before We Start</h2>
                            <p>
                                The standard Lorem Ipsum passage, used since the 1500s
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                always holds in thesects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
                            </p>
                        </TextBox>
                    </ArticleContainer>
                </Article>
            </Section>

            {/*Section 2of5*/}
            <Section>
                <Article>
                    <ArticleContainer>
                        <TextBox className='article-content-box1 '>
                            <h2>Prerequisites for the Marvel API </h2>
                        </TextBox>

                        <InlineImage>
                            <img src="https://image.ibb.co/i6T4vq/Marvel-Api-Landing.png" alt="Marvel-Api-Landing" border="0"/>
                        </InlineImage>

                        <TextBox>
                            <p>some text</p>
                        </TextBox>

                        <InlineImage>
                            <img src="https://image.ibb.co/dhwM8A/Marvel-Developer-Account-no-keys.png" alt="Marvel-Developer-Account-no-keys" border="0"/>
                        </InlineImage>
                    </ArticleContainer>
                </Article>

                <Article>
                    <ArticleContainer>
                        <TextBox className='article-content-box1 '>
                            <h2>Required Data for the call </h2>
                            <h3>Let's format the data we need to make the call</h3>
                            <h4 className='mt-4'>Endpoint</h4>
                            <p>Check the site for data required: write more aboutthis section later: </p>
                            <p>or:</p>
                            <p>click the link below:</p>
                            <a href="https://developer.marvel.com/documentation/generalinfo"> Service Endpoint </a>
                        </TextBox>

                        <InlineImage>
                            <img src="https://image.ibb.co/dM2m8A/get-started-highlight.png" alt="get-started-highlight" border="0"/>
                        </InlineImage>
                    </ArticleContainer>
                </Article>

                <Article>
                    <ArticleContainer>
                        <TextBox>
                            <h4 className='mt-4'>Params</h4>
                            <p>We'll need a couple thing formated to send into the URI string:</p>
                        </TextBox>

                        <InlineImage>
                            <img src="https://image.ibb.co/n0angV/Some-odds-and-ends-with-requests-highlight.png" alt="Some-odds-and-ends-with-requests-highlight" border="0"/>
                        </InlineImage>

                        <TextBox>
                            <p>What this is telling is is that we'll need to pass the following three pieces of data for a succesull request:</p>
                            <ul>
                                <li>1.) apikey : public</li>
                                <li>2.) timestamp </li>
                                <li>3.) a hash</li>
                            </ul>
                            <p>The formatting the Time stamp and the hash are the ones we'll focus on </p>
                        </TextBox>
                    </ArticleContainer>
                </Article>
            </Section>

            {/*Section3of5*/}
            <Section>
                <Article>
                    <ArticleContainer>
                        <TextBox >
                            <h2>Formatting our Data : Timestamp, Keys, & md5 Hash </h2>
                            {/*KEYS*/}
                            <h3 className='mt-4'>The Keys</h3>
                        </TextBox>

                        <ImageContainer>
                            <InlineTextBox>
                                <p>Now that we have both our public and private key, lets store them in a on a seperate file.
                                    The reason we want our keys in a seperate file is so that when we commit our project to github,
                                    we can add that file containing the keys to our .gitignore file:
                                    So, go ahead a create config/key.js and include the keys as a variable we can import into our server file:
                                    Your project structure would look something like the image to the right:</p>
                            </InlineTextBox>

                            <ImageRight>
                                <img src="https://image.ibb.co/eDFYV0/config-keys.png" alt="config-keys" border="0"/>
                            </ImageRight>
                        </ImageContainer>

                        <ImageContainer>
                            <InlineTextBox>
                                <p>As for the the keys file, it should look like this</p>
                                <ExportKeys/>
                            </InlineTextBox>
                        </ImageContainer>

                        <ImageContainer>
                            <InlineTextBox>
                                <p>And let's import this into server.js so when can use it later:</p>

                                <ImportKeys/>
                            </InlineTextBox>
                        </ImageContainer>
                    </ArticleContainer>
                </Article>

                <Article>
                    {/*TIMESTAMP*/}
                    <ArticleContainer>
                        <TextBox>
                            <h3 className='mt-4'>The Time stamp</h3>
                            <p>The api requires a timestamp for the URI query as well a timestamp for the hash.
                                see : https://flaviocopes.com/how-to-get-timestamp-javascript/
                                We can achieve the time stamp with {shortHighlight.Date} </p>
                            <p>The code will look something like this:</p>
                        </TextBox>

                        <DateNow/>

                        <TextBox>
                            <p>.getTime() converts the date object into milliseconds since Jan 1st 1970 (see epoch time) and since we'll need to pass a the time stamp as a string to the URI as well as the hash,  we use .toSting() method. The timestamp is stored into a var names ts.</p>
                            <h3>The Keys</h3>
                            <p></p>
                        </TextBox>
                    </ArticleContainer>
                </Article>

                <Article>
                    <ArticleContainer>
                        <TextBox>
                            <h3>The Hash</h3>
                            <p>Let's take a look at the hash Marvel requires for authentication:, </p>
                        </TextBox>

                        <InlineImage>
                            <img src="https://image.ibb.co/fK92Fq/hash-md-5.png" alt="hash-md-5" border="0"/>
                        </InlineImage>

                        <TextBox>
                            <p>In order to convert create our hash, let's install js-md5</p>
                        </TextBox>

                        <Md5Js/>

                        <TextBox>
                            <p>You can take a look at the documentation here: <a href='https://www.npmjs.com/package/js-md5#usage'>js-md5</a></p>
                            <p>Let's bring in js-md5 into our server.js file: </p>
                        </TextBox>
                        <RequireJSMd5/>
                    </ArticleContainer>
                </Article>
            </Section>

            {/*Section 4of5*/}
            <Section>
                <Article>
                    <ArticleContainer>
                        <TextBox>
                            <h2>Install Axios </h2>
                            <h3>On to the code..</h3>
                        </TextBox>
                    </ArticleContainer>

                    <ArticleContainer className='row'>
                        <InlineTextBox className='bg-light'>
                            <p>If you haven't already installed axios, make sure to do that at this point:</p>
                        </InlineTextBox>
                        <InstallAxios className='d-inline-block'/>
                    </ArticleContainer>

                    <ArticleContainer>
                        <InlineTextBox className='bg-light'>
                            <p>Next, bring in axios into server.js:</p>
                        </InlineTextBox>
                        <ImportAxios />
                    </ArticleContainer>
                </Article>
            </Section>

            {/*Section 5of5*/}
            {/*Make the APi Call*/}
            <Section>
                <Article>
                    <ArticleContainer>
                        <TextBox>
                            <h2>Making the API Call</h2>
                            <h3>On to the code..</h3>
                        </TextBox>
                    </ArticleContainer>

                    <ArticleContainer>
                        <p>Before we start, get familiar with the structure of an axios API request. You can see how a basic API call with axios is made here: <a href="https://www.npmjs.com/package/axios#user-content-axios-api">axios API</a>  </p>
                        <p>see: <a href='https://developer.marvel.com/documentation/authorization'>Authorization</a> </p>
                        <p>next, let's create the hash:</p>
                    </ArticleContainer>
                </Article>
            </Section>
        </React.Fragment>
    )
};

export default ApiPartOne
