import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/Navbar.css'
import logo from '../images/org_logo.png';

const Navbar = () => {

    const pageRefresh = () => {
        window.location.href = '/';
    }

    return (
        <div className="header-container">
            <div className="header mui-appbar">
                <div className="builderName">
                    <img onClick={pageRefresh} src={logo} alt="logo" style={{ maxHeight: 50 }} />
                </div>

                <div className="menu">
                    <div className="option mui-dropdown">
                        <div className="option-name" data-mui-toggle="dropdown">
                            Resume
                            <span className="mui-caret"></span>
                        </div>
                        <ul className="mui-dropdown__menu dropdown-options">
                            <li><Link to='/resumebuilder'>Resume Builder</Link></li>
                            <li><a href="/#">Resume Samples</a></li>
                            <li><a href="/#">How to Write a Resume</a></li>
                        </ul>
                    </div>

                    <div className="option mui-dropdown">
                        <div className="option-name" data-mui-toggle="dropdown">
                            Contact
                            <span className="mui-caret"></span>
                        </div>
                        <ul className="mui-dropdown__menu dropdown-options">
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="/top-rated-resume">Top Rated Resume</Link></li>
                        </ul>
                    </div>

                    <div className="option mui-dropdown">
                        <div className="option-name" data-mui-toggle="dropdown">
                            Jobs
                            <span className="mui-caret"></span>
                        </div>
                        <ul className="mui-dropdown__menu dropdown-options">
                            <li><a href="https://www.linkedin.com/jobs/">Job Search</a></li>
                            <li><a href="https://www.linkedin.com/">Browse Jobs</a></li>
                        </ul>
                    </div>
                </div>


                <div className="login">
                    <button className="mui-btn login-button">Sign In</button>
                </div>
            </div>

        </div>

    )
}

export default Navbar;