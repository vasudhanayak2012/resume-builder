import React, { useState } from "react";
import Experience from "./builder/Experience";
import Skills from "./builder/Skills";
import Education from "./builder/Education";
import '../stylesheets/Builder.css';
// import StepChart from "./StepChart";

const Builder = () => {
    const [expData, setExpData] = useState({
        fullName: '',
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        isEmployed: false,
        city: '',
        state: '',
        country: '',
        accomplishments: ''
    });

    const [skillList, setSkillList] = useState([])

    const [eduList, setEduList] = useState({
        college: '',
        qualification: '',
        city: '',
        state: '',
        country: '',
        gradDate: '',
        acedamicAchievements: ''
    });

    let steps = ['Experiecne', 'Skills', 'Education'];
    const [currentStep, setCurrentStep] = useState(steps[0]);

    const updateExp = (data) => {
        let updatedData = { ...expData, [data.fieldName]: data.value };
        setExpData(updatedData);
    }

    const updateEduData = (data) => {
        let updatedData = { ...eduList, [data.fieldName]: data.value };
        setEduList(updatedData);
    }

    const updateSkillData = (data) => {
        setSkillList(data);
        console.log(data);
    }

    const stepChange = () => {
        let currentStepIndex = steps.indexOf(currentStep)
        setCurrentStep(steps[currentStepIndex + 1]);
    }

    const stepPrevious = () => {
        let currentStepIndex = steps.indexOf(currentStep)
        setCurrentStep(steps[currentStepIndex - 1]);
    }
    
    const storeData = () => {
        localStorage.setItem('expData', JSON.stringify(expData));
        localStorage.setItem('skillList', JSON.stringify(skillList));
        localStorage.setItem('eduList', JSON.stringify(eduList));
    }

    const getView = () => {
        if (currentStep === 'Experiecne') {
            return <Experience expData={expData} updateExp={updateExp} stepChange={stepChange} />
        } else if (currentStep === 'Skills') {
            return <Skills skillList={skillList} updateSkillData={updateSkillData} stepChange={stepChange} stepPrevious={stepPrevious} />
        } else if (currentStep === 'Education') {
            return <Education eduList={eduList} updateEduData={updateEduData} stepPrevious={stepPrevious} storeData={storeData}/>
        }
    }

    return (
        <div className="builder-container">
            {getView()}


        </div>
    )
}

export default Builder;

