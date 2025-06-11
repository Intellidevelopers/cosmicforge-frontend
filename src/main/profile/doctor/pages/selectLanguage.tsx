import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar";
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile";

const SelectLanguage = () => {
  return (
    <div>
      <DoctorHomeNavBar title="Language" />
      <DoctorNavBarMobile title="Language" />
      <div className="flex flex-col w-full  gap-2 p-4">
        <label htmlFor="Language" className="font-bold">
          Choose Language
        </label>
        <select
          name="Language"
          id="Language"
          className="p-4 border-2 font-bold border-black  rounded-md"
        >
          <option value="en-us">English - US</option>
          <option value="en-uk">English - UK</option>
          <option value="en-ca">English - CA</option>
        </select>
      </div>
    </div>
  );
};

export default SelectLanguage;
