import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar";
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile";
import Faq from "../components/faq";
import { faqTemp } from "../utils/faq.temp";

const Faqs = () => {
  return (
    <div>
      <DoctorHomeNavBar title="FAQs" />
      <DoctorNavBarMobile title="FAQs" />
      <div className="flex flex-col p-4">
        {faqTemp.map((faq, index) => (
          <Faq {...faq} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
