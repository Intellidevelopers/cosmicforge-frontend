import { Navigate, useLocation, useNavigate } from "react-router-dom"
import AppointmentCalender from "./AppointmentCalender"
import Loader from "../../../generalComponents/Loader"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { getSpecificDoctorAppointmentById } from "../../service"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/initStore"

const BookAppointmentPhaseOnePage = () => {

    const navigate = useNavigate()
    const [loading,] = useState<boolean>(false)
    const [errorMesage, setErrorMesage] = useState<string>('')

    const [timeSelected, setTimeSelected] = useState<string | null>('10')


    const bodyRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

    const { state } = useLocation()


    const [availableTimeList, setAvailableTimeList] = useState<any[]>()


    if (!state) {

        return <Navigate to={'/patient/find-a-specialist'} />

    }



    const timeUtc = new Map<number, number>()

    timeUtc.set(1, 13)
    timeUtc.set(2, 14)
    timeUtc.set(3, 15)
    timeUtc.set(4, 16)
    timeUtc.set(5, 17)
    timeUtc.set(6, 18)
    timeUtc.set(7, 19)
    timeUtc.set(8, 20)
    timeUtc.set(9, 21)
    timeUtc.set(10, 22)
    timeUtc.set(11, 23)
    timeUtc.set(12, 24)

    const [appointmentmentDetails, setAppointmentmentDetails] = useState<{ date: string, time: string, appointmentType: 'None' | 'Virtual' | 'In-Person', sessionDuration: number }>({
        date: '',
        time: '',
        appointmentType: 'Virtual',
        sessionDuration: 15
    })

    const user = useSelector((state: RootReducer) => state.user.data)


    const [doctorsAppointmentDetails, setDoctorsAppointmentDetails] = useState<any[]>([])


    useEffect(() => {

        (async () => {


            try {

                const result = await getSpecificDoctorAppointmentById(user?.token!!, state.doctorId)





                if (result.status === 200) {

                 const appoinments = result.data.appointments

                  setDoctorsAppointmentDetails(appoinments)
            
                    return
                }



                setErrorMesage('Something went wrong try again.')
                if (bodyRef.current) {

                    bodyRef.current.scrollBy({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
                }


            } catch (error) {

                setErrorMesage('Something went wrong try again.')
                if (bodyRef.current) {

                    bodyRef.current.scrollBy({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
                }

            }

        })()

    }, [])




    useEffect(() => {

        const time = state.time

        if (doctorsAppointmentDetails.length > 0 && time && time.split('-').length >= 1 && (time.split('-')[0].match(/[0-9]/g) && time.split('-')[1].match(/[0-9]/g))) {

            const date = new Date()
            let selectedDay

            let selectedMonth

            let selectedYear








            if (appointmentmentDetails.date) {

                selectedDay = appointmentmentDetails.date.split(' ')[1].replace(/[a-z]/g, '')
                selectedMonth = appointmentmentDetails.date.split(' ')[2]
                selectedYear = appointmentmentDetails.date.split(' ')[4]

            } else {
                selectedDay = date.toLocaleDateString('en-Us', {
                    day: 'numeric'
                })

                selectedMonth = date.toLocaleDateString('en-Us', {
                    month: 'long'
                })

                selectedYear = date.getFullYear()
            }




            const filteredData = doctorsAppointmentDetails.filter((details: any) => {

                const doctorSelectedDay = details.appointmentDate.split(' ')[1].replace(/[a-z]/g, '')
                const doctorSelectedMonth = details.appointmentDate.split(' ')[2]
                const doctorSelectedYear = details.appointmentDate.split(' ')[4]


                if (doctorSelectedDay === selectedDay && selectedMonth === doctorSelectedMonth && selectedYear === doctorSelectedYear) {

                    return true
                } else {
                    return false
                }
            })






            if (filteredData.length > 0) {





                let availableTime: string[] = []




                let startTime = time.split('-')[0]

                let endTime = time.split('-')[1]




                const startTimeHour = startTime.split(":")[0]
                const startTimeMin = startTime.split(":")[1].replace(/[a-z A-Z]/g, '')

                const startTimeMeridian = startTime.split(":")[1].replace(/[0-9]/g, '').toLowerCase()



                const endTimeHour = endTime.split(":")[0]
                const endTimeMin = endTime.split(":")[1].replace(/[a-z A-Z]/g, '')

                const endTimeMeridian = endTime.split(":")[1].replace(/[0-9]/g, '').toLowerCase()

                let startFormattedTime = new Date()


                if (startTimeMeridian.trim() === 'pm') {

                    startFormattedTime.setHours(timeUtc.get(Number(startTimeHour))!!, startTimeMin.includes('00') ? Number(0) : Number(startTimeMin), 0, 0)

                } else {
                    startFormattedTime.setHours(Number(startTimeHour), startTimeMin.includes('00') ? Number(0) : Number(startTimeMin), 0, 0)



                }





                let endFormattedTime = new Date()
                endFormattedTime.setHours((endTimeMeridian.trim() === 'pm') ? timeUtc.get(Number(endTimeHour))!! : Number(endTimeHour), endTimeMin.includes('00') ? Number(0) : Number(endTimeMin), 0, 0)



                let currentTime = new Date(startFormattedTime.getTime())





                while (currentTime <= endFormattedTime) {

                    const timeToAdd = currentTime.toLocaleTimeString('en-US', {
                        hour12: true,
                        timeStyle: 'short'
                    })

                    //display according to current time

                    const recentTime = new Date()
                    if(recentTime.getTime()<= currentTime.getTime()){
                       availableTime.push(timeToAdd)
                    }

                    




                    // console.log(app)


                    currentTime.setMinutes(currentTime.getMinutes() + 15)


                }





                const filteredTimeData = availableTime.filter((timeToAdd) => {

                    const t = filteredData.find((details) => {


                        if ((details.appointmentTime.split('-')[0].trim() === timeToAdd.trim() || details.appointmentTime.split('-')[1] === timeToAdd.trim()) && details.medicalPersonelID._id===state?.doctorId) {

                            return true



                        } else {

                            return false
                        }







                    })


                    return t === undefined

                })

                setAvailableTimeList(filteredTimeData)


            } else {


          if( time && time.split('-').length >= 1 && (time.split('-')[0].match(/[0-9]/g) && time.split('-')[1].match(/[0-9]/g))){

          
            let availableTime: string[] = []




                let startTime = time.split('-')[0]

                let endTime = time.split('-')[1]




                const startTimeHour = startTime.split(":")[0]
                const startTimeMin = startTime.split(":")[1].replace(/[a-z A-Z]/g, '')

                const startTimeMeridian = startTime.split(":")[1].replace(/[0-9]/g, '').toLowerCase()



                const endTimeHour = endTime.split(":")[0]
                const endTimeMin = endTime.split(":")[1].replace(/[a-z A-Z]/g, '')

                const endTimeMeridian = endTime.split(":")[1].replace(/[0-9]/g, '').toLowerCase()

                let startFormattedTime = new Date()


                if (startTimeMeridian.trim() === 'pm') {

                    startFormattedTime.setHours(timeUtc.get(Number(startTimeHour))!!, startTimeMin.includes('00') ? Number(0) : Number(startTimeMin), 0, 0)

                } else {
                    startFormattedTime.setHours(Number(startTimeHour), startTimeMin.includes('00') ? Number(0) : Number(startTimeMin), 0, 0)



                }





                let endFormattedTime = new Date()
                endFormattedTime.setHours((endTimeMeridian.trim() === 'pm') ? timeUtc.get(Number(endTimeHour))!! : Number(endTimeHour), endTimeMin.includes('00') ? Number(0) : Number(endTimeMin), 0, 0)



                let currentTime = new Date(startFormattedTime.getTime())





                while (currentTime <= endFormattedTime) {

                    const timeToAdd = currentTime.toLocaleTimeString('en-US', {
                        hour12: true,
                        timeStyle: 'short'
                    })

                    //display according to current time

                    const recentTime = new Date()
                    if(recentTime.getTime()<= currentTime.getTime()){
                       availableTime.push(timeToAdd)
                    }



                    // console.log(app)


                    currentTime.setMinutes(currentTime.getMinutes() + 15)


                }

                setAvailableTimeList(availableTime)
        
        }

            

            }


        }
    }, [appointmentmentDetails.date, doctorsAppointmentDetails])








    return <div ref={bodyRef} className="relative bg-[#F5F5F5] bg-opacity-50  cursor-default  font-poppins w-full p-5 overflow-x-hidden  h-full mb-20 overflow-y-auto"
    >
        <div className=" place-items-center gap-3 hidden md:flex " onClick={() => {
            navigate(-1)
        }}>
            <i className="fa fa-angle-left fa-xl" />
            <p>back</p>
        </div>



        <div className="relative w-full  flex flex-col place-items-center  p-3  ">

            <div className=" relative m-4 h-[200px] w-[200px]    ">
                <img className="w-full h-full     bg-orange-400 rounded-full
  " src={state?.doctorImage} style={{ objectPosition: 'top', objectFit: 'cover' }} />

            </div>

            <div className="mt-2 flex flex-col place-items-center gap-2">
                <p>Dr {state?.dooctorName}{state?.doctorName}</p>
                <p className="font-extralight">{state?.department}</p>


            </div>



        </div>

        <p className="font-bold mt-4">Select available Date and Time</p>
        <p className="text-center mt-2 text-cosmic-primary-color">Date</p>



        <div className="w-full">

            <AppointmentCalender onDateSelected={(d) => {

                setAppointmentmentDetails({
                    ...appointmentmentDetails,
                    date: d,
                    appointmentType: appointmentmentDetails.appointmentType,
                    time: appointmentmentDetails.time
                })
            }} />


        </div>




        <div className="w-full p-3 ">



            <div className="w-full">

                <h5 className="text-center text-cosmic-primary-color mt-3">Time</h5>

                <ul className="flex flex-wrap gap-2 justify-center ">
                    {

                        timeSelected && availableTimeList && availableTimeList.length > 0 && availableTimeList.map((d, k) => (



                            <li key={k} className={` border  ${timeSelected?.trim() === d.trim() ? 'border-cosmic-primary-color  ' : 'border-transparent'}  w-[100px] m-4 h-[90%] p-2 hover:border-cosmic-primary-color `} onClick={() => {

                                setTimeSelected(d)


                                const time = new Date()

                                time.setHours((d.split(':')[1].replace(/[0-9]/g, '').trim().toLowerCase() === 'pm') && (Number(d.split(':')[0]) !== 12) ? timeUtc.get(Number(d.split(':')[0]))!! : Number(d.split(':')[0]), Number(d.split(':')[1].replace(/[a-z A-Z]/g, '') === '00' ? 0 : d.split(':')[1].replace(/[a-z A-Z]/g, '')), 0, 0)

                                time.setMinutes(time.getMinutes() + 15)

                                setAppointmentmentDetails({
                                    ...appointmentmentDetails,
                                    time: d.concat('-').concat(new Date(time).toLocaleTimeString('en-US', {
                                        timeStyle: 'short'
                                    }))!!,

                                })



                            }}>{d}</li>



                        ))
                    }
                </ul>

            </div>


            <h5 className=" text-center  text-cosmic-primary-color mt-8 ">Duration</h5>


            <select className="bg-transparent mt-6 " onChange={(e) => {

                const time = new Date()

                time.setHours((timeSelected?.split(':')[1].replace(/[0-9]/g, '').trim().toLowerCase() === 'pm') && (Number(timeSelected.split(':')[0]) !== 12) ? timeUtc.get(Number(timeSelected?.split(':')[0]))!! : Number(timeSelected?.split(':')[0]), Number(timeSelected?.split(':')[1].replace(/[a-z A-Z]/g, '') === '00' ? 0 : timeSelected?.split(':')[1].replace(/[a-z A-Z]/g, '')), 0, 0)

                time.setMinutes(time.getMinutes() + (e.target.value.includes('30') ? 30 : 15))

                setAppointmentmentDetails({
                    ...appointmentmentDetails,
                    time: timeSelected?.concat('-').concat(new Date(time).toLocaleTimeString('en-US', {
                        timeStyle: 'short'
                    }))!!,
                    sessionDuration: e.target.value.includes('30') ? 30 : 15
                })


            }}>
                <option>15 mins</option>
                <option>30 mins</option>
            </select>


        </div>




        {
            /*
            <div className="w-full mt-8">
            <p className="font-bold ">Appointment Type</p>

            <div className="w-full mt-2">
                <div className="w-full relative p-2 flex border shadow">
                    <p className="">Virtual</p>
                    <input type="checkbox" checked={appointmentmentDetails?.appointmentType === 'Virtual'} className={`absolute top-4 right-8 decoration-cosmic-primary-color`} onChange={() => {
                        setAppointmentmentDetails({
                            ...appointmentmentDetails,
                            date: appointmentmentDetails.date,
                            appointmentType: appointmentmentDetails.appointmentType === 'Virtual' ? 'None' : 'Virtual',
                            time: appointmentmentDetails.time
                        })
                    }} />
                </div>

                <div className="w-full relative p-2 flex  border shadow">
                    <p className="">In-Personal</p>
                    <input type="checkbox" checked={appointmentmentDetails?.appointmentType === 'In-Person'} className={`absolute top-4 right-8 decoration-cosmic-primary-color`}  onChange={() => {
                        setAppointmentmentDetails({
                            ...appointmentmentDetails,
                            date: appointmentmentDetails.date,
                            appointmentType: appointmentmentDetails.appointmentType === 'In-Person' ? 'None' : 'In-Person',
                            time: appointmentmentDetails.time
                        })
                    }} />
                </div>
            </div>
        </div>

            */
        }




        <div className="w-full p-8 flex flex-col place-items-center justify-center">
            <p className="bg-cosmic-primary-color p-2 text-center text-white rounded-md w-[300px]" onClick={() => {
                setErrorMesage('')


                const dataComplete = Object.entries(appointmentmentDetails).every(([, value],) => {

                    return !(value === '' || value === 'None')
                })

                if (!dataComplete) {
                    setErrorMesage('please fill the complete details.')
                    if (bodyRef.current) {

                        bodyRef.current.scrollBy({ top: bodyRef.current.scrollHeight + 100, behavior: 'smooth' })
                    }
                    return
                }



                const isValid = availableTimeList?.find((item) => {
                    return item === appointmentmentDetails.time.split('-')[1]
                })



                if (!isValid) {
                    setErrorMesage('please reshedule the time as doctor will not be available at that time.')
                    if (bodyRef.current) {

                        bodyRef.current.scrollBy({ top: bodyRef.current.scrollHeight, behavior: 'smooth' })
                    }
                    return

                }


                if (!state.pricingForThirtyMins && appointmentmentDetails.sessionDuration === 30) {

                    setErrorMesage('No pricing for 30mins .')
                    if (bodyRef.current) {

                        bodyRef.current.scrollBy({ top: bodyRef.current.scrollHeight + 100, behavior: 'smooth' })
                    }
                    return

                }



                if (!dataComplete) {
                    setErrorMesage('please provide all details needed.')
                    if (bodyRef.current) {

                        bodyRef.current.scrollBy({ top: bodyRef.current.scrollHeight + 100, behavior: 'smooth' })
                    }
                    return
                }


                navigate("/patient/appointment/checkout", {
                    state: {
                        appointmentmentDetails,
                        doctorImage: state?.doctorImage,
                        doctorName: state?.doctorName,
                        doctorSpecialization: state?.doctorSpecialization,
                        department: state?.department,
                        clinic: state?.clinic,
                        address: state?.address,
                        pricing: state?.pricing,
                        bio: state?.bio,
                        title: state?.title,
                        workingHour: state?.workingHour,
                        doctorId: state?.doctorId,
                        currency: state,
                        pricingForThirtyMins: state.pricingForThirtyMins,

                    }
                })

            }}>Continue</p>


            {
                loading && <div className="w-full m-3 flex justify-center">
                    <Loader size="50px" />
                </div>
            }

            {
                errorMesage && <div className="w-full m-3 flex justify-center">
                    <p className="text-red-600">{errorMesage}</p>
                </div>
            }


        </div>




    </div>
}


export default BookAppointmentPhaseOnePage