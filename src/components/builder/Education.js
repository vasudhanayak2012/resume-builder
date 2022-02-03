import React from "react";
import { Link } from "react-router-dom";
import '../../stylesheets/Education.css';

const Education = (props) => {

    const updateEducation = (e) => {
        props.updateEduData({ fieldName: e.target.name, value: e.target.value });

    }

    return (
        <div className="edu-container">

            <div className="mui-row edu-box">
                <div className="mui-col-md-8">
                    <div className="edu-left">
                        <form className="mui-form">
                            <h3>Where did you study?</h3>
                            <div className="mui-row">
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" value={props.eduList.college} onChange={updateEducation} name="college" />
                                    <label>What college did you go to?</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" onChange={updateEducation} name="qualification" value={props.eduList.qualification} />
                                    <label>What did you study?</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-4 mui-col-xs-12">
                                    <input type="text" onChange={updateEducation} name="city" value={props.eduList.city} />
                                    <label>City</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-4 mui-col-xs-12">
                                    <input type="text" onChange={updateEducation} name="state" value={props.eduList.state} />
                                    <label>State</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-4 mui-col-xs-12">
                                    <input type="text" onChange={updateEducation} name="country" value={props.eduList.country} />
                                    <label>Country</label>
                                </div>
                                <div className="mui-textfield text-field mui-col-md-12">
                                    <input type="date" onChange={updateEducation} name="gradDate" value={props.eduList.gradDate} />
                                    <label>Graduation date</label>
                                </div>
                                <h3>What are your acedamic achievements?</h3>
                                <h4>Add your GPA, honors and other accomplishments here</h4>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-12">
                                    <textarea defaultValue={props.eduList.acedamicAchievements}></textarea>
                                    <label>Start typing</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mui-col-md-4 edu-right-container">
                    <div className="edu-right">
                        <ul className="mui-tabs__bar">
                            <li className="mui--is-active"><a data-mui-toggle="tab" data-mui-controls="pane-default-1">Tab</a></li>
                        </ul>
                        <div className="mui-tabs__pane mui--is-active tab-pane-content" id="pane-default-1">
                            It pays to be picky about the academic accomplishments that you list on your resume. Employers want to see a maximum of three education entries in a resume.* If you have more academic achievements, consider listing them under one of your main education entries.
                            Listing your education shows that you meet any necessary prerequisites to employment and allows you to showcase your book smarts if you’re a little short on actual experience.
                        </div>
                    </div>
                </div>
                <div className="mui-col-md-12 prev-next edu-button">
                    <button onClick={props.stepPrevious} type="button" className="mui-btn previous-button">Previous</button>
                    <Link to='/final-resume'>
                        <button onClick={props.storeData} type="button" className="mui-btn next-button">Submit</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Education;