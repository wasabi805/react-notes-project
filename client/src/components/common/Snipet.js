import React from 'react';
import {TabContainer, TabRow, TabItem, Snippet} from '../styled-components/common/Sections'

const CodeSnippet =(props)=>{

    return(

        <TabContainer>
            <TabRow>
                <TabItem>
                    {props.tabName}
                </TabItem>
            </TabRow>

            <Snippet>
                {props.code_snippets.filter((code)=>code.key === props.codeKey)}
            </Snippet>
        </TabContainer>
    )
};

export default CodeSnippet