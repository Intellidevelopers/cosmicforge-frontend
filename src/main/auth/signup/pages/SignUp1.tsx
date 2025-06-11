import React from "react";
import { useState } from "react";
import EnterEmail from "../component/EnterEmail";
import EnterOtp from "../component/EnterOtp";
import { useLocation } from "react-router-dom";

const SignUp1: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [step, setStep] = useState<number>(1);

  const { state } = useLocation();

  const userRole: string | null = state?.userRole ?? "";

  return (
    <div>
      {step === 1 && (
        <EnterEmail
          step={step}
          setStep={setStep}
          email={email}
          setEmail={setEmail}
        />
      )}
      {step === 2 && (
        <EnterOtp
          email={email}
          step={step}
          setStep={setStep}
          userRole={userRole!!}
        />
      )}
    </div>
  );
};

export default SignUp1;
