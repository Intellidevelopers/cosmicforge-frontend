import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProgressBar from '../component/progressBar';
import femaleImg from '../../../assets/images/femaleGender.svg';
import maleImg from '../../../assets/images/maleGender.svg';
import { getBirthDate } from '../utils/datePicker.utils';
import ConnectDevice from '../component/connectDevice';
import TakeMeasurement from '../component/takeMeasurement';
// import { TemperatureTaken,TemperatureNotTaken } from '../component/temperatureTaken';



const ProfileSetup = () => {
    const [step, setStep] = useState<number>(1);
    const [direction, setDirection] = useState<string>('forward');
    const [connectionError, setConnectionError] = useState<boolean>(false);
    const [measurementRecorded, setMeasurementRecorded] = useState<boolean>(false);
    const [connecting, setConnecting] = useState<boolean>(false);
    const [age,setAge] = useState<number>(0)
    
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        bodyTemperature: '',
        bloodPressure: '',
        oxygenSaturation: '',
        weight: {
            value:0,
            unit:''
        },
        profileType: '',
    });

    const steps: number = 8;
    const minHeight = "min-h-[50dvh]"; // Define the minHeight variable
    const maxButtonWidth = ' w-[90%] max-w-[350px]';
    const bodyLayout = ' flex flex-col justify-start items-center width-full gap-2'

    const handleNext = () => {
        if (step < steps) {
            setDirection('forward');
            setStep(step + 1);
            setMeasurementRecorded(false); // Reset measurement recorded state
            setConnecting(false); // Reset connecting state
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setDirection('backward');
            setStep(step - 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(step ===2 ){
            setAge(9)
            setFormData({ ...formData, [e.target.name]: getBirthDate(e.target.value) });
            console.log(formData)
            return    
        }
        if (step === 6) {
            setFormData({ ...formData, [e.target.name]: {[formData.weight.value]: e.target.value} });
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const setUnit = (quantity:string,weightUnit:string)=>{
        if (quantity==='weight') {
            setFormData((prevState)=>{
                const newState = prevState
                newState[weight]=weightUnit
                console.log(newState)
                return newState
                }
            );
        }
        // if (quantity==='height') {
            
        // }
    }

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
                return formData.gender !== '';
            case 2:
                return formData.age !== '';
            case 3:
                return formData.bodyTemperature !== '';
            case 4:
                return formData.bloodPressure !== '';
            case 5:
                return formData.oxygenSaturation !== '';
            case 6:
                return formData.weight.value !== 0;
            case 7:
                return formData.profileType !== '';
            default:
                return false;
        }
    };

    return (
        <div className="container mx-auto p-4 min-h-[100dvh] space-y-[5%]">
            <ProgressBar completedSteps={step} totalSteps={steps} />
            <TransitionGroup>
                <CSSTransition
                    key={step}
                    timeout={300}
                    classNames={'flex justify-center items-center ' + direction === 'forward' ? 'slide-forward' : 'slide-backward'}
                >
                    <div className={`p-4 bg-white ${minHeight} `}>
                        {step === 1 && (
                            <div className={`flex flex-col items-center ${minHeight} ${bodyLayout}`}>
                                <h2 className="text-xl font-bold mb-4 text-center">How do you identify?</h2>
                                <div className="flex space-x-4">
                                    <div
                                        className={`cursor-pointer  p-2 rounded `}
                                        onClick={() => handleGenderSelect('male')}
                                    >
                                        <img src={maleImg} alt="Male" className={` ${formData.gender === 'male' ? 'border-blue-500' : 'border-gray-300'} border-2 rounded-full w-24 h-24`} />
                                        <p className="text-center mt-2">Male</p>
                                    </div>
                                    <div
                                        className={`cursor-pointer  p-2 rounded `}
                                        onClick={() => handleGenderSelect('female')}
                                    >
                                        <img src={femaleImg} alt="Female" className={` ${formData.gender === 'female' ? 'border-blue-500' : 'border-gray-300'} rounded-full border-2 w-24 h-24`} />
                                        <p className="text-center mt-2">Female</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className={minHeight +  bodyLayout}>
                                <h2 className="sm:text-2xl font-bold  text-center">How old are you?</h2>
                                <p className='font-bold sm:text-2xl text-cosmic-primary-color'>{age} years old.</p>
                                <input
                                    type="date"
                                    name="age"
                                    // value={formData.age}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                    placeholder="Enter your age"
                                />
                            </div>
                        )}
                        {step === 3 && (
                            <div className={minHeight// + ' flex flex-col items-center'
                                + bodyLayout
                            }>
                                <h2 className="text-xl font-bold mb-4 text-center">Enter Body Temperature</h2>
                                {measurementRecorded ? (
                                    // <TemperatureTaken/>
                                    // <TemperatureNotTaken temperature={formData.bodyTemperature}/>
                                    <div>Measurement success</div>
                                ) : connecting ? (
                                    <TakeMeasurement recorded='Body Temperature'/>
                                ) : (
                                        <ConnectDevice device={'Thermometer'}/>
                                )}
                            </div>
                        )}
                        {step === 4 && (
                            <div className={minHeight + bodyLayout}>
                                <h2 className="text-xl font-bold mb-4 text-center">Blood Pressure</h2>
                                {measurementRecorded ? (
                                    <p className="text-center text-green-500">Measurement recorded: {formData.bloodPressure}</p>
                                ) : connecting ? (
                                    <TakeMeasurement recorded='Blood pressure'/>
                                ) : (
                                   <ConnectDevice device='Sphygmamometer'/>
                                )}
                            </div>
                        )}
                        {step === 5 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 5: Enter Oxygen Saturation</h2>
                                {measurementRecorded ? (
                                    <p className="text-center text-green-500">Measurement recorded: {formData.oxygenSaturation}</p>
                                ) : connecting ? (
                                    <TakeMeasurement recorded='Oxygen Saturation'/>
                                ) : (
                                    <ConnectDevice device='wireless supported Pulse Oximeter'/>
                                )}
                            </div>
                        )}
                                    {/* WEIGHT INPUT */}
                        {step === 6 && (
                            <div className={minHeight + bodyLayout }>
                                <h2 className="text-xl font-bold mb-4 text-center">Weight</h2>
                                <p>Enter your weight manually:</p>
                                <div className={'h-[40vh] max-h-[250px] w-[90%] max-w-[250px] border-2 border-neutral-300 rounded-[50%] justify-center p-4' + bodyLayout }>
                                    <h3 className='text-sm sm:text-sm'>Enter weight:</h3>
                                    <input
                                        title='Weight'
                                        type="number"
                                        name="weight"
                                        value={formData.weight.value}
                                        onChange={handleChange}
                                        className="p-2 text-cosmic-primary-color text-xl text-center font-bold focus:border-0 border-0 border-b-2 border-black w-[40%]"
                                        placeholder="0"
                                    /> 
                                    <div className='flex gap-4'>
                                        <p onClick={()=>{setUnit('weight','Kg')}}>Kg</p>
                                        <p onClick={()=>{setUnit('weight','Lb')}}>Lb</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 7 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 7: Select Profile Type</h2>
                                <div id='radio-section' className='flex flex-col justify-center items-center'>
                                    <div className='flex flex-col rounded-md shadow-slate-300 shadow-md justify-center items-center w-[80vw] md:w-[50%]'>
                                        <div
                                            className='flex border-[0.5px] p-2 border-slate-100 rounded-lg justify-between items-center w-full cursor-pointer'
                                            onClick={() => setFormData({ ...formData, profileType: 'Personal' })}
                                        >
                                            <label htmlFor='option1' className='font-bold'>Personal</label>
                                            <input
                                                type="radio"
                                                id='option1'
                                                name="profileType"
                                                value={'Personal'}
                                                onChange={handleChange}
                                                checked={formData.profileType === 'Personal'}
                                                className="border p-2 w-fit"
                                                placeholder="Enter your profile type"
                                            />
                                        </div>
                                        <div
                                            className='flex border-[0.5px] p-2 border-slate-100 rounded-lg justify-between items-center w-full cursor-pointer'
                                            onClick={() => setFormData({ ...formData, profileType: 'Family' })}
                                        >
                                            <label htmlFor='option2' className='font-bold'>Family</label>
                                            <input
                                                type="radio"
                                                id='option2'
                                                name="profileType"
                                                value={'Family'}
                                                onChange={handleChange}
                                                checked={formData.profileType === 'Family'}
                                                className="border p-2 w-fit"
                                                placeholder="Enter your profile type"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 8 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 8: Review and Submit</h2>
                                <pre className="border p-2 w-full">{JSON.stringify(formData, null, 2)}</pre>
                            </div>
                        )}
                        {/* BUTTON SECTION */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-between sm:justify-center mt-4 items-center">
                            {step > 1 && (
                                <button
                                    onClick={handleBack}
                                    className={maxButtonWidth + " bg-gray-500 text-white px-4 py-2 rounded"}
                                >
                                    Back
                                </button>
                            )}
                            {(!measurementRecorded && !connecting && !connectionError && (step === 3 || step === 4 || step === 5)) && (
                                <button
                                    onClick={() => handleDeviceConnect(step === 3 ? 'bodyTemperature' : step === 4 ? 'bloodPressure' : 'oxygenSaturation')}
                                    className={maxButtonWidth + " bg-cosmic-primary-color text-white px-4 py-2 rounded "}
                                >
                                    Connect to Device
                                </button>
                            )}
                            {connectionError && (step === 3 || step === 4 || step === 5) && (
                                <button
                                    onClick={() => handleDeviceConnect(step === 3 ? 'bodyTemperature' : step === 4 ? 'bloodPressure' : 'oxygenSaturation')}
                                    className={maxButtonWidth + " bg-cosmic-primary-color text-white px-4 py-2 rounded "}
                                >
                                    Try Again
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                disabled={!isStepCompleted() && !measurementRecorded}
                                className={`  px-4 py-2 rounded ${isStepCompleted() || measurementRecorded ? 'bg-cosmic-color-lightBlue text-white ' + maxButtonWidth : 'bg-cosmic-primary-color opacity-50 text-white w-[90%] max-w-[200px]'}`}
                            >
                                {step < steps ? 'Continue' : 'Submit'}
                            </button>
                        </div>
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