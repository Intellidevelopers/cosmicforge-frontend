import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarHome from "../../../home/component/doctor/DoctorNavBarMobile"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"
import { getDoctorDeparments, updateDoctorProfile } from "../../service"
import useGetImageBase64String from "../../patient/hooks/useGetImageBase64String"
import Loader from "../../../generalComponents/Loader"
import { authenticateUser } from "../../../store/reducers/userReducers"
import { useLocation, useNavigate } from "react-router-dom"


export interface DoctorEditProfileProps {
    profilePicture?: string | null,
    fullName?: string,
    lastName?: string,
    email?: string,
    mobileNo?: string,
    professionalTitle?: string,
    specialization?: string,
    currentClinic?: string,
    department?: string,
    bio?: string,
    pricing?: string,
    experience?: {
        hospitalName?: string,
        NoOfPatientTreated?: string,
        specializationAndDepartment?: string,
        date?: string
    },
    workingHours?: {
        day?: string,
        time?: string
    }
}


const DoctorEditProfilePage = () => {


    const { state } = useLocation()

    const navigate = useNavigate()

    const imageFileRef: MutableRefObject<HTMLInputElement | null> = useRef(null)

    const days = ['monday', 'tuesday', 'wednessday', 'thuesday', 'friday', 'saturday', 'sunday']

    const time = ['12:00pm', '12:15pm', '12:30pm', '1:00pm', '1:15pm', '1:30pm', '2:00pm', '2:15pm', '2:30pm', '3:00pm', '3:15pm', '3:30pm', '4:00pm', '4:15pm', '4:30pm', '5:00am', '5:15am', '5:30am', '5:00pm', '5:15pm', '5:30pm', '6:00am', '6:15am', '6:30am', '6:00pm', '6:15pm', '6:30pm',
        '7:00am', '7:15am', '7:30am', '7:00pm', '7:15pm', '7:30pm', '8:00am', '8:15am', '8:30am', '8:00pm', '8:15pm', '8:30pm', '8:00am', '8:15am', '8:30am', '8:00pm', '8:15pm', '8:30pm', '9:00am', '9:15am', '9:30am', '9:00pm', '9:15pm', '9:30pm', '10:00am', '10:15am', '10:30am', '10:00pm', '10:15pm', '10:30pm',
        '11:00am', '11:15am', '11:30am', '11:00pm', '11:15pm', '11:30pm'
    ]


    const user = useSelector((state: RootReducer) => state.user)

    const dispatch = useDispatch()

    const [errorMessage, setErrorMessage] = useState<string>('')


    const [loading, setLoading] = useState<boolean>(false)

    const [doctorEditProfileDetails, setDoctorEditProfileDetails] = useState<DoctorEditProfileProps>({
        profilePicture: user.data?.profile?.profilePicture ?? null,
        fullName: user.data?.fullName ?? '',
        lastName: user.data?.lastName ?? '',
        mobileNo: user.data?.profile?.mobileNo ?? '',
        professionalTitle: user.data?.profile?.professionalTitle ?? '',
        specialization: user.data?.profile?.specialization ?? '',
        currentClinic: user.data?.profile?.currentClinic ?? '',
        department: user.data?.profile?.department ?? '',
        bio: user.data?.profile?.bio ?? '',
        pricing: user.data?.profile?.pricing ?? '',
        experience: {
            hospitalName: user.data?.profile?.experience?.hospitalName ?? '',
            NoOfPatientTreated: user.data?.profile?.experience?.NoOfPatientTreated ?? '',
            specializationAndDepartment: user.data?.profile?.experience?.specializationAndDepartment ?? '',
            date: user.data?.profile?.experience?.date ?? ''
        },
        workingHours: {
            day: user.data?.profile?.workTime?.day ?? "",
            time: user.data?.profile?.workTime?.time ?? ""
        }
    })



    const [doctorsDep, setDoctorsDep] = useState<{ name: string, image: string }[]>()

    const { getImageBase64String } = useGetImageBase64String()
    useEffect(() => {

        (async () => {

            const result = await getDoctorDeparments(user.data?.token!!)
            if (result.status === 200) {
                setDoctorsDep(result.data)

            }
        })()



    }, [])

    const [successfulUpdate, setSuccessfulUpdate] = useState<boolean>(false)

    return <div className="w-full h-full cursor-default overflow-y-hidden bg-[#F5F5F5] ">


        <div className={`${successfulUpdate ? 'flex' : 'hidden'}  absolute bg-gray-500 bg-opacity-30 flex justify-center place-items-center w-full h-screen  bottom-0 z-[200]`}>
            <div className="bg-white w-[80%] h-[60%] rounded-md flex flex-col place-items-center gap-12 relative">
                <p className="font-bold mt-8 text-[20px]">Update profile status</p>
                <p className="text-green-600">Successfully Updated profile</p>
                <p className="bg-cosmic-primary-color text-white  rounded-md absolute right-4 bottom-2 p-4 w-[100px] text-center" onClick={() => {
                    setSuccessfulUpdate(false)
                }}>ok</p>
            </div>
        </div>


        <div className={`   ${(loading || errorMessage) ? 'flex' : 'hidden'} absolute bg-gray-500 bg-opacity-30 flex justify-center place-items-center w-full h-screen bottom-50 z-[200]`}>
            <div className="bg-white w-[80%] h-[60%] rounded-md flex flex-col place-items-center gap-12 relative">
                <div className="p-3 flex justify-center place-items-center h-full w-full ">
                    {

                        loading && <div className="flex flex-col gap-5 place-items-center">
                            <h1 className="font-bold text-[20px]">Uploading please wait</h1>
                            <Loader size="100px" />

                        </div>

                    }
                    {


                        errorMessage && <div className="flex flex-col gap-5 place-items-center">
                            <h1 className="font-bold text-[20px]">Upload Status</h1>
                            <p className="text-red-600 font-light">{errorMessage}</p>
                            <p className="bg-cosmic-primary-color text-white  rounded-md absolute right-4 bottom-2 p-4 w-[100px] text-center" onClick={() => {
                                setErrorMessage('')
                            }}>Cancel</p>

                        </div>
                    }
                </div>

            </div>
        </div>




        <DoctorHomeNavBar title="Edit Profile" />
        <DoctorNavBarHome title="Edit Profile" />

        <div className="  w-full h-dvh  relative ">

            <div className="w-full md:flex place-items-center gap-2 m-4 hidden " onClick={() => {
                navigate('/doctor/home')
            }}>
                <i className="fa fa-angle-left fa-2x hover:text-cosmic-primary-color" />
                <p className=" hover:text-cosmic-primary-color">Go back</p>

            </div>

            <div className="w-full flex flex-col place-items-center  mt-2 relative  h-[100vh] overflow-y-auto pb-20">

                <div className="cursor-default md:w-[325px] md:ms-12 relative ">
                    <img src={doctorEditProfileDetails?.profilePicture ?? '/'} className="w-[200px] h-[200px] bg-black bg-opacity-40 rounded-full" />

                    <div className="md:absolute mt-2  md:top-[110px] right-0 ">
                        <p className="bg-white m-1 rounded-md p-1 text-center" onClick={() => {
                            if (imageFileRef) {
                                imageFileRef.current?.click()
                            }
                        }}>Upload Image</p>
                        <p className="bg-white m-1  rounded-md p-1 text-center">Remove Image</p>
                        <input ref={imageFileRef} type="file" accept="image/*" hidden onChange={async (e) => {
                            if (e.target.files) {
                                try {
                                    const image = await getImageBase64String(e?.target?.files[0])
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        profilePicture: image
                                    })
                                } catch (error) {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        profilePicture: ''
                                    })
                                }


                            }

                        }} />
                    </div>
                </div>


                <div className="w-full mt-4  p-6">


                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="fullName">First Name</label>
                        <input type="text" value={doctorEditProfileDetails.fullName} className="w-full bg-transparent border p-2 rounded-md" id="fullName" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                fullName: e.target.value
                            })
                        }} />
                    </div>


                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="lastName" value={doctorEditProfileDetails.lastName} className="w-full bg-transparent border p-2 rounded-md" id="lastName" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                lastName: e.target.value
                            })
                        }} />
                    </div>


                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input type="text" value={doctorEditProfileDetails.mobileNo} className="w-full bg-transparent border p-2 rounded-md" id="mobileNo" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                mobileNo: e.target.value
                            })
                        }} />
                    </div>



                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="professionalTitle">Professional Title</label>
                        <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="professionalTitle" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                professionalTitle: e.target.value
                            })
                        }} />
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="specialization">Specialization</label>
                        <input type="text" value={doctorEditProfileDetails.specialization} className="w-full bg-transparent border p-2 rounded-md" id="specialization" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                specialization: e.target.value
                            })
                        }} />
                    </div>


                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="currentClinic">Current clinic</label>
                        <input type="text" value={doctorEditProfileDetails.currentClinic} className="w-full bg-transparent border p-2 rounded-md" id="currentClinic" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                currentClinic: e.target.value
                            })
                        }} />
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="department">Department</label>
                        <select value={doctorEditProfileDetails.department} className="w-full bg-transparent border p-2 rounded-md" id="department" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                department: e.target.value
                            })
                        }} >
                            {
                                doctorsDep && doctorsDep.length > 0 && doctorsDep.map((dep, i) => (
                                    <option key={i} className=""  >

                                        {dep.name}

                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="bio">Bio</label>
                        <input value={doctorEditProfileDetails.bio} type="text" className="w-full bg-transparent border p-2 rounded-md h-[100px]" id="bio" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                bio: e.target.value
                            })
                        }} />
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="pricing">Pricing</label>
                        <input value={doctorEditProfileDetails.pricing} type="text" className="w-full bg-transparent border p-2 rounded-md" id="pricing" onChange={(e) => {
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                pricing: e.target.value
                            })
                        }} />
                    </div>



                    <div className="w-full mt-8">
                        <p className="text-cosmic-primary-color">Experience</p>

                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-2 mt-8">
                                <label htmlFor="hospitalName" className="text-[12px] md:text-[16px]">Hospital Name</label>
                                <input value={doctorEditProfileDetails.experience?.hospitalName} type="text" className="w-full bg-transparent border p-2 rounded-md" id="hospitalName" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        experience: {
                                            ...doctorEditProfileDetails?.experience,
                                            hospitalName: e.target.value
                                        }
                                    })
                                }} />
                            </div>

                            <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-2 mt-8">
                                <label htmlFor="noOfPatientTreated" className="text-[12px] md:text-[16px]">No of patient treated</label>
                                <input value={doctorEditProfileDetails.experience?.NoOfPatientTreated} type="text" className="w-full bg-transparent border p-2 rounded-md " id="noOfPatientTreated" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        experience: {
                                            ...doctorEditProfileDetails?.experience,
                                            NoOfPatientTreated: e.target.value
                                        }
                                    })
                                }} />
                            </div>
                        </div>



                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-2 mt-8">
                                <label htmlFor="specializationDep" className="text-[12px] md:text-[16px]" >Specialization/Department</label>
                                <input value={doctorEditProfileDetails.experience?.specializationAndDepartment} type="text" className="w-full bg-transparent border p-2 rounded-md" id="specializationDep" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        experience: {
                                            ...doctorEditProfileDetails?.experience,
                                            specializationAndDepartment: e.target.value
                                        }
                                    })
                                }} />
                            </div>

                            <div className="w-full col-span-2 md:col-span-1 flex flex-col gap-2 mt-8">
                                <label htmlFor="startAndEndDate" className="text-[12px] md:text-[16px]">Start d/m/y - End d/m/y</label>
                                <input value={doctorEditProfileDetails.experience?.date} type="text" className="w-full bg-transparent border p-2 rounded-md" id="startAndEndDate" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        experience: {
                                            ...doctorEditProfileDetails?.experience,
                                            date: e.target.value
                                        }
                                    })
                                }} />
                            </div>
                        </div>

                    </div>





                    <div className="w-full mt-8">
                        <p className="text-cosmic-primary-color ">Working hours</p>
                        <p className="">Days</p>
                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="w-full flex flex-col gap-2 mt-2">
                                <label htmlFor="workingFrom">From</label>
                                <select value={doctorEditProfileDetails.workingHours?.day?.split('-')[0] ?? doctorEditProfileDetails.workingHours?.day} className="w-full bg-transparent border p-2 rounded-md" id="workingFrom" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        workingHours: {
                                            ...doctorEditProfileDetails?.workingHours,
                                            day: e.target.value
                                        }
                                    })
                                }}>
                                    {
                                        days && days.length > 0 && days.map((day, i) => (
                                            <option key={i} className=""  >

                                                {day}

                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="w-full flex flex-col gap-2 mt-2">

                                <label htmlFor="workingTo">To</label>

                                <select value={doctorEditProfileDetails.workingHours?.day?.split('-')[1]} className="w-full bg-transparent border p-2 rounded-md" id="workingTo" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        workingHours: {
                                            ...doctorEditProfileDetails?.workingHours,
                                            day: doctorEditProfileDetails?.workingHours?.day?.concat("-").concat(e.target.value)
                                        }
                                    })
                                }}>
                                    {
                                        days && days.length > 0 && days.map((day, i) => (
                                            <option key={i} className=""  >

                                                {day}

                                            </option>
                                        ))
                                    }
                                </select>

                            </div>


                        </div>

                        <p className="mt-6">Time</p>

                        <div className="w-full grid grid-cols-2 gap-2">

                            <div className="w-full flex flex-col gap-2 mt-4">
                                <label htmlFor="timeFrom">From</label>
                                <select value={doctorEditProfileDetails.workingHours?.time?.split('-')[0] ?? doctorEditProfileDetails.workingHours?.time} className="w-full bg-transparent border p-2 rounded-md" id="timeFrom" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        workingHours: {
                                            ...doctorEditProfileDetails?.workingHours,
                                            time: e.target.value
                                        }
                                    })
                                }}>
                                    {
                                        time && time.length > 0 && time.map((time, i) => (
                                            <option key={i} className=""  >

                                                {time}

                                            </option>
                                        ))
                                    }
                                </select>
                            </div>



                            <div className="w-full flex flex-col gap-2 mt-4">
                                <label htmlFor="timeTo">To</label>
                                <select value={doctorEditProfileDetails.workingHours?.time?.split('-')[1]} className="w-full bg-transparent border p-2 rounded-md" id="timeTo" onChange={(e) => {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        workingHours: {
                                            ...doctorEditProfileDetails?.workingHours,
                                            time: doctorEditProfileDetails?.workingHours?.time?.concat("-").concat(e.target.value)
                                        }
                                    })
                                }}>
                                    {
                                        time && time.length > 0 && time.map((time, i) => (
                                            <option key={i} className=""  >

                                                {time}

                                            </option>
                                        ))
                                    }
                                </select>

                            </div>
                        </div>

                    </div>


                    <div className="w-full p-4 flex justify-center  cursor-default m-2 ">
                        <p className="bg-cosmic-primary-color text-white p-2 m-2 rounded-md" onClick={async () => {
                            let updatedData = doctorEditProfileDetails
                            if (doctorEditProfileDetails.profilePicture?.includes('https')) {
                                let { profilePicture, ...newData } = doctorEditProfileDetails
                                updatedData = newData
                            }
                            const data = Object.entries(updatedData).every(([, value], _) => {

                                return value === null || value === undefined || value === ""
                            })

                            if (data) {
                                setErrorMessage('Atleast one field should be entered.')

                                return
                            }

                            if (!updatedData.department || !updatedData.workingHours?.time || !updatedData.workingHours.day) {

                                setErrorMessage('Please fill the department,time and day fields ')
                                return
                            }


                            try {
                                setLoading(true)
                                setErrorMessage('')
                                const result = await updateDoctorProfile(updatedData, user.data?.token!!)
                                setLoading(false)
                                if (result.status === 200) {

                                    if (result.token) {
                                        dispatch(authenticateUser({ data: result.data }))
                                        return
                                    }
                                    dispatch(authenticateUser({
                                        data: {
                                            ...result.data,
                                            token: user.data?.token
                                        }
                                    }))

                                    if (state && state.newAccount) {
                                        navigate('/doctor/home')
                                    } else {
                                        setSuccessfulUpdate(true)
                                    }
                                    return
                                }


                                setErrorMessage(result.error ?? result.message)

                            } catch (error) {
                                console.log(error)
                                setLoading(false)
                                setErrorMessage('error occured try again')
                            }





                        }}>Save Changes</p>
                    </div>


                </div>

            </div>


        </div>

    </div>
}


export default DoctorEditProfilePage