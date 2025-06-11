import React, { createRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProgressBar from "../component/progressBar";
import femaleImg from "../../../assets/images/femaleGender.svg";
import maleImg from "../../../assets/images/maleGender.svg";
import ConnectDevice from "../component/connectDevice";
import TakeMeasurement from "../component/takeMeasurement";
import {
  TemperatureNotTaken,
  TemperatureTaken,
} from "../component/temperatureTaken";
import BloodPressureCard from "../component/bloodPressureCard.tsx";
import OxySaturationCard from "../component/oxySaturationCard.tsx";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store/initStore.tsx";
import CustomCalender from "../../generalComponents/CustomCalender.tsx";
import Loader from "../../generalComponents/Loader.tsx";
import { setUpPatientProfile } from "../service.ts";
import { authenticateUser } from "../../store/reducers/userReducers.tsx";

const ProfileSetup = () => {
  const user = useSelector((state: RootReducer) => state.user);

  if (!user.emailValidated && !user.isAunthenticated) {
    return <Navigate to={"/patient/account"} replace />;
  }

  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<string>("forward");
  const [connectionError, setConnectionError] = useState<boolean>(false);
  const [measurementRecorded, setMeasurementRecorded] =
    useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [age, setAge] = useState<number>(0);
  const [toggleCalender, setToggleCalender] = useState<boolean>(true);
  const [dateSelected, setDateSelected] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    bodyTemperature: "",
    bloodPressure: "",
    oxygenSaturation: "",
    genotype: "",
    bloodGroup: "",
    weight: {
      value: 0,
      unit: "Kg",
    },
    height: {
      value: 0,
      unit: "In",
    },
    profileType: "",
  });

  const steps: number = 10;
  const minHeight = "min-h-[50dvh]"; // Define the minHeight variable
  const maxButtonWidth = " w-[90%] max-w-[300px] rounded ";
  const bodyLayout =
    " flex flex-col justify-start items-center width-full gap-2";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNext = async () => {
    if (step < steps) {
      setDirection("forward");
      setStep(step + 1);
      setMeasurementRecorded(false); // Reset measurement recorded state
      setConnecting(false); // Reset connecting state
    } else {
      //HANDLE FORM SUBMISSION HERE
      setErrorMessage("");
      setLoading(true);
      try {
        console.log(formData);

        const response = await setUpPatientProfile(
          {
            bloodPressure: formData.bloodPressure,
            bodyTemperature: formData.bodyTemperature,
            oxygenSaturation: formData.oxygenSaturation,
            weight: formData.weight.value
              .toString()
              .concat(formData.weight.unit),
            height: formData.height.value
              .toString()
              .concat(formData.height.unit),
            profileType: formData.profileType.toString().toLocaleLowerCase() as
              | "personal"
              | "family",
            gender: formData.gender as "male" | "female",
            dateOfBirth: formData.age,
          },
          user.data?.token!!,
        );

        if (response.status === 200) {
          dispatch(
            authenticateUser({
              data: {
                ...user.data,
                profile: response.data?.profile,
              },
            }),
          );
          navigate("/profile/complete", {
            replace: true,
          });
          return;
        }
        setLoading(false);
        setErrorMessage(response.error ?? response.message);
      } catch (error: any) {
        setErrorMessage("An error occured. Try again.");
        setLoading(false);
      }
    }
  };

  //FUNCTION TO HANDLE BACK MOVEMENT. COMMENTED OUT COZ BACK BUTTON IS DISABLED
  // const handleBack = () => {
  //     if (step > 1) {
  //         setDirection('backward');
  //         setStep(step - 1);
  //     }
  // };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (step === 2) {
      // setAge(parseInt(value));
      // setFormData({ ...formData, [name]: getBirthDate(value) });
      return;
    }
    if (step === 6) {
      setFormData({
        ...formData,
        weight: { ...formData.weight, value: parseInt(value) },
      });
      return;
    }
    if (step === 7) {
      setFormData({
        ...formData,
        height: { ...formData.height, value: parseInt(value) },
      });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const setUnit = (quantity: string, unit: string) => {
    if (quantity === "weight") {
      setFormData((prevState) => ({
        ...prevState,
        weight: { ...prevState.weight, unit },
      }));
    }
    if (quantity === "height") {
      setFormData((prevState) => ({
        ...prevState,
        height: { ...prevState.height, unit },
      }));
    }
  };

  const handleGenderSelect = (gender: string) => {
    setFormData({ ...formData, gender });
  };

  const handleDeviceConnect = (type: string) => {
    setConnectionError(false);
    setConnecting(true);
    // Simulate device connection and measurement
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success
      if (success) {
        const measuredValue = Math.random().toFixed(2); // Simulate a measured value
        setFormData({ ...formData, [type]: measuredValue });
        setMeasurementRecorded(true); // Set measurement recorded state
        setConnecting(false); // Reset connecting state
      } else {
        setConnectionError(true);
        setConnecting(false); // Reset connecting state
      }
    }, 2000); // Simulate a delay for the device connection
  };

  const isStepCompleted = () => {
    switch (step) {
      case 1:
        return formData.gender !== "";
      case 2:
        return formData.age !== "";
      case 3:
        return formData.bodyTemperature !== "";
      case 4:
        return formData.bloodPressure !== "";
      case 5:
        return formData.oxygenSaturation !== "";
      case 6:
        return formData.weight.value !== 0;
      case 7:
        return formData.height.value !== 0;
      case 8:
        return formData.genotype !== "";
      case 9:
        return formData.bloodGroup !== "";
      case 10:
        return formData.profileType !== "";
      default:
        return false;
    }
  };

  const ref = createRef<HTMLElement>();

  return (
    <div className="font-poppins container mx-auto p-4 min-h-[100dvh] pt-12 space-y-[5%]">
      <ProgressBar completedSteps={step} totalSteps={steps} />

      <TransitionGroup>
        <CSSTransition
          nodeRef={ref}
          key={step}
          timeout={300}
          classNames={
            "flex justify-center items-center " +
            (direction === "forward" ? "slide-forward" : "slide-backward")
          }
        >
          <div className={`p-4 ${bodyLayout}  ${minHeight}`}>
            {step === 1 && (
              <div
                className={`flex flex-col items-center  ${minHeight} ${bodyLayout}`}
              >
                <h2 className="text-[24px] font-bold sm:font-extrabold mb-6 text-center">
                  How do you identify?
                </h2>
                <div className="flex space-x-4">
                  <div
                    className={`cursor-pointer  p-2 rounded `}
                    onClick={() => handleGenderSelect("male")}
                  >
                    <img
                      src={maleImg}
                      alt="Male"
                      className={` ${formData.gender === "male" ? "border-blue-500" : "border-gray-300"} border-2 rounded-full w-24 h-24`}
                    />
                    <p className="text-center mt-2">Male</p>
                  </div>
                  <div
                    className={`cursor-pointer  p-2 rounded `}
                    onClick={() => handleGenderSelect("female")}
                  >
                    <img
                      src={femaleImg}
                      alt="Female"
                      className={` ${formData.gender === "female" ? "border-blue-500" : "border-gray-300"} rounded-full border-2 w-24 h-24`}
                    />
                    <p className="text-center mt-2">Female</p>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className={`w-full`}>
                <h2 className="text-xl font-bold mt-6 text-center">
                  Step 2: Enter Age
                </h2>
                <div className={bodyLayout}>
                  <p className="font-extrabold text-cosmic-primary-color text-lg">
                    {age} years old.
                  </p>

                  <div className="relative border p-2  mt-[100px] w-[50%] h-[40px] rounded-md  flex ">
                    <p className="absolute top-[-1rem]  text-xs left-0">
                      Date of Birth
                    </p>
                    <p className="w-[90%]">{dateSelected}</p>
                    <i
                      className="fa fa-angle-down absolute right-2 md:w-[50px]"
                      onClick={() => {
                        setToggleCalender(!toggleCalender);
                      }}
                    />
                  </div>

                  <div className="md:w-[800px]  mt-6 z-50">
                    <CustomCalender
                      onDateSelected={(age, date) => {
                        // setAge(age)
                        setDateSelected(date);
                        setAge(age);

                        setFormData({
                          ...formData,
                          age: date.concat(" ").concat(age.toString()),
                        });
                      }}
                      setCalenderState={toggleCalender}
                    />
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="text-xl font-bold mb-4 text-center">
                  Body Temperature
                </h2>
                {measurementRecorded ? (
                  // <div>Measurement success</div>
                  <TemperatureTaken temperature={formData.bodyTemperature} />
                ) : connecting ? (
                  // <TakeMeasurement recorded='Body Temperature'/>
                  <TemperatureNotTaken />
                ) : (
                  <ConnectDevice device={"Thermometer"} />
                )}
              </div>
            )}
            {step === 4 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="text-xl font-bold mb-1 text-center">
                  Blood Pressure
                </h2>
                {formData.bloodPressure && (
                  <p className="font-bold text-cosmic-primary-color text-xl">
                    {formData.bloodPressure} mmHg
                  </p>
                )}
                {measurementRecorded ? (
                  <BloodPressureCard />
                ) : // <p className="text-center text-green-500"></p>
                connecting ? (
                  <TakeMeasurement recorded="Blood pressure" />
                ) : (
                  <ConnectDevice device="Sphygmamometer" />
                )}
              </div>
            )}
            {step === 5 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="text-xl  font-bold mb-1 text-center">
                  O<span className="text-xs relative bottom-[-3px]">2</span>{" "}
                  saturation (SpO
                  <span className="text-xs relative bottom-[-3px]">2</span>)
                </h2>
                {formData.oxygenSaturation && (
                  <p className="font-bold text-cosmic-primary-color text-xl">
                    {formData.oxygenSaturation}%
                  </p>
                )}
                {measurementRecorded ? (
                  <OxySaturationCard />
                ) : connecting ? (
                  <TakeMeasurement recorded="Oxygen Saturation" />
                ) : (
                  <ConnectDevice device="wireless supported Pulse Oximeter" />
                )}
              </div>
            )}
            {/* WEIGHT INPUT */}
            {step === 6 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="text-xl font-bold mb-4 text-center">Weight</h2>
                <p>Enter your weight manually:</p>
                <div
                  className={
                    "h-[40vh] max-h-[250px] w-[90%] max-w-[250px] border-2 border-neutral-300 rounded-[50%] justify-center p-4" +
                    bodyLayout
                  }
                >
                  <h3 className="text-sm sm:text-sm">Enter weight:</h3>
                  <input
                    title="Weight"
                    type="number"
                    name="weight"
                    // value={formData.weight.value}
                    onChange={handleChange}
                    className="p-2 text-cosmic-primary-color text-xl text-center font-bold focus:border-0 border-0 border-b-2 border-black w-[40%]"
                    placeholder="0"
                  />
                  <div className="flex gap-4">
                    <p
                      onClick={() => setUnit("weight", "Kg")}
                      className={`p-2 rounded-[50%]  cursor-pointer ${formData.weight.unit === "Kg" ? "bg-cosmic-primary-color text-white" : ""}`}
                    >
                      Kg
                    </p>
                    <p
                      onClick={() => setUnit("weight", "Lb")}
                      className={`p-2 rounded-[50%]  cursor-pointer ${formData.weight.unit === "Lb" ? "bg-cosmic-primary-color text-white" : ""}`}
                    >
                      Lb
                    </p>
                  </div>
                </div>
              </div>
            )}
            {step === 7 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="text-xl font-bold mb-4 text-center">Height</h2>
                <p>Enter your height manually:</p>
                <div
                  className={
                    "h-[40vh] max-h-[250px] w-[90%] max-w-[250px] border-2 border-neutral-300 rounded-[50%] justify-center p-4" +
                    bodyLayout
                  }
                >
                  <h3 className="text-sm sm:text-sm">Enter height:</h3>
                  <input
                    title="Height"
                    type="number"
                    name="height"
                    // value={formData.height.value}
                    onChange={handleChange}
                    className="p-2 text-cosmic-primary-color text-xl text-center font-bold focus:border-0 border-0 border-b-2 border-black w-[40%]"
                    placeholder="0"
                  />
                  <div className="flex gap-4">
                    <p
                      onClick={() => setUnit("height", "Cm")}
                      className={`p-2 rounded-[50%] cursor-pointer ${formData.height.unit === "Cm" ? "bg-cosmic-primary-color text-white" : ""}`}
                    >
                      Cm
                    </p>
                    <p
                      onClick={() => setUnit("height", "In")}
                      className={`p-2 rounded-[50%]  cursor-pointer ${formData.height.unit === "In" ? "bg-cosmic-primary-color text-white" : ""}`}
                    >
                      In
                    </p>
                  </div>
                </div>
              </div>
            )}
            {step === 8 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="font-bold text-lg sm:text-2xl ">
                  What's your genotype?
                </h2>
                <p className="text-cosmic-primary-color font-bold text-xl">
                  {formData.genotype ? formData.genotype : "Genotype"}
                </p>
                <div className="border-2 border-cosmic-primary-color rounded-[50%] m-4 p-4 flex flex-col justify-center items-center w-[150PX] h-[150PX]">
                  <select
                    title="Genotype"
                    name="genotype"
                    onChange={handleChange}
                    value={formData.genotype}
                    className="w-[100px] border border-cosmic-primary-color p-2 hover:border-cosmic-primary-color focus:border-cosmic-primary-color"
                  >
                    <option selected={formData.genotype === "AA"} value="AA">
                      AA
                    </option>
                    <option selected={formData.genotype === "AS"} value="AS">
                      AS
                    </option>
                    <option selected={formData.genotype === "SS"} value="SS">
                      SS
                    </option>
                  </select>
                </div>
              </div>
            )}
            {step === 9 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="font-bold text-lg sm:text-2xl ">
                  What's your Blood Group?
                </h2>
                <p className="text-cosmic-primary-color font-bold text-xl">
                  {formData.bloodGroup ? formData.bloodGroup : "BloodGroup"}
                </p>
                <div className="border-2 border-cosmic-primary-color rounded-[50%] m-4 p-4 flex flex-col justify-center items-center w-[150PX] h-[150PX]">
                  <select
                    title="Blood group"
                    name="bloodGroup"
                    onChange={handleChange}
                    value={formData.bloodGroup}
                    className="w-[100px] border border-cosmic-primary-color p-2 hover:border-cosmic-primary-color focus:border-cosmic-primary-color"
                  >
                    <option selected={formData.bloodGroup === "O-"} value="O-">
                      O-
                    </option>
                    <option selected={formData.bloodGroup === "O+"} value="O+">
                      O+
                    </option>
                    <option selected={formData.bloodGroup === "A-"} value="A-">
                      A-
                    </option>
                    <option selected={formData.bloodGroup === "A+"} value="A+">
                      A+
                    </option>
                    <option selected={formData.bloodGroup === "B-"} value="B-">
                      B-
                    </option>
                    <option selected={formData.bloodGroup === "B+"} value="B+">
                      B+
                    </option>
                    <option
                      selected={formData.bloodGroup === "AB-"}
                      value="AB-"
                    >
                      AB-
                    </option>
                    <option
                      selected={formData.bloodGroup === "AB+"}
                      value="AB+"
                    >
                      AB+
                    </option>
                  </select>
                </div>
              </div>
            )}
            {step === 10 && (
              <div className={minHeight + bodyLayout}>
                <h2 className="text-xl font-bold mb-4 text-center">
                  Select Profile Type
                </h2>
                <div
                  id="radio-section"
                  className="flex flex-col w-[90vw] justify-center items-center"
                >
                  <div className="flex flex-col rounded-md shadow-slate-300 shadow-md justify-center items-center w-[80vw] md:w-[50%]">
                    <div
                      className="flex border-[0.5px] p-2 border-slate-100 rounded-lg justify-between items-center w-full cursor-pointer"
                      onClick={() =>
                        setFormData({ ...formData, profileType: "Personal" })
                      }
                    >
                      <label htmlFor="option1" className="font-bold">
                        Personal
                      </label>
                      <input
                        type="radio"
                        id="option1"
                        name="profileType"
                        value={"Personal"}
                        onChange={handleChange}
                        checked={formData.profileType === "Personal"}
                        className="border p-2 w-fit"
                        placeholder="Enter your profile type"
                      />
                    </div>
                    <div
                      className="flex border-[0.5px] p-2 border-slate-100 rounded-lg justify-between items-center w-full cursor-pointer"
                      onClick={() =>
                        setFormData({ ...formData, profileType: "Family" })
                      }
                    >
                      <label htmlFor="option2" className="font-bold">
                        Family
                      </label>
                      <input
                        type="radio"
                        id="option2"
                        name="profileType"
                        value={"Family"}
                        onChange={handleChange}
                        checked={formData.profileType === "Family"}
                        className="border p-2 w-fit"
                        placeholder="Enter your profile type"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BUTTON SECTION */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between w-full sm:justify-center mt-8 items-center">
              {/* {step > 1 && ( //BACK BUTTON FOR DEBUGGING PURPOSES. DISABLED UNTIL NEEDED
                                <button
                                    onClick={handleBack}
                                    className={maxButtonWidth + " bg-gray-500 text-white px-4 py-2 w-[60%] md:w-[30%] self-center rounded"}
                                >
                                    Back
                                </button>
                            )} */}
              {!measurementRecorded &&
                !connecting &&
                !connectionError &&
                (step === 3 || step === 4 || step === 5) && (
                  <button
                    onClick={() =>
                      handleDeviceConnect(
                        step === 3
                          ? "bodyTemperature"
                          : step === 4
                            ? "bloodPressure"
                            : "oxygenSaturation",
                      )
                    }
                    className={
                      maxButtonWidth +
                      " bg-cosmic-primary-color text-white px-4 py-2  "
                    }
                  >
                    Connect to Device
                  </button>
                )}
              {connectionError && (step === 3 || step === 4 || step === 5) && (
                <button
                  onClick={() =>
                    handleDeviceConnect(
                      step === 3
                        ? "bodyTemperature"
                        : step === 4
                          ? "bloodPressure"
                          : "oxygenSaturation",
                    )
                  }
                  className={
                    maxButtonWidth +
                    " bg-cosmic-primary-color text-white px-4 py-2  "
                  }
                >
                  Try Again
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!isStepCompleted() && !measurementRecorded}
                className={`  px-4 py-2  ${maxButtonWidth} ${isStepCompleted() || measurementRecorded ? "bg-cosmic-color-lightBlue text-white " : "bg-cosmic-primary-color opacity-50 text-white w-[90%] "}`}
              >
                {step < steps ? "Continue" : "Submit"}
              </button>
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            {loading && (
              <div className="mt-8">
                <Loader size="50px" />
              </div>
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
      <style>{`
                input[type="number"]{
                    -moz-appearance:textfield;
                }
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button{
                    -webkit-appearance:none;
                    margin:0;
                }
                .slide-forward-enter {
                    opacity: 0;
                    transform: translateX(100%);
                }
                .slide-forward-enter-active {
                    opacity: 1;
                    transform: translateX(0);
                    transition: opacity 300ms, transform 300ms;
                }
                .slide-forward-exit {
                    opacity: 1;
                    transform: translateX(0);
                }
                .slide-forward-exit-active {
                    opacity: 0;
                    transform: translateX(-100%);
                    transition: opacity 300ms, transform 300ms;
                }
                .slide-backward-enter {
                    opacity: 0;
                    transform: translateX(-100%);
                }
                .slide-backward-enter-active {
                    opacity: 1;
                    transform: translateX(0);
                    transition: opacity 300ms, transform 300ms;
                }
                .slide-backward-exit {
                    opacity: 1;
                    transform: translateX(0);
                }
                .slide-backward-exit-active {
                    opacity: 0;
                    transform: translateX(100%);
                    transition: opacity 300ms, transform 300ms;
                }
            `}</style>
    </div>
  );
};

export default ProfileSetup;
