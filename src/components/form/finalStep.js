import React, { useContext } from 'react'
import FormWrapper from '../forms/formWrapper'
import ForwardButton from './../forms/ForwardButton'
import BackButton from './../forms/BackButton'
import FormInput from './../forms/formInput'
import { MultiStepContext } from '../../context/formContext'

const FinalSteps =()=> {
    const {setStep, currentStep, sumTotal, submitData} = useContext(MultiStepContext)
    return (
        <div>
                            <FormWrapper 
                            title="Final step."
                            steps={`Step ${currentStep} of 5`}
                            progress={<div></div>}
                            form={<div>
                                <FormInput type="text" placeholder="Email address"/>
                                <div><h2>{sumTotal}</h2></div>
                                <div><h2>N4,860,000</h2></div>
                            </div>}
                            back={<BackButton handleClick={()=> setStep(4)}>
                                Back
                            </BackButton>}
                            forward={<ForwardButton handleClick={submitData}>
                                submit
                            </ForwardButton>}
                            />
                        </div>
    );
}

export default FinalSteps;