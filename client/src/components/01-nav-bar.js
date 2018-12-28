import React from 'react';
import Media from "react-media";

{/*<Media query="(min-width: 1px) and (max-width : 1024px)">*/}
{/*{matches => matches ?  <div><NavBar handleNavModal={this.handleNavModal} ismodalVisible={this.state.ismodalVisible}/></div> :  null}*/}
{/*</Media>*/}


const NavBar =(props)=>{
  return(

          <nav className='nav-bar-wrapper'>
              <Media query="(min-width: 1px) and (max-width : 1024px)">
                    {matches => matches ?  <div className='nav-item'> <i className="fas fa-bars" onClick={props.handleNavModal} ></i></div> :  null}
              </Media>

              <div className='nav-item'>
                  <h1> <span className='vertical-bar'> | </span> CodingBuddy <span className='vertical-bar'> | </span> </h1>
              </div>

              <div className='links-and-fa'>
                  <div className='nav-item' >
                      <ul className='row nav-header-link-wrapper'>
                          <li>Home</li>
                          <li >Bio</li>
                          <li >Contact</li>
                      </ul>
                  </div>

                  <div className='nav-item'>
                      <ul className='fontAwesome-container'>
                          <li className='fontAwesome-icon'>
                              <i class="fab fa-linkedin"></i>
                          </li>
                          <li className='fontAwesome-icon'>
                              <i class="fab fa-google"></i>
                          </li>
                          <li className='fontAwesome-icon'>
                              <i class="fab fa-facebook "></i>
                          </li >
                      </ul>
                  </div>
              </div>
          </nav>
  )
};

export default NavBar