import styled from 'styled-components';

export const NavBarContainer = styled.div.attrs({
    className: 'navbar-container',
})`
    position: fixed;
    top: 0;
    height: 60px;
    z-index: 10;
    background-color: grey;
    width: 100%;
    
    background-image: linear-gradient(#646a72, #868d9e);
    border-bottom: 1px solid #5dafaf;
    border-radius: 6px;
  
    -webkit-box-shadow: 1px 10px 100px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 10px 100px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 10px 100px 0px rgba(0,0,0,0.75);
`;

export const NavBarTopRow = styled.div.attrs({
    className: 'navbar-top-row',
})`
    position: relative;
    top: 3%;
    width: 100%;
    height: 3em;
`;

export const NavBarBottomRow = styled.div.attrs({
    className: 'navbar-bottom-row',
})`
    position: relative;
    bottom: 0;
`;

export const HamburgerContainer = styled.div.attrs({
    className: 'hamburger-container',
})`
        position: absolute;
        margin: 0;
        display: inline;
        width: 25px;
        height: 1em;
        -webkit-transform: translateY(50%);
        -ms-transform: translateY(50%);
        transform: translateY(50%);
        top: 0;
        left: 18px;
        z-index: 15;
    
    .fa{
        font-size: 2em;
        color: #f2f2f2;
    }
`;

export const LogoContainer = styled.div.attrs({
    className: 'logo-container',
})`
    position: relative;
    width: 100%;
    height: 50%;
    transform: translateY(50%);
   
    h1{
        
        position: absolute;
        margin: 0;
        font-family: Thunderstorm;
        color: hotpink;
        right: 25px;
        font-size: 1.4em;
        text-shadow: 3px 3px 0px #2da7a7;
    }
        
        
        
    }
    
    @media only screen  and (min-width : 1025px) {
       h1{
            left: 36px;
            font-size: 28px;
       }
    }
    
`;

export const NavBarBottomContainer = styled.div.attrs({
    className: 'navbar-bottom-container',
})`
    position: relative;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin : 0 auto;
    padding: 0 1em;
`;

export const NavBarHeaderLinkContainer = styled.ul.attrs({
    className: 'navbar-header-link-container',
})`
    bottom: -50px;
    color: #f2f2f2;
    width: 100%;
    padding:1em 0;
    text-align: center;
    
    li{
        display: inline;
        margin: 0 1em;
    }
    
    @media only screen  and (min-width : 1025px) {
        text-align: right;
      
        position: absolute;
        top: 0;
        display: inline;
        left: -1em;
        font-size: 1.2em;
        
       
    }
    
    // @media only screen  and (min-width : 1501px) { 
    //     font-size: 1.8em;
    // }
     
    @media only screen  and (min-width : 1501px) { 
        font-size: 1.8em;
    }
    
    @media only screen  and (min-width : 1824px) {
      
        font-size: 2em;
    }

  
  
    
    
`;