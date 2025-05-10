import logo from "../../../../assets/logo/logo_comsic_splash.svg";
import fbIcon from "../../../../assets/icons/facebookIcon.svg";
import instalIcon from "../../../../assets/icons/instagramIcon.svg";
import youtubeIcon from "../../../../assets/icons/playstoreIcon.svg";
import linkdin from "../../../../assets/icons/linkendIcon.svg";
import twitterIcon from "../../../../assets/icons/XIcon.png";
import location from "../../../../assets/icons/cosmic-location-icon.svg";
import email from "../../../../assets/icons/cosmic-email-icon.svg";
import { FaPhoneAlt } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="footer_bg">
      <div className="max-w-[80%] mx-auto grid grid-cols-4 items-start gap-0 border-b border-white pb-4">
        {/* logo element */}
        <div className="logo_info flex flex-col justify-between gap-[150px]">
          <div>
            <img src={logo} alt="" className="w-64" />
          </div>
          <div className="flex gap-4 items-center">
            <img src={fbIcon} className="w-[32px] cursor-pointer" />
            <img src={instalIcon} className="w-[32px] cursor-pointer" />
            <img src={youtubeIcon} className="w-[32px] cursor-pointer" />
            <img src={linkdin} className="w-[32px] cursor-pointer" />
            <img src={twitterIcon} className="w-[32px] cursor-pointer" />
          </div>
        </div>
        {/* footer links */}
        <div className="footer_links text-white ml-8">
          <p className="w-fit font-extrabold">Quick links</p>
          <div className="flex flex-col gap-4 font-light mt-8 w-fit">
            <p>Home</p>
            <p>About us</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Blog </p>
            <p>Shop</p>
            <p>Forum</p>
            <p>Promotion</p>
          </div>
        </div>
        {/* footer links */}
        <div className="footer_links text-white">
          <p className="w-fit font-extrabold">Legal</p>
          <div className="flex flex-col gap-4 font-light mt-8 w-fit">
            <p>Privacy Policy</p>
            <p>Terms & Conditions us</p>
          </div>
        </div>
        {/* other footer links */}
        <div className="footer_links text-white">
          <p className="w-fit font-extrabold capitalize">Contact Us</p>
          <div className="flex flex-col gap-4 font-light mt-8 md:w-full ">
            <div className="flex gap-2">
              <img src={location} className="w-[20px] h-[20px]" />
              <p>2118, Thornbridge, Syracruse Connecticut 35624</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <img src={email} className="w-[20px] h-[20px]" />
              <p className="text-sm">cosmicforge@gmail.com </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <p>+234-907-118-1860</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights_socials max-w-[80%] mx-auto flex justify-center items-center py-4 text-white text-sm">
        <p>Copyright Cosmicforge Health Net </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
