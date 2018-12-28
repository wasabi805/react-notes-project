import React from 'react';

import styled from 'styled-components';
import {ThemeProvider} from 'styled-components'


//  ===  Styled Components  ===
export const ImageContainer = styled.div.attrs({
    className :'image-container'
})`
    position: relative;
    display: ${props => props.theme.display || 'block'};
    padding-top: ${props => props.theme.paddingTop || ''};
    margin: ${props=> props.theme.margin};
    margin-bottom: 3em;
    width: ${props=>props.theme.width};
    background-color: ${props=> props.theme.bgColor};
    text-align: ${props=>props.theme.textAlign};
    
    img{
        width: 100%;
    }
`;

ImageContainer.defaultProps={
    theme:{
        display: '',
        paddingTop: '',
        margin: '',
        width: '',
        bgColor: '',
        textAlign: '',
    }
};


export const ImageStyled = styled.div.attrs({
    className :'image-styled'
})`
    position: ${props => props.theme.position || ''};
    display:  ${props => props.theme.display || ''};
    background-color : ${props => props.theme.bgColor || ''};
    width : ${props => props.theme.width || ''};
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    padding: ${props => props.theme.padding || ''};
    top: ${props => props.theme.top || ''};
    left: ${props => props.theme.left || ''};
    right: 0;
    bottom: ${props => props.theme.bottom || ''};
    padding-left: ${props => props.theme.paddingLeft || ''};
    padding-right: ${props => props.theme.paddingRight || ''};
    margin-top: ${props => props.theme.marginTop || ''};
    
    
    transform: ${props => props.theme.transform || ''};
    transform-origin: ${props => props.theme.transformOrigin || '%'};
    perspective: ${props => props.theme.perspective || '%'};
    perspective-origin: ${props => props.theme.perspectiveOrigin || '%'};
    
    img{
        width: 100%;
    }
`;

ImageStyled.defaultProps = {
    theme:{
        position: '',
        display: '',
        bgColor:'',
        top: '',
        left: '',
        bottom: '',


        paddingLeft :'',
        paddingRight: '',
        marginTop: '',

        transform: '',
        transformOrigin :"",
        perspective : '',
        perspectiveOrigin : ','
    }
};

export const ImageWrapperStyled = styled.div.attrs({
    className : 'image-wrapper-styled'
})`
    background : ${props=>props.theme.background};
    display: ${props=>props.theme.display};
    margin: ${props=>props.theme.margin};
    position: ${props=>props.theme.position};
    width: ${props=>props.theme.width};
    
    i{
        background-color: ${props=>props.theme.bgColor};
    
        position: absolute;
        display: ${props=>props.theme.display};
        width: ${props=>props.theme.width};
        top: ${props=>props.theme.top};
        bottom: ${props=>props.theme.bottom};
        margin-top: ${props=>props.theme.marginTop};
        padding-left:  ${props=>props.theme.paddingLeft};
        padding-right: ${props=>props.theme.paddingRight};
        transform: ${props=>props.theme.transform || ''}  ;
    }
`;
ImageWrapperStyled.defaultProps={
    theme:{
        background: '',
        display: '',
        margin: '',
        position: '',
        width: ''
    }
};

export const Image = styled.div.attrs({
    className :'image'
})`
    position: ${props => props.theme.position || ''};
    width: ${props=> props.theme.width};
    background-color : ${props => props.theme.bgColor || 'lime'};
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`;

Image.defaultProps = {
    theme:{
        position: '',
        width: '',
        bgColor:'',
        src: '',
    }
};

export const ImageLayer01Styled = styled.div.attrs({
    className : 'image-layer-01-styled'
})`
    background-color: ${props=>props.theme.bgColor};
    
    position: absolute;
    display: ${props=>props.theme.display};
    width: ${props=>props.theme.width};
    top: ${props=>props.theme.top};
    bottom: ${props=>props.theme.bottom};
    margin-top: ${props=>props.theme.marginTop};
    padding-left:  ${props=>props.theme.paddingLeft};
    padding-right: ${props=>props.theme.paddingRight};
    transform: ${props=>props.theme.transform || ''}  ;
    
    
`;

