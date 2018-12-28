import React from 'react';
import {Link} from 'react-router-dom'

const NavigationLinks =(props )=>{

    let closeModal = props.handleNavLinkCloseModal;

    // console.log(props , '????????' );

    return(
       <React.Fragment>
           <li onClick={closeModal}><Link to="/">Home</Link></li>

           {/*javascript notes*/}
           <button onClick={props.handleDropDown} className="dropdown-btn javascriptSection">
               <li id='javascriptSection'>
                   <Link to="/javascript-practice">JavaScript <i className="fa fa-caret-down ml-3"/></Link>
               </li>
           </button>

           <div className="dropdown-container">
               <li onClick={props.handleNavLinkCloseModal}><Link to="/js-search-with-filter-map-and-reg-exp">Search w/ Filter, Map, & RegExp</Link></li>
               <li onClick={closeModal}><Link to="/install-react-router-dom">Install React Router</Link></li>
           </div>

           {/*HTML | CSS | Sass Notes*/}

           <li><Link to="/html-css-sass-tips-and-tricks">HTML | CSS | Sass  <i className="fa fa-caret-down ml-3"/></Link></li>

           {/*FullStack Notes*/}
           <button onClick={props.handleDropDown} className="dropdown-btn fulltstack">
               <li id='fulltstack'>FullStack <i className="fa fa-caret-down ml-3"/>  </li>
           </button>


           <div className="dropdown-container">
               <li onClick={props.handleNavLinkCloseModal}><Link to="/install-react">Install React</Link></li>
               <li onClick={closeModal}><Link to="/install-react-router-dom">Install React Router</Link></li>
               <li><Link to="/set-up-backend-server">Set Up Back End</Link></li>
               <li><Link to="/set-up-mLab-db">mLab DB Setup</Link></li>
               <li><Link to="/connect-db-to-server">Connect Db to Server</Link></li>
               <li><Link to="/routing-files-with-express-router">Express Routing</Link></li>
               <li><Link to="/create-db-model">Create DB Model</Link></li>
               <li><Link to="/postman">Postman</Link></li>
               <li><Link to='/008-a-create-user-reg-routes'>Backend Routes Part I </Link> </li>
               <li><Link to="/set-up-redux">Set Up Redux</Link></li>
               <li><Link to="/redux-react-actions">React/Redux Actions</Link></li>



           </div>

           <Link to="/styled-components"><li>Styled Components</li></Link>
           <Link to="/animation"><li>Animations</li></Link>

           {/*Node Js*/}
           <button onClick={props.handleDropDown} className="dropdown-btn node-js">
               <li id='node-js'>Node JS <i className="fa fa-caret-down ml-3"/>  </li>
           </button>

           <div className="dropdown-container">
               <li><Link to="/api-part-one">Auth API : Part I </Link></li>
           </div>

           {/*Gimp */}

           <button onClick={props.handleDropDown} className="dropdown-btn gimp">
               <li id='gimp'>GIMP <i className="fa fa-caret-down ml-3"/>  </li>
           </button>
           <div className="dropdown-container">
               <li><Link to="/gimp-links">Gimp Links</Link></li>
           </div>




       </React.Fragment>
    )
}
export default NavigationLinks