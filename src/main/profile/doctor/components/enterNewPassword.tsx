import React, { useState } from "react";
import lockIcon from "../../../../assets/images/managePass.png";
import Loader from "../../../generalComponents/Loader";
import { manage_password } from "../../../auth/login/service/service";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";

interface props {
  passwordEnteredEarlier: string;
  forwardFunction: () => void;
}

const EnterNewPassword: React.FC<props> = ({
  forwardFunction,
  passwordEnteredEarlier,
}) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMesage] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state: RootReducer) => state.user);

  const validateInput = async () => {
    setErrorMesage("");

    if (!password) {
      setErrorMesage("Please enter confirm paword.");
      return;
    }

    if (
      !/^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[@£$%^*&?!±|#€∞§¶]).{8,}$/.test(
        passwordEnteredEarlier,
      )
    ) {
      setErrorMesage(
        "Password must be atleast 8 characters, contain uppercase, lowercase, number and symbol.",
      );
      return;
    }

    if (password !== passwordEnteredEarlier) {
      setErrorMesage("Password does not match.");
      return;
    }

    try {
      setLoading(true);

      const result = await manage_password(user.data?.token!!, {
        newPassword: password,
      });

      if (result.status === 200) {
        setLoading(false);
        forwardFunction();
        return;
      }

      setLoading(false);
      setErrorMesage(result.error!!);
    } catch (error: any) {
      setLoading(false);
      setErrorMesage(error.message!!);
    }
    //add logic to validate input here and other API logic here
    //forwardFunction(password) // sends to next page
  };
  return (
    <div className="flex flex-col items-center justify-start w-[100%] h-[100%]">
      <img src={lockIcon} className="h-[50px] w-[50px] mt-[50px]" />
      <div className="h-[330px] flex flex-col justify-start pt-[25px] md:w-[50%] w-[90%] items-center gap-4 bg-white rounded-[10px] mt-[50px]">
        <span className="font-bold">Manage Password</span>
        <div className="flex flex-col md:w-[80%] w-[90%] gap-1">
          <span>Password</span>
          <input
            type="password"
            value={passwordEnteredEarlier}
            className="outline-none bg-gray-300 rounded-[7px] h-[45px] px-2 w-[100%]"
            placeholder="Enter password"
          />
        </div>
        <div className="flex flex-col md:w-[80%] w-[90%]  gap-1">
          <span>Confirm Password</span>
          <input
            type="password"
            className="outline-none bg-gray-300 h-[45px] rounded-[7px] px-2 w-[100%]"
            placeholder="Enter password again"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          onClick={validateInput}
          className="hover:bg-[#272EA7]/70 bg-[#272EA7] md:w-[80%] w-[90%]  h-[40px] rounded-[7px] mt-[20px] flex flex-row justify-center items-center text-white"
        >
          Save Changes
        </button>
      </div>

      {loading && <Loader size="50px" />}

      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default EnterNewPassword;
