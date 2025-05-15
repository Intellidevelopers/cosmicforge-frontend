import { useEffect } from "react";
import Footer from "../pages/components/Footer";
import aboutUsBg from "../../../assets/HomeImg/aboutUs.png";
import Services from "../../../assets/HomeImg/Services.svg";
import Services2 from "../../../assets/HomeImg/Services2.svg";
import Services3 from "../../../assets/HomeImg/Services3.svg";

import { useNavigate } from "react-router-dom";
function AboutUs() {
  // const { state } = useLocation();
  const navigate = useNavigate();
  // const data: {
  //   title: string;
  //   bodyText: string;
  //   backgroundImage: string;
  //   relatedPath: string;
  // } = state?.department!!;

  useEffect(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <div className="w-full font-poppins ">
      <div className="w-full h-fit relative ">
        <img
          src={aboutUsBg}
          alt="bg-image"
          className="w-full md:min-h-[200px] object-cover h-[450px] bg-black bg-opacity-70"
        />
        <div
          className="cursor-pointer absolute bottom-8 left-8 flex gap-2 justify-center place-items-center text-white bg-cosmic-white-light-0.2 p-2"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa fa-arrow-left " />
          <p>Go Back</p>
        </div>
      </div>
      <div className="w-full p-24">
        <div className="flex gap-4">
          <div className="w-[50%]">
            <p className="font-extrabold text-[24px] md:text-[35px]">
              About Us
            </p>
            <p className="font-light leading-10">
              CosmicForge HealthNet Limited is a visionary healthcare technology
              company, poised to redefine healthcare delivery in Africa and set
              a new global standard for digital health innovation. With a deep
              commitment to addressing the critical healthcare disparities that
              plague the continent, CosmicForge HealthNet is creating a
              world-class telemedicine platform that aims to democratize access
              to healthcare services. Our platform is built to connect patients
              with a diverse network of healthcare professionals, ranging from
              local doctors to internationally recognized specialists, ensuring
              that geographical boundaries no longer limit the quality of
              medical care one can receive. In a region where healthcare
              infrastructure is often inadequate, particularly in rural and
              underserved areas, CosmicForge HealthNet is stepping in to fill
              this void by delivering top-tier medical expertise through digital
              channels. From virtual consultations to remote diagnostics, and
              advanced AI-powered tools to integrated IoT health monitoring, the
              platform is designed to meet the most pressing healthcare needs of
              African populations. Our approach is both patientcentric and
              provider-friendly, offering an intuitive interface that allows for
              seamless interaction between users of varying technological
              proficiency and healthcare providers who are seeking more
              efficient ways to manage their patient load. However, CosmicForge
              HealthNet’s ambitions do not stop at simply providing a
              telemedicine service. We are creating an entire ecosystem that
              incorporates blockchain for secure medical records, augmented
              reality (AR) for real-time remote assistance, virtual reality (VR)
              for therapy, and comprehensive data analytics to drive continuous
              improvement in patient outcomes. By doing so, CosmicForge
              HealthNet is transforming how healthcare is accessed, delivered,
              and experienced. As we launch our platform in Nigeria and scale
              across Africa, we envision a future where healthcare is
              accessible, affordable, and effective for every individual. Our
              focus is not only on resolving immediate healthcare needs but also
              on building a sustainable and scalable platform that will evolve
              with the changing demands of healthcare, both regionally and
              globally. For investors and partners, CosmicForge HealthNet offers
              an unparalleled opportunity to be at the forefront of a healthcare
              revolution that is poised to reshape the future of medicine in
              emerging markets. With its advanced technological foundation,
              proven need for innovation, and commitment to ethical healthcare
              practices, the company is well-positioned for exponential growth
              and significant social impact. Mission: The mission of CosmicForge
              HealthNet Limited is to break down barriers to healthcare access
              by developing and implementing cutting-edge technologies that make
              high-quality medical care affordable and accessible to everyone,
              regardless of their location or socio-economic status. We aim to
              create a seamless, digital healthcare ecosystem that empowers
              patients with the ability to control their healthcare journey,
              while also providing healthcare professionals with the tools they
              need to deliver effective and efficient care. At its core,
              CosmicForge HealthNet is about healthcare equity. Our telemedicine
              platform is built to ensure that people in remote villages, urban
              centers, and everywhere in between can access the same level of
              medical expertise, whether it’s for routine consultations or
              critical, life-saving diagnostics. We are particularly focused on
              empowering under-resourced regions in Africa, where inadequate
              healthcare infrastructure has led to preventable illnesses and a
              high rate of mortality from treatable conditions. CosmicForge
              HealthNet also serves as a bridge between African healthcare
              providers and global medical experts, facilitating collaboration
              across borders to provide specialized care, second opinions, and
              advanced treatments. Our platform allows local healthcare
              professionals to collaborate with international experts, ensuring
              patients benefit from the best possible care without the need for
              costly and time-consuming travel. Beyond providing healthcare
              access, we also aim to drive innovation in medical technology by
              integrating AI, data analytics, AR, VR, and blockchain into our
              platform. This blend of advanced technologies enables healthcare
              providers to make faster, more accurate diagnoses, track patient
              progress in real-time, and deliver personalized treatments that
              enhance overall patient outcomes. Finally, CosmicForge HealthNet
              is deeply committed to fostering sustainable growth in Africa’s
              healthcare sector by developing scalable solutions that can adapt
              to the region’s evolving needs. Through strategic partnerships
              with governments, healthcare institutions, non-profits, and
              private entities, we aim to create lasting social impact while
              ensuring long-term profitability. Vision: CosmicForge HealthNet
              Limited envisions a world where high-quality healthcare is a
              universal right, not a privilege. Our vision is to transform
              healthcare delivery by removing the traditional barriers to
              healthcare access and leveraging technology to provide affordable,
              equitable, and effective medical services. We believe that
              everyone, regardless of their geographical location,
              socio-economic background, or technological literacy, should have
              access to the best medical care available. Our long-term goal is
              to revolutionize the healthcare landscape in Africa by developing
              a telemedicine platform that can serve as a model for other
              emerging markets across the globe. We want to establish a
              healthcare system that is: • Accessible: By ensuring that every
              individual, whether in a remote village or an urban center, can
              access medical consultations, diagnostic services, and treatment
              options with ease. • Affordable: By leveraging technology to
              reduce the cost of healthcare delivery, we aim to bring
              world-class medical care within reach of even the most financially
              disadvantaged communities. • Inclusive: Our platform is designed
              to cater to all demographics, ensuring that individuals of varying
              ages, educational backgrounds, and technical proficiency can
              engage with our services with ease. • Innovative: As we continue
              to evolve, we will incorporate emerging technologies such as AI,
              IoT, and blockchain to ensure that our platform remains at the
              cutting edge of healthcare delivery. CosmicForge HealthNet is also
              deeply committed to empowering healthcare professionals by
              providing them with the tools and resources they need to improve
              the quality of care they deliver. By fostering collaboration
              between local healthcare providers and international specialists,
              we are creating an ecosystem where knowledge is shared, skills are
              enhanced, and patient care is improved. We envision a Pan-African
              healthcare network that is deeply connected, both technologically
              and professionally. Our platform will create opportunities for
              healthcare professionals across Africa to collaborate, learn from
              global experts, and deliver better outcomes for their patients.
              Furthermore, as we expand globally, we aim to foster cross-border
              collaborations that enhance the overall standard of healthcare
              across the continent and beyond. CosmicForge HealthNet’s vision is
              not just about healthcare; it’s about health transformation—the
              transformation of communities, regions, and ultimately, the world,
              through accessible, innovative, and equitable healthcare. We
              strive to be the catalyst for a new era in healthcare where
              technology, expertise, and empathy combine to create a healthier,
              more connected world.
            </p>
          </div>
          <img src={aboutUsBg} alt="" className="w-[50%] h-[100%]" />
        </div>

        <div></div>
        <div className="mt-24">
          {/* <hr /> */}
          <div className="flex w-full items-center justify-center mt-4 gap-4">
            <div className="border flex flex-col items-center p-10 px-20 rounded-sm gap-3">
              <img src={Services} alt="" />
              <h1 className="text-[#272EA7] text-[30px] font-bold">5k</h1>
              <p>Sellers active on our platform</p>
            </div>
            <div className="border flex flex-col items-center p-10 px-20 rounded-sm gap-3">
              <img src={Services2} alt="" />
              <h1 className="text-[#272EA7] text-[30px] font-bold">7k</h1>
              <p>Doctors Active on our site</p>
            </div>
            <div className="border flex flex-col items-center p-10 px-20 rounded-sm gap-3">
              <img src={Services3} alt="" />
              <h1 className="text-[#272EA7] text-[30px] font-bold">4k</h1>
              <p>Patients Active on our site</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
