import React from 'react'
import FormWrapper from '../forms/formWrapper'
import ForwardButton from './../forms/ForwardButton'
import FormInput from './../forms/formInput'

const Finish =()=> {

    return (
        <div>
                            <FormWrapper 
                            title="Congratulations"
                            msg="A detailed copy of the complete estimate for your proposed project has been forwarded to your email."
                            form={<div>
                                <FormInput type="text" placeholder="Email address"/>
                            </div>}
                            forward={<ForwardButton>
                                go back home
                            </ForwardButton>}
                            />
                        </div>
    );
}

export default Finish;