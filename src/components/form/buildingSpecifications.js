import React, { useContext } from 'react'
import FormWrapper from '../forms/formWrapper'
import ForwardButton from './../forms/ForwardButton'
import BackButton from './../forms/BackButton'
import FormInput from './../forms/formInput'
import FormSelect from './../forms/formSelect'
import TextField from '@mui/material/TextField';
import { MultiStepContext } from '../../context/formContext'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BuildingSpecs =()=> {
    const {setStep, currentStep, userData, setUserdata, date, setDate} = useContext(MultiStepContext)
    return (
        <div>
                            <FormWrapper
                            title="Building Specifications"
                            msg="Enter the building specifications"
                            steps={`Step ${currentStep} of 5`}
                            form={<div>
                                <FormInput
                                 type="text"
                                 placeholder="Type of Building" 
                                 value={userData['typeofbuilding']}
                                 handleChange={(e)=> setUserdata({...userData, "typeofbuilding": e.target.value})}
                                 />
                                 <div>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Basic example"
                                            value={date}
                                            onChange={(newValue) => {
                                                setDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "concrete",
                                    name: "Concrete"
                                    }
                                    ,
                                    {
                                    value: "bricks",
                                    name: "Bricks"
                                    }
                                    , {
                                    value: "glass",
                                    name: "Glass"
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "gradeofmaterials": e.target.value})}
                                />
                                <FormInput 
                                    type="text"
                                    placeholder="What is your budget (Naira)"
                                    value={userData['budget']}
                                    handleChange={(e)=> setUserdata({...userData, "budget": e.target.value})}
                                />
                            </div>}
                            back={<BackButton handleClick={()=> setStep(1)}>
                                Back
                            </BackButton>}
                            forward={<ForwardButton handleClick={()=> setStep(3)}>
                                Forward
                            </ForwardButton>}
                            />
                        </div>
    );
}

export default BuildingSpecs;