import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarHome from "../../../home/component/doctor/DoctorNavBarMobile"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"
import { getDoctorDeparments } from "../../service"
import useGetImageBase64String from "../../patient/hooks/useGetImageBase64String"

const DoctorEditProfilePage = () => {

    interface DoctorEditProfileProps {
        image?: string,
        fullName?:string,
        email?:string,
        mobileNo?:string,
        professionalTitle?:string,
        specialization?:string,
        currentClinic?:string,
        department?:string,
        bio?:string,
        pricing?:string,
        experience?:{
         hospitalName?:string,
         NoOfPatientTreated?:string,
         specializationAndDepartment?:string,
         date?:string
        },
        workingHours?:{
            day:string,
            time:string
        }
    }

    const imageFileRef: MutableRefObject<HTMLInputElement | null> = useRef(null)

    const days = ['monday', 'tuesday', 'wednessday', 'thuesday', 'friday', 'saturday', 'sunday']

    const time = ['12:00pm', '12:15pm', '12:30pm', '1:00pm', '1:15pm', '1:30pm', '2:00pm', '2:15pm', '2:30pm', '3:00pm', '3:15pm', '3:30pm', '4:00pm', '4:15pm', '4:30pm', '5:00am', '5:15am', '5:30am', '5:00pm', '5:15pm', '5:30pm', '6:00am', '6:15am', '6:30am', '6:00pm', '6:15pm', '6:30pm',
        '7:00am', '7:15am', '7:30am', '7:00pm', '7:15pm', '7:30pm', '8:00am', '8:15am', '8:30am', '8:00pm', '8:15pm', '8:30pm', '8:00am', '8:15am', '8:30am', '8:00pm', '8:15pm', '8:30pm', '9:00am', '9:15am', '9:30am', '9:00pm', '9:15pm', '9:30pm', '10:00am', '10:15am', '10:30am', '10:00pm', '10:15pm', '10:30pm',
        '11:00am', '11:15am', '11:30am', '11:00pm', '11:15pm', '11:30pm'
    ]


    const user = useSelector((state: RootReducer) => state.user)


    const [doctorEditProfileDetails, setDoctorEditProfileDetails] = useState<DoctorEditProfileProps>()

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

    return <div className="w-full h-full">

        <DoctorHomeNavBar title="Edit Profile" />
        <DoctorNavBarHome title="Edit Profile" />
        <div className="  w-full h-dvh  ">

            <div className="w-full md:flex place-items-center gap-2 m-4 hidden ">
                <i className="fa fa-angle-left fa-2x" />
                <p>Go back</p>

            </div>

            <div className="w-full flex flex-col place-items-center  mt-2 relative h-[550px] overflow-y-auto">

                <div className="cursor-default md:w-[325px] md:ms-12 relative ">
                    <img src={doctorEditProfileDetails?.image} className="w-[200px] h-[200px] bg-black bg-opacity-40 rounded-full"  />

                    <div className="md:absolute mt-2  md:top-[110px] right-0 ">
                        <p className="bg-white m-1 rounded-md p-1" onClick={() => {
                            if (imageFileRef) {
                                imageFileRef.current?.click()
                            }
                        }}>Upload Image</p>
                        <p className="bg-white m-1  rounded-md p-1">Remove Image</p>
                        <input ref={imageFileRef} type="file" accept="image/*"  hidden onChange={async (e) => {
                            if (e.target.files) {
                                try {
                                    const image = await getImageBase64String(e?.target?.files[0])
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        image: image
                                    })
                                } catch (error) {
                                    setDoctorEditProfileDetails({
                                        ...doctorEditProfileDetails,
                                        image: ''
                                    })
                                }


                            }

                        }} />
                    </div>
                </div>


                <div className="w-full mt-4 h-full p-6">


                    <div className="w-full flex flex-col gap-2">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text"   className="w-full bg-transparent border p-2 rounded-md" id="fullName" onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                fullName:e.target.value
                            })
                        }} />
                    </div>


                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="w-full bg-transparent border p-2 rounded-md" id="email"  onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                email:e.target.value
                            })
                        }} />
                    </div>


                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="mobileNo" />
                    </div>



                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="professionalTitle">Professional Title</label>
                        <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="professionalTitle"  onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                professionalTitle:e.target.value
                            })
                        }} />
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="specialization">Specialization</label>
                        <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="specialization" onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                specialization:e.target.value
                            })
                        }}  />
                    </div>


                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="currentClinic">Current clinic</label>
                        <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="currentClinic" onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                currentClinic:e.target.value
                            })
                        }}  />
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="department">Department</label>
                        <select className="w-full bg-transparent border p-2 rounded-md" id="department" onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                department:e.target.value
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
                        <input type="text" className="w-full bg-transparent border p-2 rounded-md h-[100px]" id="bio" onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                bio:e.target.value
                            })
                        }}  />
                    </div>

                    <div className="w-full flex flex-col gap-2 mt-8">
                        <label htmlFor="pricing">Pricing</label>
                        <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="pricing" onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                pricing:e.target.value
                            })
                        }}  />
                    </div>



                    <div className="w-full mt-8">
                        <p className="text-cosmic-primary-color">Experience</p>

                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="w-full flex flex-col gap-2 mt-8">
                                <label htmlFor="hospitalName">Hospital Name</label>
                                <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="hospitalName" onChange={(e)=>{
                            setDoctorEditProfileDetails({
                                ...doctorEditProfileDetails,
                                experience:{
                                    ...doctorEditProfileDetails?.experience,
                                    hospitalName:e.target.value
                                }
                            })
                        }}  />
                            </div>

                            <div className="w-full flex flex-col gap-2 mt-8">
                                <label htmlFor="noOfPatientTreated">No of patient treated</label>
                            </div>
                        </div>



                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="w-full flex flex-col gap-2 mt-8">
                                <label htmlFor="specializationDep">Specialization/Department</label>
                                <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="specializationDep" />
                            </div>

                            <div className="w-full flex flex-col gap-2 mt-8">
                                <label htmlFor="startAndEndDate">Start d/m/y - End d/m/y</label>
                                <input type="text" className="w-full bg-transparent border p-2 rounded-md" id="startAndEndDate" />
                            </div>
                        </div>

                    </div>





                    <div className="w-full mt-8">
                        <p className="text-cosmic-primary-color">Working hours</p>
                        <p className="">Days</p>
                        <div className="w-full grid grid-cols-2 gap-2">
                            <div className="w-full flex flex-col gap-2 mt-2">
                                <label htmlFor="workingFrom">From</label>
                                <select className="w-full bg-transparent border p-2 rounded-md" id="workingFrom">
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

                                <select className="w-full bg-transparent border p-2 rounded-md" id="workingTo">
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
                                <select className="w-full bg-transparent border p-2 rounded-md" id="timeFrom">
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
                                <select className="w-full bg-transparent border p-2 rounded-md" id="timeTo">
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


                    <div className="w-full p-4 flex justify-center">
                        <p className="bg-cosmic-primary-color text-white p-2 m-2">Save Changes</p>
                    </div>
                </div>

            </div>


        </div>

    </div>
}


export default DoctorEditProfilePage