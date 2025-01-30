import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import backIcon from "../../../../assets/icons/Forward.png";
import IconContainer from "../../../generalComponents/IconContainer";
import cosmicLogo from '../../../../assets/icons/cosmic forge logo 1.svg';
import EnterEmail from "../component/EnterEmail";
import EnterOtp from "../component/EnterOtp";

const SignUp1:React.FC = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ otpCode, setOtpCode ] = useState<string>('');
    const [ step, setStep ] = useState<number>(1);



    return (
        <div>
            { step===1 && <EnterEmail step={step} setStep={setStep} email={email} setEmail={setEmail}/> }
            { step===2 && <EnterOtp step={step} setStep={setStep}/> }
        </div>
    )
}

export default SignUp1;