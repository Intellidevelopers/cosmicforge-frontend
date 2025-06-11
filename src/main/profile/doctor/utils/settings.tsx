import bell from "../../../../assets/icons/Bell.png";
import earn from "../../../../assets/images/Transaction.png";
import sub from "../../../../assets/images/Membership Card.png";
import pWord from "../../../../assets/icons/password.png";
import AI from "../../../../assets/images/ai.png";
import help from "../../../../assets/images/helpCenter.png";
import language from "../../../../assets/images/languageGlobe.png";
import faqs from "../../../../assets/images/faq.png";
import privacyPolicy from "../../../../assets/images/privacyPolicy.png";
import logOut from "../../../../assets/images/logOUt.png";

const settings = [
  {
    image: bell,
    name: "Notifications",
    path: "",
  },
  {
    image: earn,
    name: "Earnings",
    path: "/doctor/earnings",
  },
  {
    image: sub,
    name: "Subscription",
    path: "/doctor/subscription",
  },
  {
    image: pWord,
    name: "Password",
    path: "/doctor/settings/manage-password",
  },
  {
    image: AI,
    name: "AI Chat Bot",
    path: "",
  },
  {
    image: help,
    name: "Help Center",
    path: "",
  },
  {
    image: language,
    name: "Language",
    path: "/doctor/select-language",
  },
  {
    image: faqs,
    name: "FAQS",
    path: "/doctor/faqs",
  },
  {
    image: privacyPolicy,
    name: "Privacy Policy",
    path: "",
  },
  {
    image: logOut,
    name: "Log Out",
    path: "",
  },
];

export { settings };
