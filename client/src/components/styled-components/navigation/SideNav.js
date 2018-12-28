import styled from 'styled-components'

export const SideNavUL = styled.ul.attrs({

})`
    z-index: 15;
    padding-top: 1em;
    padding-right: 1em;
    padding-left: 1em;
    position: fixed;
    top: 60px;
    overflow: overlay;
    left: 0;
    background-image: linear-gradient(to right , #1a1b1c, #111);
    
    a, .dropdown-btn{
        padding: 6px 8px 6px 16px;
        margin-right: 2em;
        text-decoration: none;
        font-size: 0.9em;
        color: #fdfdfd;
        display: block;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        outline: none;
    }
    
    
`;
