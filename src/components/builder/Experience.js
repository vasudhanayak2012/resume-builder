import React from "react";
import '../../stylesheets/Experience.css';
import '../../stylesheets/Button.css';

const Experience = (props) => {

    const updateField = (e) => {
        props.updateExp({ fieldName: e.target.name, value: e.target.value });
    }

    return (
        <div className="exp-container">

            <div className="mui-row exp-box">
                <div className="mui-col-md-8">
                    <div className="exp-left">
                        <form className="mui-form">
                            <h3>What are your most relevent experiences?</h3>
                            <div className="mui-row">
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" name="fullName" value={props.expData.fullName} onChange={updateField} />
                                    <label>Enter your full name</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" name="company" value={props.expData.company} onChange={updateField} />
                                    <label>Company, organization or volunteer group</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" name="role" onChange={updateField} value={props.expData.role} />
                                    <label>Role or job title</label>
                                </div>
                                <div className="mui-textfield text-field mui-col-md-6 mui-col-xs-12">
                                    <input type="date" name="startDate" onChange={updateField} value={props.expData.startDate} />
                                    <label>Start date</label>
                                </div>
                                <div className="mui-textfield text-field mui-col-md-6 mui-col-xs-12">
                                    <input type="date" name="endDate" onChange={updateField} value={props.expData.endDate} />
                                    <label>End date</label>
                                </div>
                                <div className="mui-checkbox emp-checkbox mui-col-md-12">
                                    <label>
                                        <input type="checkbox" name="isEmployed" onChange={updateField} value={props.expData.isEmployed} />
                                        Currently employed
                                    </label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-4 mui-col-xs-12">
                                    <input type="text" name="city" onChange={updateField} value={props.expData.city} />
                                    <label>City</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-4 mui-col-xs-12">
                                    <input type="text" name="state" onChange={updateField} value={props.expData.state} />
                                    <label>State</label>
                                </div>
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-md-4 mui-col-xs-12">
                                    <input type="text" name="country" onChange={updateField} value={props.expData.country} />
                                    <label>Country</label>
                                </div>
                            </div>
                            <h3>What were your responsibilities and accomplishments?</h3>
                            <div className="mui-textfield mui-textfield--float-label mui-col-md-12 text-field">
                                <textarea defaultValue={props.expData.accomplishments} onChange={updateField} name="accomplishments"></textarea>
                                <label>Start typing</label>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="mui-col-md-4 exp-right-container">
                    <div className="exp-right">
                        <ul className="mui-tabs__bar">
                            <li className="mui--is-active"><a data-mui-toggle="tab" data-mui-controls="pane-default-1">Tab</a></li>
                        </ul>
                        <div className="mui-tabs__pane mui--is-active tab-pane-content" id="pane-default-1">
                            Details can differentiate your resume. More than three out of four employers think that descriptions of experience must always be present on a resume*. Show that you create value with your work by listing your responsibilities and quantifiable achievements in the experience section of your resume to help you catch their eye.
                            *Indeed survey conducted with Lucid, N=2661 employers among 10 industries
                        </div>
                    </div>
                </div>
                <div className="mui-col-md-12 prev-next">
                    {/* <button type="button" className="mui-btn previous-button">Previous</button> */}
                    <button onClick={props.stepChange} type="button" className="mui-btn next-button">Next</button>
                </div>
            </div>


        </div>
    )
}

export default Experience;