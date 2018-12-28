import React from 'react';
import {InlineContainerStyled, InlineImage, InlineTextBoxContainerStyled, InlineTextBoxItemStyled, InlineImageContainerStyled } from '../styled-components/common/Sections'
import CodeSnippet from './Snipet'

//ORDER: 1.)TextBox, 2.) IMG, 3.) TextBox, 4.) IMG
export const Inline_Item_Container_A =(props)=>{

    return(
        <React.Fragment>
            <InlineContainerStyled >

                <div className='inline-item-container'>

                    <InlineTextBoxItemStyled>
                        {/*<p>{props.text_01} </p>*/}
                        <p>pull up users.js</p>
                    </InlineTextBoxItemStyled>

                    <InlineImage>
                        <img src={props.image.img_properties.src} alt=''/>
                    </InlineImage>
                </div>

                <div className='inline-item-container'>

                   <InlineTextBoxItemStyled>
                       {/*<p>{props.text_02} </p>*/}
                       <p>The last time we left off, our login route looked like this:</p>
                   </InlineTextBoxItemStyled>


                    {/*/!*Snippet 01*!/*/}
                    {
                        (props.inline_snippets === undefined ? null :
                            <CodeSnippet code_snippets={props.inline_snippets} tabName={props.tab_01} codeKey={props.codeKey }/>)
                    }

               </div>
            </InlineContainerStyled>
        </React.Fragment>
    )
};


