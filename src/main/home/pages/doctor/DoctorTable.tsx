import { useMemo, useState } from "react";

import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";

enum AppointmentsTypes {
  upcomming = "Upcomming Appointments",
  past = "Past Appointments",
  cancelled = "Cancelled Appointments",
}

interface DoctorInterfaceProps {

  onAppointmentClicked?: (
    data: {
      doctorImage: string;
      doctorName: string;
      lastMessageTime: string;
      numberOfUnreadMessages: number;
      messageType: string;
      messageRead: boolean;
      message: string | null;
      details: {
        patientId: string;
        profilePicture?: string;
      };
    },
    appointmentId: string
  ) => void;
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

const DoctorTable = ({ onAppointmentClicked }: DoctorInterfaceProps) => {

  const [appointmentTypeSelected, setAppoinmentTypeSelected] = useState<
    "upcoming" | "past" | "cancelled"
  >("upcoming");

  const [activeAppointment, setActiveAppointment] = useState<string>(
    AppointmentsTypes.upcomming
  );

  const appoinmentsState = useSelector(
    (state: RootReducer) => state.appointments.appointments
  );

  const [appoinments, setAppointments] = useState<
    | [
        {
          _id?: string;
          appointmentDate: string;
          appointmentStatus: string;
          appointmentTime: string;
          appointmentType: string;
          medicalPersonelID: {
            fullName: string;
            lastName: string;
            _id: string;
          } | null;
          patientID: {
            fullName: string;
            lastName: string;
            _id: string;
          } | null;

          patientDetails: {
            profilePicture: string;
            vitalSigns: {
              gender: string;
            };
          };
          medicalPersonelDetails: {
            profilePicture: string | undefined;
            department: string;
            currentClinic: string;
            specializationTitle: string;
            workAddress: string;
          };
          payment: {
            cardFee: number;
            cardType: string;
            consultationFee: string;
            paymentReference: string;
            paymentStatus: string;
            total: number;
            vat: string;
          };
        }
      ]
    | null
  >(null);


  

  const date = new Date();

  let validateDate = (appointmentmentTime: string, appointmentDate: string) => {

    const appoinmentStartTime = appointmentmentTime?.split("-")[0];

    const appoinmentEndTime = appointmentmentTime?.split("-")[1];

    const appoinmentDay = appointmentDate?.split(" ")[1].replace(/[a-z]/g, "");

    const appoinmentMonth = appointmentDate.split(" ")[2];

    const currentMonth = date.toLocaleDateString("en-Us", {
      month: "long",
    });


    const dayInWeek = date.toLocaleString("en-Us", {
      day: "numeric",
    });


     const startTimeMeridian =appoinmentStartTime.split(":")[1].replace(/[0-9]/g, '').toLowerCase()

      const endTimeMeridian =appoinmentEndTime.split(":")[1].replace(/[0-9]/g, '').toLowerCase()

      const startT = new Date()

startT.setHours(startTimeMeridian==='pm'?timeUtc.get(Number(appoinmentStartTime.split(':')[0]))!!:Number(appoinmentStartTime.split(':')[0]),Number(appoinmentStartTime.split(':')[1].replace(/[a-z A-Z]/g,'')),0,0)




const startE= new Date()



startE.setHours(endTimeMeridian==='pm'?timeUtc.get(Number(appoinmentStartTime.split(':')[0]))!!:Number(appoinmentEndTime.split(':')[0]),Number(appoinmentEndTime.split(':')[1].replace(/[a-z A-Z]/g,'')))
date.setSeconds(0)


         
    return  dayInWeek === appoinmentDay   && currentMonth === appoinmentMonth &&  (date.getTime() >= startT.getTime() && date.getTime()<=startE.getTime())  

    

     
  };

  useMemo(() => {
    if (appoinmentsState) {
      const bookedAppointment = appoinmentsState.filter((appointment) => {
        return appointment.appointmentStatus === "booked";
      });

      setAppointments(
        bookedAppointment as
          | [
              {
                _id?: string;
                appointmentDate: string;
                appointmentStatus: string;
                appointmentTime: string;
                appointmentType: string;
                medicalPersonelID: {
                  fullName: string;
                  lastName: string;
                  _id: string;
                } | null;
                patientID: {
                  fullName: string;
                  lastName: string;
                  _id: string;
                } | null;

                patientDetails: {
                  profilePicture: string;
                  vitalSigns: {
                    gender: string;
                  };
                };
                medicalPersonelDetails: {
                  profilePicture: string | undefined;
                  department: string;
                  currentClinic: string;
                  specializationTitle: string;
                  workAddress: string;
                };
                payment: {
                  cardFee: number;
                  cardType: string;
                  consultationFee: string;
                  paymentReference: string;
                  paymentStatus: string;
                  total: number;
                  vat: string;
                };
              }
            ]
          | null
      );
    }
  }, [appoinmentsState]);




  return (
    <div className="w-full  overflow-hidden  rounded-md bg-white  p-8 relative pb-20  ">

      <div className="grid grid-cols-6 p-4 sticky top-0  z-[100]">
        <div className="w-full col-span-4 md:col-span-5">
          <p className="font-bold" onClick={() => {}}>
            {activeAppointment}
          </p>
        </div>

        <div className="w-full col-span-2 md:col-span-1 text-end">
          <select
            className="border rounded-md"
            value={appointmentTypeSelected}
            onChange={(e) => {
              setAppoinmentTypeSelected(
                e.target.value!! as "upcoming" | "past" | "cancelled"
              );

              const type = e.target.value!! as
                | "upcoming"
                | "past"
                | "cancelled";

              setActiveAppointment(
                AppointmentsTypes[type as keyof typeof AppointmentsTypes]
              );

              if (
                type === "upcoming" &&
                appoinmentsState &&
                appoinmentsState.length > 0
              ) {

                const filteredArray = appoinmentsState.filter((appoinment) => {
                  return appoinment.appointmentStatus === "booked";
                });
              
                if (filteredArray.length > 0){
                  setAppointments(
                    filteredArray as
                      | [
                          {
                            appointmentDate: string;
                            appointmentStatus: string;
                            appointmentTime: string;
                            appointmentType: string;
                            medicalPersonelID: {
                              fullName: string;
                              lastName: string;
                              _id: string;
                            } | null;
                            patientID: {
                              fullName: string;
                              lastName: string;
                              _id: string;
                            } | null;

                            patientDetails: {
                              profilePicture: string;
                              vitalSigns: {
                                gender: string;
                              };
                            };
                            medicalPersonelDetails: {
                              profilePicture: string | undefined;
                              department: string;
                              currentClinic: string;
                              specializationTitle: string;
                              workAddress: string;
                            };
                            payment: {
                              cardFee: number;
                              cardType: string;
                              consultationFee: string;
                              paymentReference: string;
                              paymentStatus: string;
                              total: number;
                              vat: string;
                            };
                          }
                        ]
                      | null
                  );
                }
                
                else setAppointments(null);

                return;
              }



              if (type === "past" && appoinmentsState) {
                const filteredArray = appoinmentsState.filter((appoinment) => {
                  return appoinment.appointmentStatus === "completed";
                });

                if (filteredArray.length > 0)
                  setAppointments(
                    filteredArray as
                      | [
                          {
                            appointmentDate: string;
                            appointmentStatus: string;
                            appointmentTime: string;
                            appointmentType: string;
                            medicalPersonelID: {
                              fullName: string;
                              lastName: string;
                              _id: string;
                            } | null;
                            patientID: {
                              fullName: string;
                              lastName: string;
                              _id: string;
                            } | null;

                            patientDetails: {
                              profilePicture: string;
                              vitalSigns: {
                                gender: string;
                              };
                            };
                            medicalPersonelDetails: {
                              profilePicture: string | undefined;
                              department: string;
                              currentClinic: string;
                              specializationTitle: string;
                              workAddress: string;
                            };
                            payment: {
                              cardFee: number;
                              cardType: string;
                              consultationFee: string;
                              paymentReference: string;
                              paymentStatus: string;
                              total: number;
                              vat: string;
                            };
                          }
                        ]
                      | null
                  );
                else setAppointments(null);

                return;
              }

              if (type === "cancelled" && appoinmentsState) {
                const filteredArray = appoinmentsState.filter((appoinment) => {
                  return appoinment.appointmentStatus === "cancelled";
                });

                if (filteredArray.length > 0)
                  setAppointments(
                    filteredArray as
                      | [
                          {
                            appointmentDate: string;
                            appointmentStatus: string;
                            appointmentTime: string;
                            appointmentType: string;
                            medicalPersonelID: {
                              fullName: string;
                              lastName: string;
                              _id: string;
                            } | null;
                            patientID: {
                              fullName: string;
                              lastName: string;
                              _id: string;
                            } | null;

                            patientDetails: {
                              profilePicture: string;
                              vitalSigns: {
                                gender: string;
                              };
                            };
                            medicalPersonelDetails: {
                              profilePicture: string | undefined;
                              department: string;
                              currentClinic: string;
                              specializationTitle: string;
                              workAddress: string;
                            };
                            payment: {
                              cardFee: number;
                              cardType: string;
                              consultationFee: string;
                              paymentReference: string;
                              paymentStatus: string;
                              total: number;
                              vat: string;
                            };
                          }
                        ]
                      | null
                  );
                else setAppointments(null);

                return;
              }
            }}
          >
            <option className="text-end">upcoming</option>
            <option className="text-end">cancelled</option>
            <option className="text-end">past</option>
          </select>
        </div>
      </div>



      <table className="w-full p-10 relative  mb-20 ">
        <thead className="mb-8 relative">
          <tr className="border-b-[1px] relative border-b-black/30 font-poppins font-light  cursor-default">
            <th className="font-poppins font-light min-w-[15%] text-start ps-5">
              Name
            </th>
            <th className="font-poppins font-light">Gender</th>
            <th className="font-poppins font-light">Date</th>
            <th className="font-poppins font-light">Time</th>
            <th className="font-poppins font-light">{""}</th>
          </tr>
        </thead>

        
        <tbody className="relative ">
          {appoinments &&
            appoinments.length > 0 &&
            appoinments.map((appointment, index) => (
              <tr
                className="border-b-[1px] relative border-b-black/30 font-poppins font-light  cursor-default "
                key={index}
                onClick={() => {
                  if (
                    appointmentTypeSelected === "upcoming" &&
                    validateDate(
                      appointment?.appointmentTime,
                      appointment?.appointmentDate
                    )
                  )
                    onAppointmentClicked?.(
                      {
                        doctorImage: appointment.patientDetails.profilePicture,
                        doctorName: appointment.patientID?.lastName
                          .concat(" ")
                          .concat(appointment?.patientID?.fullName)!!,
                        lastMessageTime: "",
                        numberOfUnreadMessages: 0,
                        messageType: "",
                        messageRead: false,
                        message: "",
                        details: {
                          patientId: appointment.patientID?._id!!,
                          profilePicture:
                            appointment.patientDetails.profilePicture,
                        },
                      },
                      appointment._id ?? ""
                    );
                }}
              >
                <td>
                  <div className="flex  place-items-center gap-4">
                    <img
                      className="bg-black bg-opacity-20 rounded-full w-[40px] h-[40px]"
                      src={appointment?.patientDetails.profilePicture ?? "/"}
                    />
                    {appointment?.patientID?.fullName}
                  </div>
                </td>

                <td>{appointment?.patientDetails?.vitalSigns?.gender}</td>
                <td>{appointment?.appointmentDate}</td>
                <td>{appointment?.appointmentTime}</td>
                <td>
                  {" "}
                  {validateDate(
                    appointment?.appointmentTime,
                    appointment?.appointmentDate
                  ) && (
                    <i className="fa fa-dot-circle text-blue-600 animate-pulse mt-3" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {!appoinments && (
        <p className="w-full text-center mt-8">No Appointment yet</p>
      )}

      {/**
       * 
       * <div ref={scrollRef} className=' w-full overflow-x-auto '>


      <div className='w-full inline-flex   
     mb-3 cursor-default  rounded-full justify-evenly ms-4'>

        <div className=" min-w-[200px]  flex gap-2  m-2 ">
          <p className='text-[14px]' >Name</p>
        </div>
        <p className="min-w-[260px]  m-2 ">Gender</p>
        <p className="min-w-[120px]   m-2  ">Date</p>
        <p className="min-w-[100px]   m-2  ">Time</p>




      </div>

      {
        appoinments && appoinments.length <=0  && <div className='w-full flex justify-center mt-6'> <p>No appointment yet</p>  </div>
      }


      {
        /*
        appoinments && appoinments.length>0  && appoinments.map((appointment, index) => (
          <DoctorTableCustomCard appointmentId={appointment._id!!} gender={appointment?.patientDetails?.vitalSigns?.gender} appointmentDate={appointment.appointmentDate} appointmentmentTime={appointment.appointmentTime} patientName={appointment.patientID?.lastName.concat(' ').concat(appointment.patientID.fullName)!!} patientProfile={appointment.patientDetails.profilePicture} key={index} scrollWidth={scrollWidth} patientId={appointment.patientID?._id!!} onStartSession={() => {
          //  alert(details.patientName)

         
          }} />
        ))
      }










      </div>
       * 
       */}
    </div>
  );
};

export default DoctorTable;
