import styled from 'styled-components';

export const Main = styled.div.attrs({
    className : 'Main',
})`
    position: relative;
    width: 100%;
    flex-direction: row;
    
    overflow-x: hidden;
    
`;



export const BodyContainer = styled.div.attrs({
    className : 'body-container',
})`
    filter: ${props=> props.theme.filter};
    transition: all .3s linear;
    // transform: ${props=>props.theme.transform || 'scale(1.03)'} ;
    @media only screen  and (min-width : 1025px){
        transform: scale(1.03);
    }
`;

BodyContainer.defaultProps = {
    theme:{
        filter : ''
    }
};


export const MainContent = styled.div.attrs({
    className : 'main-content'
})`
    position: relative;
    // flex-direction: column;
    
    padding: 0em;
    width: 100%;
    margin-top: 3em;
    margin-left: 0px;
    margin-right: 0px;

    border-style: solid;
    border-width: 4px;
    border-radius: 2px 2px;

    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
    
    
    
    @media only screen  and (min-width : 1025px){ 
        border-style: none;
        margin-left: 1.5em;
        width: 97.9%;
        top: 3em;
    }
`;



export const Section = styled.section.attrs({
    className :'section '
})`
    position: relative;
    z-index: 2;
    border-radius: 2px;
    
    
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
       
      }
      
    h1, h2{
        margin: 0px auto;
        display; block;
        left: 4em;
        line-height: 1.125em;
        font-weight: 300;
    }
    p, li{
        font-size: 12px;
    }
    
    @media only screen and (min-width : 1025px){
       padding-right:13em;
    }
    
`;

Section.defaultProps = {
    theme:{
        paddingTop : ''
    }
};



export const Wrapper = styled.div.attrs({
    className :'wrapper'
    })`
    padding: 10em 2em;
    position: relative;
    
        ul{ padding: 0; }
        li{ list-style: none;}
`;

export const ArticleContainer = styled.div.attrs({
    className : 'article-container'
})`
    padding-bottom: 8px;
    padding-top: 14px;
    border-bottom: 4px solid #3f4e56a3;
    background-color: #c4cbcc87;
    border-radius: 8px;
    margin: 0 2px;
    
    
    
    h2{
        text-indent: 10px;
        font-family : standaris;
        font-size: 1.7em;
        font-weight: bolder;
        letter-spacing: 1px;
        
        color: #10e9df;
        text-shadow: 2px 1px 0px #69694e;
        
        margin-bottom: 10px;
        margin-top: 14px;
        
        
    }
    
    h3{
        font-family: 'Standaris', sans-serif;
        font-size: 1.4em;
        font-weight: bold;
        color: #fff7f7;
        text-shadow: 3px 1px 4px #69694e;
        text-indent: 1em;
    }

    h1{
      
        // font-weight: bold;
        color: #f2f2f2;
        
        text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
        0px 8px 13px rgba(0,0,0,0.1),
        0px 18px 23px rgba(0,0,0,0.1);
    }
     
`;

export const InlineContainerStyled = styled.div.attrs({
    className : 'inline-container-styled'
})`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #00ff001a;
    
    @media only screen  and (min-width : 1025px){ 
        flex-direction: row;
    }
   
   
`;





export const InlineImage = styled.div.attrs({
    className : 'inline-image'
})`
    width: 70%;
    margin: 1em auto;
    
    img{
        width:100%;
    }
    
`;






export const FlexArticleContainer = styled(ArticleContainer).attrs({
    className : 'flex-article-wrapper'
})`
    padding: 2em;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;

    
    h1{
        font-size: 7em;
        // font-weight: bold;
        color: #f2f2f2;
        
        text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
        0px 8px 13px rgba(0,0,0,0.1),
        0px 18px 23px rgba(0,0,0,0.1);
    }
`;



export const Article = styled.article.attrs({
    className : 'article'
})`
   
    position: relative;
    background-color: #c8ccd1d4;
    padding-bottom: 2em;
    margin-bottom: 1em;
     
`;


