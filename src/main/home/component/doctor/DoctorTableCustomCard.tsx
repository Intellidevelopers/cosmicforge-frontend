

interface DoctorTableCustomCard {
    scrollWidth: number,
    patientName: string,
    patientProfile: string,
    appointmentmentTime: string,
    appointmentDate: string,
    patientId: string
    onStartSession: (details: {
        patientName: string,
        patientProfile: string, patientId: string
    }) => void
}


const DoctorTableCustomCard = ({ scrollWidth, appointmentDate, appointmentmentTime, patientName, patientId, patientProfile, onStartSession }: DoctorTableCustomCard



) => {


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

    const date = new Date()

    const time = appointmentmentTime?.split('-')[0].charAt(0)

    const secondTime = appointmentmentTime?.split('-')[1].charAt(0)

    const currentHour = date.toLocaleTimeString('en-Us', {
        hour12: true
    }).split(':')[0]







    const monthNumber = date.getDate()

    const dayInWeek = date.toLocaleString('en-Us', {
        weekday: 'long'
    })

    const monthName = date.toLocaleString('en-Us', {
        month: 'long'
    })
    const year = date.getFullYear()


    const customDateString = dayInWeek.concat(' ').concat(monthNumber.toString().concat(getDaySuffice(monthNumber))).concat(' ').concat(monthName).concat('  ').concat(year.toString())



    return <div>
        <div className='w-full inline-flex   
     mb-3 cursor-default md:hover:border md:hover:border-cosmic-primary-color rounded-full justify-evenly'     onClick={() => {


                if ((customDateString === appointmentDate && (time === currentHour || currentHour === secondTime))) {
                    onStartSession({ patientName, patientProfile, patientId })

                }
            }}>

            <div className=" min-w-[200px]  flex gap-2  m-2 ">
                <img alt='image' className='w-[30px] h-[30px] rounded-full place-items-center justify-center' src={patientProfile} />
                <p className='text-[14px]' >{patientName}</p>
            </div>
            <p className="min-w-[120px]  m-2 ">Female</p>
            <p className="min-w-[120px]   m-2  ">{appointmentDate}</p>
            <p className="min-w-[100px]   m-2  ">{appointmentmentTime}</p>
            {
                (customDateString === appointmentDate && (time === currentHour || currentHour === secondTime)) && <i className="fa fa-dot-circle text-blue-600 animate-pulse mt-3" />
            }




        </div>
        <div className={` h-[1px] border md:w-full`} style={{
            width: `${scrollWidth}px`


        }}></div>
    </div>
}


export default DoctorTableCustomCard