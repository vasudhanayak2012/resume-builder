import React from "react";
import '../stylesheets/Home.css';
import homeImage from '../images/2022-02-02.png';
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div className="mui-row home-container">
                <div className="mui-col-md-6 home-left">
                    <h1 className="heading">Build a professional resume for free</h1>
                    <h2 className="sub-heading">Create your resume easily with our free builder and professional templates.</h2>
                    <Link to='/resumebuilder'>
                        <button className="mui-btn create-resume-btn">Create my Resume</button>
                    </Link>

                </div>
                <div className="mui-col-md-6 home-right">
                    <img src={homeImage} alt="Home_Image" />
                </div>

            </div>
        </div>

    )
}

export default Home;