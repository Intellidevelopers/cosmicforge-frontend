import React from "react";
import { useState } from "react";
import EnterEmail from "../component/EnterEmail";
import EnterOtp from "../component/EnterOtp";
import ChooseResetMethod from "../component/ChooseResetMethod";

const ResetLogins:React.FC = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ step, setStep ] = useState<number>(1);



    return (
        <div>
            { step===1 && <ChooseResetMethod step={step} setStep={setStep}/>}
            { step===2 && <EnterEmail step={step} setStep={setStep} email={email} setEmail={setEmail}/> }
            { step===3 && <EnterOtp email={email} step={step} setStep={setStep}/> }
        </div>
    )
}

export default ResetLogins;