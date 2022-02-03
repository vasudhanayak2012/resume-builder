import React, { useEffect, useState } from "react";
import '../stylesheets/FinalResume.css';

const FinalResume = () => {

    const [expData, setExpData] = useState();
    const [skillList, setSkillList] = useState();
    const [eduList, setEduList] = useState();


    useEffect(() => {
        setExpData(JSON.parse(localStorage.getItem('expData')));
        setSkillList(JSON.parse(localStorage.getItem('skillList')));
        setEduList(JSON.parse(localStorage.getItem('eduList')));
        console.log(expData, skillList, eduList);
    }, [])

    return (
        <div className="mui-container-fluid final-resume-container">
            <div className="final-resume-box">
                <div className="mui-row">
                        <div className="mui-col-md-4 profile">
                            <img src="https://reqres.in/img/faces/2-image.jpg" alt="profile-picture" className="profile-photo"/>
                    </div>

                    <div className="mui-col-md-8">
                        <h3>Personal Information</h3>
                        <div className="mui-row">

                            <div className="mui-col-md-12">
                                Name :{expData?.fullName}
                            </div>
                        </div>


                        <h3>Professional Information</h3>
                        <div className="mui-row">
                            <div className="mui-col-md-6 mui-col-xs-12 value-field">
                                Company : {expData?.company}
                            </div>
                            <div className="mui-col-md-6 mui-col-xs-12 value-field">
                                Designation : {expData?.role}
                            </div>
                            <div className="mui-col-md-6 mui-col-xs-12 value-field">
                                Start Date : {expData?.startDate}
                            </div>
                            <div className="mui-col-md-6 mui-col-xs-12 value-field">
                                End Date : {expData?.endDate}
                            </div>
                            <div className="mui-col-md-12">
                                Accomplishments : {expData?.accomplishments}
                            </div>
                        </div>

                        <h3>Educational Information</h3>
                        <div className="mui-row">
                            <div className="mui-col-md-12">
                                College Name : {eduList?.college}
                            </div>
                            <div className="mui-col-md-6 mui-col-xs-12 value-field">
                                Qualification :{eduList?.qualification}
                            </div>
                            <div className="mui-col-md-6 mui-col-xs-12 value-field">
                                Graduation Date : {eduList?.gradDate}
                            </div>
                            <div className="mui-col-md-12">
                                Skill Set : {skillList}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default FinalResume;