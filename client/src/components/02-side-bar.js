import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class SideBarNav extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp
        let dropdown = document.getElementsByClassName("dropdown-btn");

        let i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }

    checkRef = (e) =>{
        console.log(e.target.ref);
    };

    render(){
        return(
            <nav className='col-md-2 sidenav '>
                <Link to="/">Home</Link>
                <Link to="/javascript-practice">JavaScript</Link>
                <Link to="/html-css-sass-tips-and-tricks">HTML ,CSS , Sass</Link>
                <button id='dropdown-btn'  onClick={this.checkRef} className="dropdown-btn">Getting Started FullStack
                    <i className="fa fa-caret-down"></i>
                </button>

                <div className="dropdown-container">
                    <Link to="/install-react">Install React</Link>
                    <Link to="/install-react-router-dom">Install React Router</Link>
                    <a href="#">Set Up Back End</a>
                </div>
                <Link to="/styled-components">Styled Components</Link>
                <Link to="/animation">React Transition Group</Link>
            </nav>
        )
    }
};

export default SideBarNav