import React from "react"
import '../stylesheets/StepChart.css';

const StepChart = () => {

    return (
        <div className="progress-bar">
            <div className="progress-step">
                <div className="step-count"></div>
                <div className="step-description">Warenkorb</div>
            </div>
            <div className="progress-step is-active">
                <div className="step-count"></div>
                <div className="step-description">Adresse</div>
            </div>
            <div className="progress-step">
                <div className="step-count"></div>
                <div className="step-description">Zahlung</div>
            </div>
            <div className="progress-step">
                <div className="step-count"></div>
                <div className="step-description">Prüfen</div>
            </div>
            <div className="progress-step">
                <div className="step-count"></div>
                <div className="step-description">Bestätigung</div>
            </div>
        </div>
    )

}
export default StepChart;
