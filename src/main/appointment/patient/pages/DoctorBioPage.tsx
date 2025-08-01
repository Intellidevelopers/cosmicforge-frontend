import { Navigate, useLocation, useNavigate } from "react-router-dom";
//import docImage from '../../../../assets/images/doctor-image.jpeg'
//import Map from "../component/Map"

import unratedStar from "../../../../assets/icons/unrated-star.svg";

import ratedStar from "../../../../assets/icons/rated-star.svg";
import { useEffect, useState } from "react";
import Loader from "../../../generalComponents/Loader";
//import ReviewCard from "../component/ReviewCard"
//import callButton from '../../../../assets/icons/call-button.svg'
//import videoButton from '../../../../assets/icons/cosmic-video-call-button.svg'
import calender from "../../../../assets/icons/cosmic-dark-calender.svg";
import time from "../../../../assets/icons/cosmic-clock-dark.svg";
import cal from "../../../../assets/icons/home/cosmic-home-calander.svg";
import { getSpecificDoctorAppointmentById } from "../../service";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";

const timeUtc = new Map<number, number>();

timeUtc.set(1, 13);
timeUtc.set(2, 14);
timeUtc.set(3, 15);
timeUtc.set(4, 16);
timeUtc.set(5, 17);
timeUtc.set(6, 18);
timeUtc.set(7, 19);
timeUtc.set(8, 20);
timeUtc.set(9, 21);
timeUtc.set(10, 22);
timeUtc.set(11, 23);
timeUtc.set(12, 24);

