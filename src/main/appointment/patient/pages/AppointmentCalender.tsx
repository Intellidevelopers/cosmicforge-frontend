import { useEffect, useState } from "react";
import dayjs from "dayjs";

interface AppointmentCalenderProps {
  onDateSelected: (dateSelected: string) => void;
}

const AppointmentCalender = ({ onDateSelected }: AppointmentCalenderProps) => {
  const [firstDay, setFirstDay] = useState<number>();
  const [days, setDays] = useState<string[]>([]);
  const [, setYears] = useState<number[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = useState<string>();
  const [daysInMonth, setDaysInMonth] = useState<number>();
  const [currentYear, setCurrentYear] = useState<number>();
  const [, setSelectedDate] = useState<string>();
  const [selectedDay, setSelectedDay] = useState<number>(
    Number(dayjs().format("D")),
  );
  // const selectRef: MutableRefObject<HTMLSelectElement | null> = useRef(null);
  // const [closeCalender, setCloseCalender] = useState<boolean>(true);

  const startYear = dayjs().year() - 50;
  const endYear = dayjs().year();
  /*
        useEffect(() => {
            setCloseCalender(props.setCalenderState);
        }, [props.setCalenderState]);
    */
  useEffect(() => {
    const customYears: number[] = [];
    const customMonths: string[] = [];
    for (let i = startYear; i <= endYear; i++) {
      customYears.push(i);
    }

    setYears(customYears.reverse());
    setCurrentYear(dayjs().year());
    for (let i = 0; i < 12; i++) {
      customMonths.push(dayjs().month(i).format("MMMM"));
    }
    setMonths(customMonths);
    setCurrentMonth(dayjs().format("MMMM"));

    let shortD = [];
    for (let i = 0; i < 7; i++) {
      shortD.push(dayjs().day(i).format("ddd"));
    }
    setDays(shortD);
  }, []);

  useEffect(() => {
    const numOfDays = dayjs(
      `${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`,
      "YYYY-MM",
    ).daysInMonth();
    const date = dayjs(
      `${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`,
      "YYYY-MM",
    ).date(1);
    setDaysInMonth(numOfDays);
    setFirstDay(date.day() + 1);

    setSelectedDate(
      selectedDay
        .toString()
        .concat(getDaySuffice(selectedDay))
        .concat(" ")
        .concat(
          dayjs(
            `${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`,
            "YYYY-MM",
          ).format("MMMM"),
        )
        .concat("  ")
        .concat(dayjs().year().toString()),
    );

    onDateSelected(
      dayjs(
        `${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}-${selectedDay}`,
        "YYYY-MM-DD",
      )
        .format("dddd")
        .concat(" ")
        .concat(selectedDay.toString())
        .concat(getDaySuffice(selectedDay))
        .concat(" ")
        .concat(
          dayjs(
            `${currentYear}-${months.findIndex((value) => value === currentMonth) + 1}`,
            "YYYY-MM",
          ).format("MMMM"),
        )
        .concat("  ")
        .concat(dayjs().year().toString()),
    );
  }, [currentMonth, currentYear, selectedDay]);

  const getDaySuffice = (day: number) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }

    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div
      className={`  font-poppins w-full h-fit flex justify-center z-[100px]`}
    >
      <div className="w-full   p-4">
        <div className="w-full flex mt-2 md:m-10">
          <div className="w-full flex  justify-center place-items-center relative ">
            <i
              className="fa fa-angle-left fa-2x top-1 hover:text-cosmic-primary-color text-[24px] "
              onClick={() => {
                if (currentMonth !== months[0]) {
                  setCurrentMonth(
                    months[
                      months.findIndex((value) => value === currentMonth) - 1
                    ],
                  );
                }
              }}
            ></i>

            <div className="inline-flex p-2 w-[300px] justify-center">
              <p className="font-bold text-cosmic-primary-color">
                {currentMonth}
              </p>
            </div>

            <i
              className="fa fa-angle-right fa-2x right-4 top-1 hover:text-cosmic-primary-color  text-[24px] "
              onClick={() => {
                if (currentMonth !== months[months.length - 1]) {
                  setCurrentMonth(
                    months[
                      months.findIndex((value) => value === currentMonth) + 1
                    ],
                  );
                }
              }}
            ></i>
          </div>
        </div>

        <div className="w-full inline-flex justify-evenly"></div>

        <div className="grid grid-cols-7">
          <div className="col-span-7 grid grid-cols-7 gap-2 ">
            {days.length > 0 &&
              days.map((day, index) => (
                <div
                  key={index}
                  className={`${index === 0 || index === days.length - 1 ? "bg-cosmic-color-warning-color hover:text-cosmic-color-warning-color hover:bg-white" : "bg-cosmic-primary-color"} xs:w-[32px] w-[95%] h-[50px] p-1 md:m-1 text-center text-white rounded-md xs:text-[10px] flex justify-center place-items-center`}
                >
                  <p>{day}</p>
                </div>
              ))}
          </div>

          <div className="col-span-7 grid grid-cols-7 gap-3 mt-4">
            {daysInMonth &&
              new Array(daysInMonth).fill(0).map(
                (_, index) =>
                  (index === 0 && (
                    <p
                      key={index}
                      className={`${selectedDay === index + 1 && " border-cosmic-color-lightBlue border"}   xs:w-[32px] cursor-default hover:border hover:border-cosmic-color-lightBlue w-[95%]  h-[50px] p-1 md:m-1 text-center rounded-md xs:text-[10px] flex justify-center place-items-center `}
                      style={{ gridColumn: firstDay }}
                      onClick={() => setSelectedDay(index + 1)}
                    >
                      {index + 1}
                    </p>
                  )) ||
                  (index + 1 === selectedDay && (
                    <p
                      key={index}
                      className="xs:w-[32px] cursor-default hover:border hover:border-cosmic-color-lightBlue border border-cosmic-color-lightBlue w-[95%]  h-[50px] p-1 md:m-1 text-center rounded-md xs:text-[10px]  flex justify-center place-items-center"
                      onClick={() => setSelectedDay(index + 1)}
                    >
                      {index + 1}
                    </p>
                  )) || (
                    <p
                      key={index}
                      className="xs:w-[32px] cursor-default hover:border hover:border-cosmic-color-lightBlue w-[90%] h-[50px] p-1 md:m-1 text-center rounded-md xs:text-[10px] flex justify-center place-items-center"
                      onClick={() => setSelectedDay(index + 1)}
                    >
                      {index + 1}
                    </p>
                  ),
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalender;
