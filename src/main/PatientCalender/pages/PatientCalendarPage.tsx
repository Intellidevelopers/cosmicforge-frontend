
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from "react-redux";
import { RootReducer } from "../../store/initStore";

/*interface PatientCalendarProps {
   // onDateSelected: (age: number, dateSelected: string) => void;
    //setCalenderState: boolean;
    appointments:string[]
}*/

const PatientCalendarPage = () => {
    const [firstDay, setFirstDay] = useState<number>();
    const [days, setDays] = useState<string[]>([]);
    const [, setYears] = useState<number[]>([]);
    const [months, setMonths] = useState<string[]>([]);
    const [currentMonth, setCurrentMonth] = useState<string>();
    const [daysInMonth, setDaysInMonth] = useState<number>();
    const [currentYear, setCurrentYear] = useState<number>();
    const [, setSelectedDate] = useState<string>();
    const [selectedDay, setSelectedDay] = useState<number>(Number(dayjs().format('D')));


    const startYear = dayjs().year() - 50;
    const endYear = dayjs().year();


    const monnths = ['January','February','March','April','May','June','July','September','October','November','December']
   

    const appointments = useSelector((state:RootReducer)=>state.appointments.appointments)

 const [custAppointments,setCustAppointment] = useState<Dayjs[]>()

 const [image,setImage] = useState<string>()
  const [date,setDate] = useState<string>()
  const [time,setTime] = useState<string>()


   
   useEffect(()=>{

    if(appointments && appointments.length>0){

        let items:Dayjs[] = []

         appointments.forEach((appoinment,_)=>{

             let date = appoinment.appointmentDate.split(' ')

             const day = date[1].replace(/^(\d+)(st|nd|th|rd)/,'$1')

             const month = monnths.indexOf(date[2])

             const year = date[4]
 
             const customDate = dayjs(`${year}-${month+1}-${day}`)
          
                 items.push(customDate)
 
            
         })

         setImage(appointments[0].medicalPersonelDetails.profilePicture)
         setDate(appointments[0].appointmentDate)
   setTime(appointments[0].appointmentTime)

         setCustAppointment((prev)=>{
              
                if(!prev){
                    return items
                }

              return prev
         })

       
        }


   },[appointments])

  
  
  
   useEffect(() => {


        


        const customYears: number[] = [];
        const customMonths: string[] = [];
        for (let i = startYear; i <= endYear; i++) {
            customYears.push(i);
        }

        setYears(customYears.reverse());
        setCurrentYear(dayjs().year());
        for (let i = 0; i < 12; i++) {
            customMonths.push(dayjs().month(i).format('MMMM'));
        }
        setMonths(customMonths);
        setCurrentMonth(dayjs().format('MMMM'));

        let shortD = [];
        for (let i = 0; i < 7; i++) {
            shortD.push(dayjs().day(i).format('ddd'));
        }
        setDays(shortD);
    }, []);

    useEffect(() => {
        const numOfDays = dayjs(`${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`, 'YYYY-MM').daysInMonth();
        const date = dayjs(`${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`, 'YYYY-MM').date(1);
        setDaysInMonth(numOfDays);
        setFirstDay(date.day() + 1);

        setSelectedDate(
            selectedDay.toString().concat(getDaySuffice(selectedDay)).concat(' ').concat(dayjs(`${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`, 'YYYY-MM').format('MMMM')).concat('  ').concat(dayjs(`${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`).format('YYYY'))
        );
    }, [currentMonth, currentYear, selectedDay]);

    const getDaySuffice = (day: number) => {
        if (day >= 11 && day <= 13) {
            return 'th';
        }

        switch (day % 10) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
        }
    };



    return (
        <div className={` mt-10 font-poppins w-full h-fit flex flex-col justify-center z-[100px]`}>
            <div className="w-full   p-4">



                <div className="w-full flex mt-2 md:m-10">
                  


                    <div className="w-full flex  justify-center place-items-center relative ">
                        <i
                            className="fa fa-angle-left fa-2x top-1 hover:text-cosmic-primary-color "
                            onClick={() => {
                                if (currentMonth !== months[0]) {
                                    setCurrentMonth(months[months.findIndex((value) => value === currentMonth) - 1]);
                                }
                            }}
                        ></i>

                        <div className="inline-flex p-2 w-[300px] justify-center">
                            <p className="font-bold text-cosmic-primary-color">{currentMonth}</p>
                        </div>
                        <i
                            className="fa fa-angle-right fa-2x right-4 top-1 hover:text-cosmic-primary-color"
                            onClick={() => {
                                if (currentMonth !== months[months.length - 1]) {
                                    setCurrentMonth(months[months.findIndex((value) => value === currentMonth) + 1]);
                                }
                            }}
                        ></i>
                    </div>
                </div>

                <div className="w-full inline-flex justify-evenly"></div>

                <div className="grid grid-cols-7">


                    <div className="col-span-7 grid grid-cols-7 gap-2">


                        {days.length > 0 && days.map((day, index) => (
                            <div key={index}>
                                <p className={`${(index === 0 || index === days.length - 1) ? 'bg-cosmic-color-warning-color hover:text-cosmic-color-warning-color hover:bg-white' : 'bg-cosmic-primary-color'} xs:w-[32px] w-[60px] p-1 md:m-1 text-center text-white rounded-md xs:text-[10px]`}>{day}</p>
                            </div>
                        ))}
                    </div>


                    <div className="col-span-7 grid grid-cols-7 gap-3 mt-4">
                        {daysInMonth && new Array(daysInMonth).fill(0).map((_, index) => (
                            (index === 0) && <p key={index} className={`${(selectedDay === index + 1) && ' border-cosmic-color-lightBlue border'}    ${  custAppointments && custAppointments.length > 0 && custAppointments.find((appointment, _) => {

                                return appointment.month(appointment.month()).format("MMMM").toString() === currentMonth && Number(appointment.format('D')) === index + 1


                            }) && ' border-cosmic-color-lightBlue border'}         xs:w-[32px] cursor-default hover:border hover:border-cosmic-color-lightBlue w-[60px] p-1 md:m-1 text-center rounded-md xs:text-[10px]`} style={{ gridColumn: firstDay }} onClick={() => setSelectedDay(index + 1)}>{index + 1}</p> ||




                            (index + 1 === selectedDay) && <p key={index} className={`${ custAppointments &&  custAppointments.length > 0 && custAppointments.find((appointment, _) => {
                                return appointment.month(appointment.month()).format("MMMM").toString() === currentMonth && Number(appointment.format('D')) === index + 1


                            }) && ' border-cosmic-color-lightBlue border'}  xs:w-[32px] cursor-default hover:border hover:border-cosmic-color-lightBlue border border-cosmic-color-lightBlue w-[60px] p-1 md:m-1 text-center rounded-md xs:text-[10px]`} onClick={() => setSelectedDay(index + 1)}>{index + 1}</p> ||




                            <p key={index} className={` ${  custAppointments &&  custAppointments.length > 0 && custAppointments.find((appointment, _) => {
                                return appointment.month(appointment.month()).format("MMMM").toString() === currentMonth && Number(appointment.format('D')) === index + 1


                            }) && ' bg-cosmic-primary-color text-white'}       xs:w-[32px] cursor-default hover:border hover:border-cosmic-color-lightBlue w-[48px] p-1 md:m-1 text-center rounded-md xs:text-[10px]`} onClick={() => setSelectedDay(index + 1)}>{index + 1}</p>
                        ))}
                    </div>
                </div>

            </div>

         {

            (appointments && (appointments.length && appointments.length >0)) ? <div className="m-4">
            <p className="font-bold">Upcoming Appointment</p>
            <div className="w-full m-2 p-3 flex gap-2 relative bg-white rounded-md shadow">
                <img className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full' alt='card-profile' src={image} />
                <div className='w-full flex flex-col gap-1 relative'>
                    <p className="w-full text-[14px] md:text-[16px] font-bold">{"Grace has an Appointment"}</p>

                    <p className='text-justify mt-2 text-[14px] md:text-[16px] font-extralight'>{date?.concat(',').concat(time!!)}</p>

                </div>
            </div>

        </div>:<p className="m-4"></p>
         }
        </div>
    );
};

export default PatientCalendarPage;


