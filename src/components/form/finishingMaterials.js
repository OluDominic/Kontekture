import React, { useContext } from 'react'
import FormWrapper from '../forms/formWrapper'
import ForwardButton from './../forms/ForwardButton'
import BackButton from './../forms/BackButton'
import FormInput from './../forms/formInput'
import FormSelect from './../forms/formSelect'
import { MultiStepContext } from '../../context/formContext'

const FinishingMaterial =()=> {
    const {setStep, currentStep, userData, setUserdata} = useContext(MultiStepContext)
    return (
        <div>
                            <FormWrapper 
                            title="Finishing materials"
                            msg="Select your preferred finish for each category."
                            steps={`Step ${currentStep} of 5`}
                            form={<div>
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "polishedConcrete",
                                    name: "Polished Concrete"
                                    }
                                    ,
                                    {
                                    value: "hardwood",
                                    name: "Hardwood"
                                    }
                                    , {
                                    value: "laminate",
                                    name: "Laminate",
                                    }
                                    , 
                                    {
                                    value: "ceramic",
                                    name: "Ceramic",
                                    }
                                    , 
                                    {
                                    value: "carpet",
                                    name: "Carpet",
                                    }
                                    , 
                                    {
                                    value: "stone",
                                    name: "Stone",
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "floorfinish": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "glassdoor",
                                    name: "Glass Door"
                                    }
                                    ,
                                    {
                                    value: "woodendoor",
                                    name: "Wooden Door"
                                    }
                                    , {
                                    value: "steeldoor",
                                    name: "Steel Door",
                                    }
                                    , 
                                    {
                                    value: "pvcdoor",
                                    name: "PVC Door",
                                    }
                                    , 
                                    {
                                    value: "fibreglass",
                                    name: "Fibre Glass",
                                    }
                                    , 
                                    {
                                    value: "aluminiumglazed",
                                    name: "Aluminium Glazed",
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "doors": e.target.value})}
                                />
                                <FormSelect 
                                options={[ 
                                    {
                                    value: "solartiles",
                                    name: "Solar Tiles"
                                    }
                                    ,
                                    {
                                    value: "asphaltshingles",
                                    name: "Asphalt Shingles"
                                    }
                                    , {
                                    value: "metalroofing",
                                    name: "Metal Roofing",
                                    }
                                    , 
                                    {
                                    value: "stonecoated",
                                    name: "Stone-coated Steel",
                                    }
                                    , 
                                    {
                                    value: "slate",
                                    name: "Slate",
                                    }
                                    , 
                                    {
                                    value: "rubberslate",
                                    name: "Rubber Slate",
                                    }
                                    ]}
                                    handleChange={e => setUserdata({...userData, "rooffinish": e.target.value})}
                                />
                            </div>}
                            back={<BackButton handleClick={()=> setStep(2)}>
                                Back
                            </BackButton>}
                            forward={<ForwardButton handleClick={()=> setStep(4)}>
                                Forward
                            </ForwardButton>}
                            />
                        </div>
    );
}

export default FinishingMaterial;