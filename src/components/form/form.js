import React, { useContext } from 'react'
import { ProjectInfo, BuildSpecs, FinishingMaterials, RoomSelection, FinalSteps, Finish} from './index'
import { Stepper, StepLabel, Step } from '@material-ui/core'
import { MultiStepContext } from '../../context/formContext'
const Form=()=> {

    const { currentStep, finalData } = useContext(MultiStepContext)

    const showStep =(step)=> {
        console.log(step)
        switch (step) {
            case 1:
                return <ProjectInfo />
            case 2:
                return <BuildSpecs />
            case 3:
                return <FinishingMaterials />
            case 4:
                return <RoomSelection />
            case 5:
                return <FinalSteps />
            case 6:
                return <Finish />
        
            default: return;
        }
    }
    return(
        <div className="Form">
            <div style={{display: "flex", justifyContent: "center", alignContent: "center", margin: "0"}}>
                <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>
            </div>
            {showStep(currentStep)}
            {/* <Finish /> */}
        </div>
    );
}

export default Form