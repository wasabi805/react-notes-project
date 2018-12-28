import styled from 'styled-components'

export const BackArrow = styled.div.attrs({
    className: 'back-arrow'
})`
    position: absolute;
    font-size: 36px;
    top: 0.25em;
    left: 20px;
    color: #88a337;
 
    display: ${props=> props.theme.display || 'none'};
      
`;

// BackArrow.defaultProps ={
//     theme:{
//         display: 'none'
//     }
// };



//aka overlay
export const MobileNavOverlayStyledComp = styled.div.attrs({
    id: 'mobile-nav',
    className: 'mobile-nav-overlay-styled-comp'
})`
    height: ${props => props.theme.height} 
    width: 100%;
    position: fixed;
    overflow-y: hidden;
    z-index: 10;
    top: 50px;
    left: 0;
    background-color: rgb(0,0,0);
    // background-color: rgba(8, 32, 31, 0.69);
    background-color: rgba(28, 44, 44, 0.69);
    overflow-x: hidden;
    transition: 0.3s;
    
    button{   
        
        text-decoration: none;
        font-size: 18px;
        color: white;
        background-color: #272e2e;
        border-radius: 6px;
        display: block;
        line-height: 3.5em;
        width: 100%;
        
        margin-bottom: 0.75em;
       
        transition: 0.3s;
        
        &:hover, focus{
            color: #f1f1f1;
        }
    }
    
    .close-btn{
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
    }
    
    @media screen and (max-height: 450px) {
        .overlay button {font-size: 20px}
        .overlay .close-btn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}
    
`;

//  OVERLAY CONTAINER
export const MobileNavOverlayContainer = styled.div.attrs({
    className: 'mobile-overlay-container'
})`
        margin: 0;
        padding: 0;
        position: relative;
`;



MobileNavOverlayStyledComp.defaultProps={
    theme:{
        height : '0'
    }
};

export const MobileNavOverlayButtonContainer = styled.div.attrs({
    id: 'top-mobile-nav-overlay-button-container',
    className : 'mobile-nav-overlay-button-container'
})`
    background-color: #d2a6caa6;
    height: 27em;
    margin: 0 10px;
    overflow-y: scroll;
    padding: 1em 2em;
    border-radius: 8px;
    border-style: solid;
    border-color: #27a5a6c2;
    
    transform: translateY(-5%);
    
    button{
    
        a{
            color: '#48a0a6';
        }
    
        &:hover{
            color: #00ffffc4;
        }
    }
   
`



//aka overlay-content
export const MobileNavOverlayContent1Styled = styled.div.attrs({
    className: 'mobile-nav-overlay-content'
})`    
    position: absolute;
   
    justify-content: center;
    top: 0;
    width: 100%;
    text-align: center;
    margin-top: 82px;
    padding: 0 1em;
    z-index: 15;
    transition: 0.5s;
    transform: ${props => props.theme.transform};
    
    
`;

MobileNavOverlayContent1Styled.defaultProps={
    theme:{
        transform: ''
    }
};

//TODO : LATER, pass in MobileNavOverlayContent2 instead of div

export const MobileNavOverlayContent2 = styled.div.attrs({
    className: 'mobile-nav-overlay-content-2'
})`   
    position: absolute;
    top: 0;
    width: 100%;
    margin-top: 82px;
    padding: 0 1em;
    justify-content: center;
    z-index: 15;
    
    transition: 0.5s;
    transform: ${props => props.theme.transform}
`;

MobileNavOverlayContent2.defaultProps={
    theme:{
        transform: ''
    }
};


