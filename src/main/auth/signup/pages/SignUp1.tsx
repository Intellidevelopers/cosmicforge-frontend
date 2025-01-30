import React from "react";
import { useState } from "react";
import EnterEmail from "../component/EnterEmail";
import EnterOtp from "../component/EnterOtp";

const SignUp1:React.FC = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ step, setStep ] = useState<number>(1);



    return (
        <div>
            { step===1 && <EnterEmail step={step} setStep={setStep} email={email} setEmail={setEmail}/> }
            { step===2 && <EnterOtp step={step} setStep={setStep}/> }
        </div>
    )
}

export default SignUp1;