ImageLayer01Styled.defaultProps={
    theme: {
        bgColor: '',
        display: '',
        marginTop: "",
        paddingLeft: "",
        paddingRight: "",
        position: "",
        top: "",
        width: "",
        bottom: "",
        transform: '',

    }
};

export const StepLayer01Styled = styled.div.attrs({
    className: 'step-layer-01-styled'
})`
    background-color: ${props=>props.theme.bgColor};
    
    position: absolute;
    display: ${props=>props.theme.display};
    width: ${props=>props.theme.width};
    top: ${props=>props.theme.top};
    bottom: ${props=>props.theme.bottom};
    margin-top: ${props=>props.theme.marginTop};
    padding-left:  ${props=>props.theme.paddingLeft};
    padding-right: ${props=>props.theme.paddingRight};
    margin-left: ${props=>props.theme.marginLeft || ""};
    margin-right: ${props=>props.theme.marginRight || ""};
    z-index: ${props=>props.theme.zIndex}
    
    i{
        width: .7em;
        height: .7em;
    }
`;

StepLayer01Styled.defaultProps={
    theme:{
        display: '',
        width: '',
        top: '',
        bottom: '',
        marginTop: '',
        paddingLeft:  '',
        paddingRight: '',
        marginLeft: '',
        marginRight: '',
        zIndex: '',
    }
};

// export const StepLayer01Styled = styled.div.attrs({
//     className: 'step-layer-01-styled'
// })`
//     background-color: ${props=>props.theme.bgColor};
//
//     position: absolute;
//     display: ${props=>props.theme.display};
//     width: ${props=>props.theme.width};
//     top: ${props=>props.theme.top};
//     bottom: ${props=>props.theme.bottom};
//     margin-top: ${props=>props.theme.marginTop};
//     padding-left:  ${props=>props.theme.paddingLeft};
//     padding-right: ${props=>props.theme.paddingRight};
//     z-index: ${props=>props.theme.zIndex}
// `;
//
// StepLayer01Styled.defaultProps={
//     theme:{
//         display: '',
//         width: '',
//         top: '',
//         bottom: '',
//         marginTop: '',
//         paddingLeft:  '',
//         paddingRight: '',
//         zIndex: '',
//     }
// };







export const RenderImage = (props)=>{
    return(
            <img src={props.src} alt=''/>
    )
};

export const RenderLayeredImage1 = (props)=>{
    console.log(props, 'Going into render other Image');
    return(

        <ThemeProvider theme={props.theme}>
            <ImageStyled >

                <img src={props.src} alt=''/>

            </ImageStyled>
        </ThemeProvider>
    )
};





// /   =====   =====   =====   =====   =====   /



export const MlabSignUpImg = styled.div.attrs({
    className :'mLab-sign-up-img'
})`
    padding: 0 2em;
   
    img{
         width: 100%;
    }
   
   
`;

export const MlabSignUpCircleImg = styled.div.attrs({
    className :'mLab-sign-up-circle-img'
})`
    position: absolute;
    display: inline-block;
    width: 100%;
    padding-left: 73%
    padding-right: 7%;
    
    margin-top: 5%;
    
    @media only screen and (min-width : 300px) and (max-width: 499px) {
             padding-left: 70%
        }
    
    img{
        margin: 0;
        padding: 0;
        width: 100%;
        
        @media only screen and (min-width : 529px) and (max-width: 767px) {
            width: 80%;
        }
        
        @media only screen and (min-width : 500px) and (max-width: 528px) {
            width: 60%;
        }
        
        @media only screen and (min-width : 1px) and (max-width: 499px) {
            margin-top: 1%;
            width: 50%;
            padding-right: 7%;
        }
    
    } 
`;



export const LogoImageContainer = styled(ImageContainer)`
    // background-color: lime;
`;





export const ImageWrapperAbsolute = styled(ImageStyled).attrs({
    className :'image-wrapper-absolute'
})`
  
`;

export const ImageWrapperRelative = styled(ImageStyled).attrs({
    className :'image-wrapper-relative'
})`
   
`;


export const ImageLayer = styled.div.attrs({
    className :'image-layer'
})`
    position: absolute;
    margin: 2em auto;
 
`;






