import React, { useState } from 'react'

export const MultiStepContext = React.createContext();

const FormContext =({children})=> {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [date, setDate] = useState(new Date());
    const [first, setFirst] = useState("")

    const submitData=()=> {
        setFinalData(finalData=>[...finalData, userData])
        setUserData("");
        setStep()
    }

    const sumTotal =()=> {

    }

    
    return(
        <div>
            <MultiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData, date, setDate, sumTotal, first, setFirst }}>
                {children}
            </MultiStepContext.Provider>
        </div>
    );
}

export default FormContext;