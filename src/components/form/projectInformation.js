import React, { useContext } from 'react'
import FormWrapper from '../forms/formWrapper'
import ForwardButton from './../forms/ForwardButton'
import BackButton from './../forms/BackButton'
import FormInput from './../forms/formInput'
import FormSelect from './../forms/formSelect'

import { MultiStepContext } from '../../context/formContext'

const ProjectInfo =()=> {
    const {setStep, currentStep, userData, setUserdata, first, setFirst} = useContext(MultiStepContext)

    const handleChange =(e)=> {
        const {name, value} = e.target;
        setUserdata({...userData, [name]: value})
    }
     console.log(userData)
    return (
        <div>
                            <FormWrapper 
                            title="Project Information"
                            msg="Enter the details of the project."
                            steps={`Step  ${currentStep} of 5`}
                            progress={<div></div>}
                            form={<div>
                                <FormInput 
                                type="text" 
                                placeholder="Fullname"
                                value={first}
                                handleChange={handleChange}
                                />
                                <FormInput 
                                type="email" 
                                placeholder="Email"
                                value={userData['email']}
                                handleChange={(e)=> setUserdata({...userData, "email": e.target.value})}
                                />
                                <FormSelect 
                                defaultValue={[
                                        {
                                        value: "story",
                                        name: "Story"
                                        }
                                ]}
                                options={[ 
                                    {
                                    value: "bungalow",
                                    name: "Bungalow",
                                    }
                                    ,
                                    {
                                    value: "container",
                                    name: "Container"
                                    }
                                    , {
                                    value: "flat",
                                    name: "Flat"
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "sitelocation": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "1",
                                    name: "1"
                                    }
                                    ,
                                    {
                                    value: "2",
                                    name: "2"
                                    }
                                    , {
                                    value: "3",
                                    name: "3"
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "numofapartments": e.target.value})}
                                />
                            </div>}
                            back={<BackButton>
                                Back
                            </BackButton>}
                            forward={<ForwardButton handleClick={()=> setStep(2)}>
                                Forward
                            </ForwardButton>}
                            />
                        </div>
    );
}

export default ProjectInfo;