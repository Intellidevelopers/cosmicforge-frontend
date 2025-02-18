import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProgressBar from '../component/progressBar';
import femaleImg from '../../../assets/images/cosmic-doc-2.png';
import maleImg from '../../../assets/images/doctor-image.jpeg';

const ProfileSetup = () => {
    const [step, setStep] = useState<number>(1);
    const [direction, setDirection] = useState<string>('forward');
    const [connectionError, setConnectionError] = useState<boolean>(false);
    const [measurementRecorded, setMeasurementRecorded] = useState<boolean>(false);
    const [connecting, setConnecting] = useState<boolean>(false);
    
    const [formData, setFormData] = useState({
        gender: '',
        age: 0,
        bodyTemperature: '',
        bloodPressure: '',
        oxygenSaturation: '',
        weight: '',
        profileType: '',
    });

    const steps: number = 8;
    const minHeight = "min-h-[50dvh]"; // Define the minHeight variable

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
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
                return formData.gender !== '';
            case 2:
                return formData.age > 0;
            case 3:
                return formData.bodyTemperature !== '';
            case 4:
                return formData.bloodPressure !== '';
            case 5:
                return formData.oxygenSaturation !== '';
            case 6:
                return formData.weight !== '';
            case 7:
                return formData.profileType !== '';
            default:
                return false;
        }
    };

    return (
        <div className="container mx-auto p-4">
            <ProgressBar completedSteps={step} totalSteps={steps} />
            <TransitionGroup>
                <CSSTransition
                    key={step}
                    timeout={300}
                    classNames={direction === 'forward' ? 'slide-forward' : 'slide-backward'}
                >
                    <div className={`p-4 bg-white rounded shadow-md ${minHeight}`}>
                        {step === 1 && (
                            <div className={`flex flex-col items-center ${minHeight}`}>
                                <h2 className="text-xl font-bold mb-4 text-center">How do you identify?</h2>
                                <div className="flex space-x-4">
                                    <div
                                        className={`cursor-pointer border-2 p-2 rounded ${formData.gender === 'male' ? 'border-blue-500' : 'border-gray-300'}`}
                                        onClick={() => handleGenderSelect('male')}
                                    >
                                        <img src={maleImg} alt="Male" className="rounded-full w-24 border-2 border-black h-24" />
                                        <p className="text-center mt-2">Male</p>
                                    </div>
                                    <div
                                        className={`cursor-pointer border-2 p-2 rounded ${formData.gender === 'female' ? 'border-blue-500' : 'border-gray-300'}`}
                                        onClick={() => handleGenderSelect('female')}
                                    >
                                        <img src={femaleImg} alt="Female" className=" rounded-full border-2 border-black w-24 h-24" />
                                        <p className="text-center mt-2">Female</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 2: Enter Age</h2>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                    placeholder="Enter your age"
                                />
                            </div>
                        )}
                        {step === 3 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 3: Enter Body Temperature</h2>
                                {measurementRecorded ? (
                                    <p className="text-center text-green-500">Measurement recorded: {formData.bodyTemperature}</p>
                                ) : connecting ? (
                                    <p className="text-center text-blue-500">Please wait while the device takes the measurement...</p>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleDeviceConnect('bodyTemperature')}
                                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                        >
                                            Connect to Device
                                        </button>
                                        {connectionError && (
                                            <button
                                                onClick={() => handleDeviceConnect('bodyTemperature')}
                                                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                                            >
                                                Try Again
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                        {step === 4 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 4: Enter Blood Pressure</h2>
                                {measurementRecorded ? (
                                    <p className="text-center text-green-500">Measurement recorded: {formData.bloodPressure}</p>
                                ) : connecting ? (
                                    <p className="text-center text-blue-500">Please wait while the device takes the measurement...</p>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleDeviceConnect('bloodPressure')}
                                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                        >
                                            Connect to Device
                                        </button>
                                        {connectionError && (
                                            <button
                                                onClick={() => handleDeviceConnect('bloodPressure')}
                                                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                                            >
                                                Try Again
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                        {step === 5 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 5: Enter Oxygen Saturation</h2>
                                {measurementRecorded ? (
                                    <p className="text-center text-green-500">Measurement recorded: {formData.oxygenSaturation}</p>
                                ) : connecting ? (
                                    <p className="text-center text-blue-500">Please wait while the device takes the measurement...</p>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleDeviceConnect('oxygenSaturation')}
                                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                        >
                                            Connect to Device
                                        </button>
                                        {connectionError && (
                                            <button
                                                onClick={() => handleDeviceConnect('oxygenSaturation')}
                                                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
                                            >
                                                Try Again
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                        {step === 6 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 6: Enter Weight</h2>
                                <input
                                    type="text"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                    placeholder="Enter your weight"
                                />
                            </div>
                        )}
                        {step === 7 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 7: Select Profile Type</h2>
                                <input
                                    type="text"
                                    name="profileType"
                                    value={formData.profileType}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                    placeholder="Enter your profile type"
                                />
                            </div>
                        )}
                        {step === 8 && (
                            <div className={minHeight}>
                                <h2 className="text-xl font-bold mb-4 text-center">Step 8: Review and Submit</h2>
                                <pre className="border p-2 w-full">{JSON.stringify(formData, null, 2)}</pre>
                            </div>
                        )}
                        <div className="flex flex-col gap-4 justify-between mt-4">
                            {step > 1 && (
                                <button
                                    onClick={handleBack}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Back
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                disabled={!isStepCompleted() && !measurementRecorded}
                                className={`px-4 py-2 rounded ${isStepCompleted() || measurementRecorded ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500'}`}
                            >
                                {step < steps ? 'Continue' : 'Submit'}
                            </button>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <style>{`
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