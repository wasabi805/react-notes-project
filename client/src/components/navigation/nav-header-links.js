import React from 'react';

const NavHeaderLinks =()=>{
    return(
        <React.Fragment>
            <li>Home</li>
            <li>Bio</li>
            <li>Contact</li>
            <li className='fontAwesome-icon'>
                <i className="fab fa-linkedin"/>
            </li>
            <li className='fontAwesome-icon'>
                <i className="fab fa-google"/>
            </li>
            <li className='fontAwesome-icon'>
                <i className="fab fa-facebook"/>
            </li>
        </React.Fragment>
    )
};

export default NavHeaderLinks