const DoctorBioPage = () => {
  const navigate = useNavigate();

  const [loading] = useState<boolean>(false);

  const [loadingServerData, setLoadingServerData] = useState<boolean>(true);

  const [errorMesage] = useState<string>("");

  const { state } = useLocation();

  if (!state) {
    return <Navigate to={"/patient/find-a-specialist"} />;
  }

  const user = useSelector((state: RootReducer) => state.user.data);

  const [earliestAvailabilty, setEarliestAvailability] = useState<string>(
    "Doctor not available now.",
  );

  useEffect(() => {
    const t = setTimeout(() => {
      setLoadingServerData(false);
    }, 2000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const result = await getSpecificDoctorAppointmentById(
          user?.token!!,
          state.doctorId,
        );

        if (result.status === 200) {
          const appoinments = result.data.appointments;

          const time = state?.workingHour.time;

          // setDoctorsAppointmentDetails(appoinments)

          if (
            appoinments.length > 0 &&
            time &&
            time.split("-").length >= 1 &&
            time.split("-")[0].match(/[0-9]/g) &&
            time.split("-")[1].match(/[0-9]/g)
          ) {
            let startTime = time.split("-")[0];

            let endTime = time.split("-")[1];

            const startTimeHour = startTime.split(":")[0];
            const startTimeMin = startTime
              .split(":")[1]
              .replace(/[a-z A-Z]/g, "");

            const startTimeMeridian = startTime
              .split(":")[1]
              .replace(/[0-9]/g, "")
              .toLowerCase();

            const endTimeHour = endTime.split(":")[0];
            const endTimeMin = endTime.split(":")[1].replace(/[a-z A-Z]/g, "");

            const endTimeMeridian = endTime
              .split(":")[1]
              .replace(/[0-9]/g, "")
              .toLowerCase();

            let startFormattedTime = new Date();

            if (startTimeMeridian.trim() === "pm") {
              startFormattedTime.setHours(
                timeUtc.get(Number(startTimeHour))!!,
                startTimeMin.includes("00") ? Number(0) : Number(startTimeMin),
                0,
                0,
              );
            } else {
              startFormattedTime.setHours(
                Number(startTimeHour),
                startTimeMin.includes("00") ? Number(0) : Number(startTimeMin),
                0,
                0,
              );
            }

            let endFormattedTime = new Date();

            if (endTimeMeridian.trim() === "am") {
              let newDate = new Date();
              endFormattedTime = new Date(
                newDate.getTime() + 24 * 60 * 60 * 1000,
              );

              endFormattedTime.setHours(
                endTimeMeridian.trim() === "pm"
                  ? timeUtc.get(Number(endTimeHour))!!
                  : Number(endTimeHour),
                endTimeMin.includes("00") ? Number(0) : Number(endTimeMin),
                0,
                0,
              );
            } else {
              endFormattedTime.setHours(
                endTimeMeridian.trim() === "pm"
                  ? timeUtc.get(Number(endTimeHour))!!
                  : Number(endTimeHour),
                endTimeMin.includes("00") ? Number(0) : Number(endTimeMin),
                0,
                0,
              );
            }

            let currentTime = new Date(startFormattedTime.getTime());

            let earliestAvailabiltyFound = false;

            const date = new Date();

            let selectedDay = date.toLocaleDateString("en-Us", {
              day: "numeric",
            });

            let selectedMonth = date.toLocaleDateString("en-Us", {
              month: "long",
            });

            let selectedYear = date.getFullYear();

            while (
              currentTime <= endFormattedTime &&
              !earliestAvailabiltyFound
            ) {
              //display according to current time

              const isTimeNotFound = appoinments.find((details: any) => {
                const doctorSelectedDay = details.appointmentDate
                  .split(" ")[1]
                  .replace(/[a-z]/g, "");
                const doctorSelectedMonth =
                  details.appointmentDate.split(" ")[2];
                const doctorSelectedYear =
                  details.appointmentDate.split(" ")[4];

                if (
                  doctorSelectedDay === selectedDay &&
                  selectedMonth === doctorSelectedMonth &&
                  selectedYear === doctorSelectedYear
                ) {
                  return true;
                } else {
                  return false;
                }
              });

              if (!isTimeNotFound && date.getTime() <= currentTime.getTime()) {
                const availableTime = currentTime.toLocaleTimeString("en-US", {
                  hour12: true,
                  timeStyle: "short",
                });

                const availableDate = currentTime.toLocaleDateString("en-US", {
                  dateStyle: "full",
                });

                setEarliestAvailability(
                  availableDate.concat(" ").concat(availableTime),
                );

                earliestAvailabiltyFound = true;
                return;
              }

              // console.log(app)

              currentTime.setMinutes(currentTime.getMinutes() + 15);
            }

            // setAvailableTimeList(availableTime)
          } else if (
            time &&
            time.split("-").length >= 1 &&
            time.split("-")[0].match(/[0-9]/g) &&
            time.split("-")[1].match(/[0-9]/g)
          ) {
            let startTime = time.split("-")[0];

            let endTime = time.split("-")[1];

            const startTimeHour = startTime.split(":")[0];
            const startTimeMin = startTime
              .split(":")[1]
              .replace(/[a-z A-Z]/g, "");

            const startTimeMeridian = startTime
              .split(":")[1]
              .replace(/[0-9]/g, "")
              .toLowerCase();

            const endTimeHour = endTime.split(":")[0];
            const endTimeMin = endTime.split(":")[1].replace(/[a-z A-Z]/g, "");

            const endTimeMeridian = endTime
              .split(":")[1]
              .replace(/[0-9]/g, "")
              .toLowerCase();

            let startFormattedTime = new Date();

            if (startTimeMeridian.trim() === "pm") {
              startFormattedTime.setHours(
                timeUtc.get(Number(startTimeHour))!!,
                startTimeMin.includes("00") ? Number(0) : Number(startTimeMin),
                0,
                0,
              );
            } else {
              startFormattedTime.setHours(
                Number(startTimeHour),
                startTimeMin.includes("00") ? Number(0) : Number(startTimeMin),
                0,
                0,
              );
            }

            let endFormattedTime = new Date();

            if (endTimeMeridian.trim() === "am") {
              let newDate = new Date();
              endFormattedTime = new Date(
                newDate.getTime() + 24 * 60 * 60 * 1000,
              );

              endFormattedTime.setHours(
                endTimeMeridian.trim() === "pm"
                  ? timeUtc.get(Number(endTimeHour))!!
                  : Number(endTimeHour),
                endTimeMin.includes("00") ? Number(0) : Number(endTimeMin),
                0,
                0,
              );
            } else {
              endFormattedTime.setHours(
                endTimeMeridian.trim() === "pm"
                  ? timeUtc.get(Number(endTimeHour))!!
                  : Number(endTimeHour),
                endTimeMin.includes("00") ? Number(0) : Number(endTimeMin),
                0,
                0,
              );
            }

            let currentTime = new Date(startFormattedTime.getTime());

            let earliestAvailabiltyFound = false;

            const date = new Date();

            while (
              currentTime <= endFormattedTime &&
              !earliestAvailabiltyFound
            ) {
              //display according to current time

              if (date.getTime() <= currentTime.getTime()) {
                const availableTime = currentTime.toLocaleTimeString("en-US", {
                  hour12: true,
                  timeStyle: "short",
                });

                const availableDate = currentTime.toLocaleDateString("en-US", {
                  dateStyle: "full",
                });

                setEarliestAvailability(
                  availableDate.concat(" ").concat(availableTime),
                );
                earliestAvailabiltyFound = true;

                return;
              }

              // console.log(app)

              currentTime.setMinutes(currentTime.getMinutes() + 15);
            }
          }

          return;
        }
      } catch (error) {}
    })();
  }, []);

  return (
    <div className=" relative bg-[#F5F5F5] bg-opacity-50  cursor-default overflow-auto  font-poppins w-full p-5 overflow-x-hidden h-full ">
      <div
        className=" place-items-center gap-3 hidden md:flex "
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa fa-angle-left fa-xl" />
        <p>back</p>
      </div>

      <div className="relative w-full  flex flex-col place-items-center  p-3  ">
        <div className=" relative m-4  h-[350px]  md:h-[300px] w-full  aspect-square  border rounded-xl">
          <img
            className="w-full h-full object-cover  object-center    bg-black bg-opacity-30
  "
            src={state?.doctorImage ?? "/"}
            style={{}}
          />

          <div className="w-full h-fit md:h-[80px] absolute ps-10 bottom-0 bg-gradient-to-t from-cosmic-doc-gradient-1 to-cosmic-doc-gradient-2  bg-cosmic-light-color-call bg-opacity-90">
            <div className="w-full flex place-items-center gap-3 h-full p-2 text-white justify-between flex-wrap">
              <div>
                <p className="font-bold overflow-hidden  text-[14px] md:text-[16px]   min-w-[80px] max-w-[80px] md:max-w-fit  text-nowrap text-ellipsis">
                  Dr {state.doctorName}
                </p>
                <p className="font-bold overflow-hidden   text-[14px] md:text-[16px]   min-w-[80px] max-w-[80px] md:max-w-fit   text-nowrap text-ellipsis">
                  {state?.department}
                </p>
              </div>

              <div>
                <p className="font-bold">Patients</p>
                <p className="font-light">{state.totalPatient}</p>
              </div>

              <div>
                <p className="font-bold">Ratings</p>
                <p className="font-light"></p>
              </div>

              <div></div>

              {/**
               *  <div className=" flex gap-6">
                <div className=" h-[30px] w-[30px] bg-cosmic-doc-gradient-1 p-2 rounded-full flex justify-center place-items-center">
                  <img alt="call-btn" src={callButton} />
                </div>
  
                <div className=" h-[30px] w-[30px] bg-cosmic-doc-gradient-1 p-2 rounded-full flex justify-center place-items-center">
                  <img alt="call-btn" src={videoButton} />
                </div>
  
              </div>
               */}
            </div>
          </div>
        </div>
      </div>
      <div className="ms-3 me-3">
        <p className="font-bold">Bio</p>
        <p className="font-extralight text-justify text-pretty leading-8">
          {state?.bio}
        </p>
      </div>

      <div className="ms-3 mt-4 ">
        <p className="font-bold">Working Hours</p>

        <div>
          <div className="flex gap-2 place-items-center mt-1">
            <img alt="calender" src={calender} />
            <p className="font-light">{state?.workingHour.day}</p>
          </div>

          <div className="flex gap-2 place-items-center mt-2">
            <img alt="calender" src={time} />
            <p className="font-light">{state?.workingHour.time}</p>
          </div>
        </div>

        <div className="md-3 mt-5">
          <p className="font-bold">Pricing</p>

          <div>
            <p className="mt-2">
              Standard Consultation fee for 15mins session:
              <span className="ms-1">
                {state.currency === "NGN" ? "₦" : "$"}
                {state.pricing}
              </span>
            </p>
            <p className="mt-2">
              Standard Consultation fee for 30mins session:
              <span className="ms-1">
                {state.currency === "NGN" ? "₦" : "$"}
                {state.pricingForThirtyMins ?? 0}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/*
      <div className=" w-full   relative">
     <p className="ps-3">Location</p>
      <div className="w-full h-fit floor-map-container relative ps-2 pe-2">

      
         <Map /> 
      

      </div>
     


      <div className="bg-cosmic-map-backgroud absolute bottom-0  flex place-items-center  w-full h-[50px] font-light p-1 text-white">
        Chastain Park Hospital, Lekki, Lagos, Nigeria.
      </div>





    </div>
 */}

      <div className="w-full flex gap-5 mt-5 bg-white shadow shadow-black  p-1 relative">
        <div className="bg-cosmic-light-color-call p-1">
          <img alt="calender" src={cal} />
        </div>

        <div className="text-[12px] md:text-[14px]">
          <p>Earliest Availability</p>
          <p>{earliestAvailabilty}</p>
        </div>

        <i className="fa fa-angle-right me-2  mt-2 absolute top-2 right-1" />
      </div>

      <div className="mt-8 text-white flex gap-2">
        <div
          className="w-full bg-cosmic-primary-color text-[12px] md:text-[14px] p-2 rounded-md text-center"
          onClick={() => {
            navigate("/patient/appointment/book", {
              state: {
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
                time: state?.workingHour.time,
                currency: state.currency,
                pricingForThirtyMins: state.pricingForThirtyMins,
              },
            });
          }}
        >
          Book Appointment
        </div>

        <div className="w-full bg-cosmic-light-color-call text-[12px] md:text-[14px] p-2 rounded-md text-center">
          Send Message
        </div>
      </div>

      <div className="mt-5 ">
        <p>Rate this doctor</p>
        <p className="font-light">Share your Experience with Doctor</p>

        <div className="w-full mt-4 flex gap-5 justify-evenly">
          <img className="w-[40px] h-[40px] " src={ratedStar} />
          <img className="w-[40px] h-[40px]" src={unratedStar} />
          <img className="w-[40px] h-[40px]" src={unratedStar} />
          <img className="w-[40px] h-[40px]" src={unratedStar} />
          <img className="w-[40px] h-[40px]" src={unratedStar} />
        </div>

        <div className="w-full mt-8">
          <p>Describe your experience (optional)</p>

          <div>
            <input
              type="text"
              placeholder="enter review"
              className="border rounded-md p-2 w-full  m-2"
            />
          </div>

          <div className="w-full flex justify-center m-5">
            <p className=" bg-cosmic-primary-color text-white p-2 rounded-md">
              Submit Review
            </p>
          </div>

          <div className="w-full flex justify-center place-items-center">
            {loading && <Loader size="40px" />}
            {errorMesage && <p className="text-red-600">{errorMesage}</p>}
          </div>
        </div>

        <div className="w-full ">
          <p className="">Reviews</p>

          <div className="w-full mt-2 gap-3 flex justify-evenly">
            <div
              className="w-[50px] h-[40px]  bg-cosmic-primary-color flex justify-center place-items-center rounded-md text-white"
              onClick={() => {
                setLoadingServerData(true);

                setTimeout(() => {
                  setLoadingServerData(false);
                }, 2000);
              }}
            >
              <p>All</p>
            </div>

            <div
              className="w-[50px] h-[40px] p-1 border flex justify-center gap-1  place-items-center rounded-md "
              onClick={() => {
                setLoadingServerData(true);

                setTimeout(() => {
                  setLoadingServerData(false);
                }, 2000);
              }}
            >
              <img src={ratedStar} className="w-[20px] h-[20px]" />
              <p>1</p>
            </div>

            <div
              className="w-[50px] h-[40px] p-1  border flex justify-center gap-1  place-items-center rounded-md "
              onClick={() => {
                setLoadingServerData(true);

                setTimeout(() => {
                  setLoadingServerData(false);
                }, 2000);
              }}
            >
              <img src={ratedStar} className="w-[20px] h-[20px]" />
              <p>2</p>
            </div>

            <div
              className="w-[50px] h-[40px] border flex justify-center gap-1  place-items-center rounded-md "
              onClick={() => {
                setLoadingServerData(true);

                setTimeout(() => {
                  setLoadingServerData(false);
                }, 2000);
              }}
            >
              <img src={ratedStar} className="w-[20px] h-[20px]" />
              <p>3</p>
            </div>

            <div
              className="w-[50px] h-[40px] p-1  border flex justify-center gap-1  place-items-center rounded-md "
              onClick={() => {
                setLoadingServerData(true);

                setTimeout(() => {
                  setLoadingServerData(false);
                }, 2000);
              }}
            >
              <img src={ratedStar} className="w-[20px] h-[20px]" />
              <p>4</p>
            </div>

            <div
              className="w-[50px] h-[40px] p-1  border flex justify-center gap-1  place-items-center rounded-md "
              onClick={() => {
                setLoadingServerData(true);

                setTimeout(() => {
                  setLoadingServerData(false);
                }, 2000);
              }}
            >
              <img src={ratedStar} className="w-[20px] h-[20px]" />
              <p>5</p>
            </div>
          </div>

          <div className="mt-1 w-full  h-[500px] p-1  overflow-y-auto overflow-x-hidden">
            {loadingServerData && (
              <div className="w-full h-full flex justify-center place-items-center">
                <Loader size="80px" />
              </div>
            )}
            {
              /* !loadingServerData && new Array(10).fill(0).map((_, index) => (
               <ReviewCard key={index} clientName="Janet Opeyemi" comment="Dr. Josh Olawale was really Integral to my treatment process. I’m grateful for him." clientProfile={docImage} ratings={4} time="3sec ago" />
             ))*/

              <p>No review now.</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBioPage;
