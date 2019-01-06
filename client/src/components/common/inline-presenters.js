import React from 'react';
import CodeSnippet from '../common/Snipet';
import Image from '../common/Image'


//SNIPPETS WITH TEXT
export const InlinePresenter_Snippet_LEFT = (props)=>{

    return(
        <React.Fragment>
            <div className='inline-container-A'>
                <div className="inline-snippet-left">
                    <CodeSnippet code_snippets={props.code_snippets} tabName={props.tabName} codeKey={props.codeKey}/>
                </div>

                <div className="inline-text-right">
                    <p>{props.inLineText}</p>
                </div>
            </div>
        </React.Fragment>
    )
};
export const InlinePresenter_Snippet_RIGHT = (props)=>{
    return(
        <React.Fragment>
            <div className='inline-container-A'>
                <div className="inline-text-left">
                    <p>{props.inLineText}</p>
                </div>

                <div className="inline-snippet-right">
                    <CodeSnippet code_snippets={props.code_snippets} tabName={props.tabName} codeKey={props.codeKey}/>
                </div>
            </div>
        </React.Fragment>
    )
};

//IMAGES WITH TEXT

export const InlinePresenter_Image_LEFT = (props)=>{
    return(
        <React.Fragment>
            <div className='inline-container-A'>
                <div className="inline-snippet-left">
                    <Image img={props.img}/>
                </div>

                <div className="inline-text-right">
                    <p>{props.inLineText}</p>
                </div>
            </div>
        </React.Fragment>
    )
};

export const InlinePresenter_Image_RIGHT = (props)=>{
    return(
        <React.Fragment>
            <div className='inline-container-A'>

                <div className="inline-text-right">
                    <p>{props.inLineText}</p>
                </div>

                <div className="inline-snippet-left">
                    <Image img={props.img}/>
                </div>
            </div>
        </React.Fragment>
    )
};

