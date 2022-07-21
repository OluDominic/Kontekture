import React, { useContext } from 'react'
import FormWrapper from '../forms/formWrapper'
import ForwardButton from './../forms/ForwardButton'
import BackButton from './../forms/BackButton'
import FormInput from './../forms/formInput'
import FormSelect from './../forms/formSelect'
import { MultiStepContext } from '../../context/formContext'

const RoomSelection =()=> {
    const {setStep, currentStep, userData, setUserdata} = useContext(MultiStepContext)
    return (
        <div>
                            <FormWrapper 
                            title="Room selection."
                            msg="This room selection is for one apartment unit. If you have more than one apartment units in the bungalow, make sure your room selection here is still based on just one of the apartment units. The  rooms selected here will be multiplied by the number of apartment units selected earlier."
                            steps={`Step ${currentStep} of 5`}
                            form={<div>
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "one",
                                    name: "1"
                                    }
                                    ,
                                    {
                                    value: "two",
                                    name: "2"
                                    }
                                    , {
                                    value: "three",
                                    name: "3",
                                    }
                                    , 
                                    {
                                    value: "four",
                                    name: "4",
                                    }
                                    , 
                                    {
                                    value: "five",
                                    name: "5",
                                    }
                                    , 
                                    {
                                    value: "six",
                                    name: "6",
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "numoflivrooms": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "one",
                                    name: "1"
                                    }
                                    ,
                                    {
                                    value: "two",
                                    name: "2"
                                    }
                                    , {
                                    value: "three",
                                    name: "3",
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "numofkitchens": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "one",
                                    name: "1"
                                    }
                                    ,
                                    {
                                    value: "two",
                                    name: "2"
                                    }
                                    , {
                                    value: "three",
                                    name: "3",
                                    }
                                    , 
                                    {
                                    value: "four",
                                    name: "4"
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "numoftoiltetandbatroom": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "one",
                                    name: "1"
                                    }
                                    ,
                                    {
                                    value: "two",
                                    name: "2"
                                    }
                                    , {
                                    value: "three",
                                    name: "3",
                                    }
                                    , 
                                    {
                                    value: "four",
                                    name: "4"
                                    }
                                    ,
                                    {
                                    value: "five",
                                    name: "5"
                                    }
                                    , {
                                    value: "six",
                                    name: "6",
                                    }
                                    , 
                                    {
                                    value: "seven",
                                    name: "7"
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "numofbedrooms": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "one",
                                    name: "1"
                                    }
                                    ,
                                    {
                                    value: "two",
                                    name: "2"
                                    }
                                    , {
                                    value: "three",
                                    name: "3",
                                    }
                                    , 
                                    {
                                    value: "four",
                                    name: "4"
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "numofdinning": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "one",
                                    name: "1"
                                    }
                                    ,
                                    {
                                    value: "two",
                                    name: "2"
                                    }
                                    , {
                                    value: "three",
                                    name: "3",
                                    }
                                    , 
                                    {
                                    value: "four",
                                    name: "4"
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "numofotherrooms": e.target.value})}
                                />
                            </div>}
                            back={<BackButton handleClick={()=> setStep(3)}>
                                Back
                            </BackButton>}
                            forward={<ForwardButton handleClick={()=> setStep(5)}>
                                Forward
                            </ForwardButton>}
                            />
                        </div>
    );
}

export default RoomSelection;