import React, { useState } from "react";
import '../../stylesheets/Skills.css';
import '../../stylesheets/Button.css';

const Skills = (props) => {
    const [skillData, setSkillData] = useState(props.skillList);


    const dataStore = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!e.target.value) {
                return;
            }
            let val = e.target.value;
            let dataVal = [...skillData, val];
            setSkillData(dataVal);
            props.updateSkillData(dataVal);
            e.target.value = '';
        }
    }

    const deleteSkill = (index) => {
        let data = [...skillData];
        console.log(data);
        data.splice(index, 1);
        setSkillData(data);
        props.updateSkillData(data);
    }

    return (
        <div className="skills-container">

            <div className="mui-row skills-box">
                <div className="mui-col-md-8">
                    <div className="skills-left">
                        <form className="mui-form">
                            <h3>What are your stand-out skills?</h3>
                            <h4>Share the skills that make you shine</h4>
                            <div className="mui-row">
                                <div className="mui-textfield mui-textfield--float-label text-field mui-col-xs-12">
                                    <input type="text" onKeyPress={dataStore} name="skillSet"/>
                                    <label>What are your stand-out skills?</label>
                                </div>
                            </div>
                            <div>
                                {skillData.map((record, index) => <span className="skill-name-container">
                                    <span className="skill-name">{record}</span>
                                    <span onClick={(e) => deleteSkill(index)}>&#10005;</span>
                                </span>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mui-col-md-4 skills-right-container">
                    <div className="skills-right">
                        <ul className="mui-tabs__bar">
                            <li className="mui--is-active"><a data-mui-toggle="tab" data-mui-controls="pane-default-1">Tab</a></li>
                        </ul>
                        <div className="mui-tabs__pane mui--is-active tab-pane-content" id="pane-default-1">
                            You've got the skills and this is the place to show them off. This two or three column section uses bullet points to highlight the qualities that set you apart. List your special, work-related, talents in short, 2-3 word phrases and leave the punctuation at the door.
                        </div>
                    </div>
                </div>
                <div className="mui-col-md-12 prev-next skill-button">
                    <button onClick={props.stepPrevious} type="button" className="mui-btn previous-button">Previous</button>
                    <button onClick={props.stepChange} type="button" className="mui-btn next-button">Next</button>
                </div>
            </div>


        </div>
    )

}

export default Skills;