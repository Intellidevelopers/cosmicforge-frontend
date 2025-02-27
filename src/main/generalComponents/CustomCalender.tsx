import { MutableRefObject, useEffect, useRef, useState } from "react"
import dayjs from 'dayjs'


interface CalenderProps {
    onDateSelected: (age: number, dateSelected: string) => void
}

const CustomCalender = (props: CalenderProps) => {

    const [firstDay, setFirstDay] = useState<number>()
    const [days, setDays] = useState<string[]>([])
    const [years, setYears] = useState<number[]>([])
    const [months, setMonths] = useState<string[]>([])
    const [currentMonth, setCurrentMonth] = useState<string>()
    const [daysInMonth, setDaysInMonth] = useState<number>(
    )
    const [currentYear, setCurrentYear] = useState<number>()

    const [selectedDate, setSelectedDate] = useState<string>()

    const [selectedDay, setSelectedDay] = useState<number>(Number(dayjs().format('D')))

    const selectRef: MutableRefObject<HTMLSelectElement | null> = useRef(null)





    const startYear = dayjs().year() - 50
    const endYear = dayjs().year()



    useEffect(() => {
        let customYears: number[] = []
        let customMonths: string[] = []
        for (let i = startYear; i <= endYear; i++) {
            customYears.push(i)
        }

        setYears(customYears.reverse())
        setCurrentYear(dayjs().year())
        for (let i = 0; i < 12; i++) {
            customMonths.push(dayjs().month(i).format('MMMM'))
        }
        setMonths(customMonths)
        setCurrentMonth(dayjs().format('MMMM'))

        let shortD = []
        for (let i = 0; i < 7; i++) {
            shortD.push(dayjs().day(i).format('ddd'))
        }
        setDays(shortD)

        //setSelectedDate(dayjs().format('DD').concat(getDaySuffice(Number(dayjs().format('D')))).concat(' ').concat(dayjs().format('MMMM')).concat('  ').concat(dayjs().format('YYYY')))




    }, [])

    useEffect(() => {



        const numOfDays = dayjs(`${currentYear}-${months.findIndex((value) => {
            return value === currentMonth
        }) + 1}`, 'YYYY-MM').daysInMonth()

        const date = dayjs(`${currentYear}-${months.findIndex((value) => {
            return value === currentMonth
        }) + 1}`, 'YYYY-MM').date(1)
        setDaysInMonth(numOfDays)
        setFirstDay(date.day() + 1)


        setSelectedDate(selectedDay.toString().concat(getDaySuffice(selectedDay)).concat(' ').concat(dayjs(`${currentYear}-${months.findIndex((value) => {
            return value === currentMonth
        }) + 1}`, 'YYYY-MM').format('MMMM')).concat('  ').concat(dayjs(`${currentYear}-${months.findIndex((value) => {
            return value === currentMonth
        }) + 1}`).format('YYYY')))






    }, [currentMonth, currentYear, selectedDay])

    const getDaySuffice = (day: number) => {
        if (day >= 11 && day <= 13) {
            return 'th'
        }

        switch (day % 10) {
            case 1:
                return 'st'
            case 2:
                return 'nd'

            case 3:
                return 'rd'
            default: return 'th'
        }
    }

    return <div className="font-poppins w-full h-dvh  flex justify-center place-items-center">


        <div className="md:w-[50%] w-[80%]  min-h-[350px] bg-white shadow shadow-black p-4">
            <p className="bg-cosmic-primary-color p-4 text-white text-center font-extrabold">{selectedDate}</p>
            <div className="w-full flex  mt-2 md:m-10">


                <select ref={selectRef} className="p-2 rounded-md outline-none bg-transparent" onChange={(e) => {

                    setCurrentYear(Number(e.currentTarget.value))

                }}>
                    <option selected>{currentYear}</option>

                    {
                        years.length > 0 && years.map((year, index) => (

                            (index !== 0) && <option key={index}>{year}</option>
                        ))
                    }
                </select>








                <div className="w-[60%] flex ms-2 justify-center place-items-center">

                    <i className="fa fa-angle-left fa-2x  left-8 top-1 hover:text-cosmic-primary-color" onClick={() => {
                        if (currentMonth !== months[0]) {
                            setCurrentMonth(months[months.findIndex((value) => {
                                return value === currentMonth
                            }) - 1])
                        }
                    }}></i>

                    <div className=" inline-flex p-2 w-[200px]  justify-center">

                        <p className="font-bold text-cosmic-primary-color">{currentMonth}</p>
                    </div>


                    <i className="fa fa-angle-right fa-2x right-8 top-1 hover:text-cosmic-primary-color" onClick={() => {
                        if (currentMonth !== months[months.length - 1]) {
                            setCurrentMonth(months[months.findIndex((value) => {
                                return value === currentMonth
                            }) + 1])
                        }
                    }}></i>


                </div>

            </div>

            <div className="w-full inline-flex justify-evenly">



            </div>

            <div className="grid grid-cols-7">

                <div className="col-span-7 grid grid-cols-7 gap-2">

                    {
                        days.length > 0 && days.map((day, index) => (

                            <div key={index} className="" >
                                <p className={` ${(index === 0 || index === days.length - 1) ? 'bg-cosmic-color-warning-color hover:text-cosmic-color-warning-color hover:bg-white' : 'bg-cosmic-primary-color'} xs:w-[32px]  w-[48px]  p-1 md:m-1 text-center text-white rounded-md xs:text-[10px]`}>{day}</p>

                            </div>

                        ))
                    }


                </div>

                <div className="col-span-7 grid grid-cols-7 gap-3 mt-4">

                    {
                        daysInMonth && new Array(daysInMonth).fill(0).map((_, index) => (
                            (index === 0) && <p key={index} className=" xs:w-[32px]  cursor-default hover:border hover:border-cosmic-color-lightBlue   w-[50px]  p-1 md:m-1 text-center  rounded-md xs:text-[10px]" style={{ gridColumn: firstDay }} onClick={() => {

                                setSelectedDay(index + 1)
                            }}>{index + 1}</p> ||
                            (index + 1 === selectedDay) && <p key={index} className=" xs:w-[32px] cursor-default hover:border hover:border-cosmic-color-lightBlue   border border-cosmic-color-lightBlue  w-[48px] p-1 md:m-1 text-center  rounded-md xs:text-[10px]" onClick={() => {
                                setSelectedDay(index + 1)
                            }}>{index + 1}</p> || <p key={index} className="xs:w-[32px]  cursor-default hover:border hover:border-cosmic-color-lightBlue  w-[48px] p-1 md:m-1 text-center  rounded-md xs:text-[10px]" onClick={() => {
                                setSelectedDay(index + 1)
                            }}>{index + 1}</p>

                        ))
                    }




                </div>




            </div>

            <div className="w-full flex justify-end space-x-4 text-cosmic-primary-color mt-2 cursor-default">
                <p className="" onClick={() => {

                    let customYears: number[] = []
                    let customMonths: string[] = []
                    for (let i = startYear; i <= endYear; i++) {
                        customYears.push(i)
                    }

                    setYears(customYears.reverse())
                    setCurrentYear(dayjs().year())
                    for (let i = 0; i < 12; i++) {
                        customMonths.push(dayjs().month(i).format('MMMM'))
                    }
                    setMonths(customMonths)
                    setCurrentMonth(dayjs().format('MMMM'))

                    let shortD = []
                    for (let i = 0; i < 7; i++) {
                        shortD.push(dayjs().day(i).format('ddd'))
                    }
                    setDays(shortD)

                    if (selectRef.current && currentYear) {
                        selectRef.current.value = currentYear.toString()

                    }
                }}>Reset</p>
                <p onClick={() => {
                    let age = Number(dayjs().format('YYYY')) - currentYear!!
                    const day = dayjs().format('D')
                    const month = months.findIndex((item) => {
                        return item === currentMonth
                    })

                    if (month > Number(dayjs().month())) {
                        age -= 1
                    }


                    if ((month === Number(dayjs().month())) && selectedDay < Number(day)) {
                        age -= 1
                    }





                    props.onDateSelected(age, selectedDate!!)
                }}>OK</p>

            </div>



        </div>




    </div>
}


export default CustomCalender