export const SectionHeaderTextBox = styled.div.attrs({
    className : 'section-header-text-box'
})`
    position: relative; 
    background-color: #33a5a5e6;
    border-radius: 3px 3px 0px 0px;
    padding 10px;
    
    
    
    h1{
        font-size: 1.5em;
        margin-top: 0.25em;
        padding-top: 0.20em;
        padding-left: 0.20em;
    }
    
  
    h2{
        font-size: 1.4em;
        color: #fff4f4;
        
        left: 4em;
    line-height: 1.125em;
    font-weight: 300;
    padding-top: 0.08em;
    padding-bottom: 0.2em;
    padding-left: 0.6em;
        
    }
    
`;

export const TextBox = styled.div.attrs({
    className : 'text-box'
})`
   position: relative;
    margin: 8px;
    padding: 10px;
    background-color: #e1e3e3d4;
    box-shadow: 0 0 5px #635959ab;
    border-radius: 3px 3px 0px 0px;
   
    p{
        padding: 0 1em;
    }
   
    ul{
        font-size: 8px;
    } 
`;

export const InlineTextBoxContainerStyled = styled(TextBox).attrs({
   className: 'inline-textbox-container-styled'
})`
    position: relative;
    display: block;
    width: 100%
    
    
    
`;

export const InlineTextBoxItemStyled = styled.div.attrs({
    className: 'inline-textbox-item-styled',
})`
  
    position: relative;
    display: block;
    width: 100%;
    text-align: justify;
    
    p{
        width: 50%;
        margin: 0 auto;    
    }
   
  
    ul{ 
      position: absolute;
        font-size: 10px;
        background-color: aliceblue;
        transform: translateY(0%);
        height: 100%;
        width: 100%;
        padding: 2em 1em;
    }
    
        
    
    }
`;

export const InlineImageContainerStyled = styled.div.attrs({
    className: 'inline-image-container-styled'
})`
    position: relative;
    display: block;
    
    img{
        width: 100%;
    }
   
    
`;

InlineImageContainerStyled.defaultProps={
    theme:{
        position: '',
        display:'',
        width:'',
    }
};








export const TextBoxPreface = styled.div.attrs({
    className : 'text-box-preface'
})`
    position: relative;
    margin: 1em 0;
    margin-bottom: 4em;
    padding: 2px 8px;
    margin: 0 8px;
    border-radius: 3px;
    border-radius: 5px;
    
   
    // background-color: #e1e3e34a;
    box-shadow: 0 0 5px #635959ab;
    background-color: #17a2b8;
    
    h3{
       
    }
    
    
    ul{
       
        padding-left: 1em;
        color: #e6ebec;
    }
    
    
    p{
        color: #ede3e3;
    }
    
`;

export const Snippet = styled.div.attrs({
    className : 'snippet'
})`
    margin: 0 -1px;
    border-top-left-radius: 6px;
    // border-top-right-radius: 6px;
    margin: 0 -1px;
    
`;


export const InlineTextBox = styled(TextBox).attrs({
    className: 'inline-text-box'
})`
    padding: 2em;
    margin: 0;
    flex-grow: 2;
    width: 100%;
    background-color: #e1e3e3;
    display: block;
  
`;

export const InlineSnippet = styled.div.attrs({
    className: 'inline-snippet'
})`
    flex-grow: 2;
    display: inline-flex;
 
`;




export const TextBoxInfo = styled(TextBox).attrs({
    className : 'text-box-article'
})`
    background-color: teal;   
     
`;


export const ImageRight = styled(InlineImage).attrs({
    className: 'image-article-right'
})`
   
    background-color: blue;
    flex: 0 0 auto;
`;


export const TabContainer = styled.div.attrs({
    className : 'tab-container'

})`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0 8px;
    
    
    
   
`;

export const TabRow = styled.div.attrs({
    className : 'tab-row'

})`
    list-style: none;
    padding: 0;
    line-height: 24px;
    background-color: #e5e5e570;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    
   
`;

export const TabItem = styled.div.attrs({
    className : 'tab-item'
})`
    border: 1px solid #AAA;
    background: #ECECEC;
    display: inline-block;
    
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: linear-gradient(to bottom, #ECECEC 50%, #D1D1D1 100%);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #FFF;
    text-shadow: 0 1px #FFF;
    margin: 0 -1px;
    padding: 0 4px;
    line-height: 12px;
    font-size: 8px;
    
`;
