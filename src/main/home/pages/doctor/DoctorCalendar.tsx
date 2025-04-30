import dayjs from "dayjs"
import { useEffect, useState } from "react"
import docImage from '../../../../assets/images/doctor-image.jpeg'


interface DateDetailsProps {
    currentMonth: number,
    numberOfDaysInAmonth: number,
    firstdayOfTheMonth: number,
    selectedYear: number,
    numberOfDaysInLastMonth: number,
    totalCalendarDisplay: number[],
    currentDayIndex: number,
    selectedDay: number
}
const DoctorCalendar = () => {

    const daysName = ["SUN", "MON", "TUE", "WED", "Thur", "FRI", "SAT"]

    const monthsName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const [dateDetails, setDateDetails
    ] = useState<DateDetailsProps>({
        currentMonth: dayjs().month(),
        numberOfDaysInAmonth: 0,
        firstdayOfTheMonth: 0,
        selectedYear: dayjs().year(),
        numberOfDaysInLastMonth: 0,
        totalCalendarDisplay: [],
        currentDayIndex: 0,
        selectedDay: Number(dayjs().format("D"))
    })

    useEffect(() => {
        const date = dayjs(`${dateDetails.selectedYear}-${dayjs().month(dateDetails.currentMonth).format("MM")}`, 'YYYY-MM').date(1);
        const firstdayOfTheMonth = date.day() + 1
        const numberOfDaysInLastMonth = dayjs().month(dateDetails.currentMonth - 1).daysInMonth()
        let currentDayIndex = 0
        let lastMonthD = []
        for (let i = 0; i < numberOfDaysInLastMonth; i++) {
            lastMonthD.push(i + 1)
        }

        lastMonthD = lastMonthD.slice(numberOfDaysInLastMonth - firstdayOfTheMonth + 1)
        let currentMonth = []

        for (let i = 0; i < dateDetails.numberOfDaysInAmonth; i++) {
            currentMonth.push(i + 1)
        }
        let allNumbers = [lastMonthD, currentMonth].flat()
        let fillWithNextMonth = []
        const length = 42 - allNumbers.length
        for (let i = 0; i < length; i++) {
            fillWithNextMonth.push(i + 1)
        }


        allNumbers = [allNumbers, fillWithNextMonth].flat()
        currentDayIndex = allNumbers.findIndex((value) => {
            return value === Number(dayjs().format("D"))
        })


        setDateDetails({
            ...dateDetails,
            numberOfDaysInAmonth: dayjs().month(dateDetails.currentMonth).daysInMonth(),
            firstdayOfTheMonth: firstdayOfTheMonth,
            numberOfDaysInLastMonth: dayjs().month(dateDetails.currentMonth - 1).daysInMonth(),
            totalCalendarDisplay: allNumbers,
            currentDayIndex: currentDayIndex

        })
    }, [dateDetails.currentMonth])

    return <div className="w-full h-full grid grid-cols-3 overflow-y-auto ">
        <div className="bg-white h-fit col-span-3 md:col-span-2">
            <div className="grid grid-cols-3 p-6">
                <p className="col-span-2 font-bold">Calendar</p>

                <select className="border p-1 rounded-md w-[120px] col-span-1 justify-self-end ">
                    <option>Click</option>
                    <option>Click</option>
                    <option>Click</option>
                </select>
            </div>

            <div className="w-full flex h-full">

                <div className="w-[50px] ms-4 h-full  ">
                    <p className="text-center">2034</p>

                    <div className="w-full flex flex-col  place-items-center justify-evenly gap-3 cursor-default">
                        {
                            monthsName.map((month, i) => (
                                <p className={`${dateDetails.currentMonth === i ? 'text-cosmic-primary-color' : 'text-cosmic-light-color-call'}`} key={i} onClick={() => {

                                    setDateDetails({
                                        ...dateDetails,
                                        currentMonth: i
                                    })
                                }}>{month}</p>
                            ))
                        }
                    </div>
                </div>

                <div className="grid grid-cols-7  w-full h-fit gap-2">
                    <div className=" ms-4 col-span-7  grid grid-cols-7">
                        {
                            daysName.map((day, i) => (
                                <p className={`text-cosmic-primary-color  md:w-[100%] text-center`} key={i} >{day}</p>
                            ))
                        }

                    </div>


                    <div className=" ms-4 col-span-7  grid grid-cols-7 h-fit">
                        {
                            dateDetails.totalCalendarDisplay && dateDetails.totalCalendarDisplay.length > 0 && dateDetails.totalCalendarDisplay.map((number, i) => (
                                <p className={` ${dateDetails.currentDayIndex === i && 'bg-cosmic-primary-color text-white'} text-cosmic-primary-color md:w-[100%] h-[70px] font-bold text-[24px] border text-center pt-6`} key={i}>{number}</p>
                            ))
                        }

                    </div>



                </div>


            </div>

        </div>

        <div className=" w-full h-[300px]  col-span-3 md:col-span-1">

            <div className="w-full p-6 ">
                <div className="w-full h-fit flex gap-4">
                    <p className="text-cosmic-primary-color font-bold text-[24px]" >{dayjs().month(dateDetails.currentMonth).format("MMMM")}</p>
                    <p className="font-bold text-[24px]">{dateDetails.selectedDay}</p>
                </div>
                <p>{dayjs().month(dateDetails.currentMonth).format("dddd")}</p>

                <div className="mt-6">
                    <p>Appointments</p>
                    <div className="w-full">
                        <div className="w-full flex md:place-items-center gap-3 mt-2">
                            <img className="rounded-full w-[40px] h-[40px]" src={docImage} alt="profile" />
                            <div className="w-full ">
                                <p>Grace Williams</p>
                                <p>1:20pm - 6:30pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    </div>
}


export default DoctorCalendar