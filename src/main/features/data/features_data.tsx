import image_a from "../../../assets/features/Rectangle 5853.png";
import image_b from "../../../assets/features/Rectangle 5854.png";
import image_c from "../../../assets/features/Rectangle 5855.png";
import image_d from "../../../assets/features/Rectangle 5856.png";
import pharmacy from "../../../assets/features/pharmacy.png";
import first_aid from "../../../assets/features/first_aid.png";
import labouratory from "../../../assets/features/labouratory.png";
import health_edu from "../../../assets/features/health_edu.png";
import vr from "../../../assets/features/vr.png";
import therapy from "../../../assets/features/therapy.png";

export interface Offering {
  img_url: string;
  title: string;
  description: string;
  link: string;
}

export const what_we_offering: Offering[] = [
  {
    img_url: image_a,
    title: "Unified Healthcare Hub",
    description:
      "A unified platform connecting doctors, patients, labs, and pharmacies seamlessly",
    link: "/features/unified_healthcare_hub",
  },
  {
    img_url: image_b,
    title: "User-Centric Design",
    description: "Intuitive, role-based interfaces tailored for each user type",
    link: "/features/user_centric_design",
  },

  {
    img_url: image_c,
    title: "AI-Powered Tools",
    description:
      "Advanced features like robotic virtual diagnosis and Chat Bot virtual health assistant",
    link: "/features/ai_powered",
  },

  {
    img_url: image_d,
    title: "Simplified Processes",
    description:
      "Simplified process to schedule appointments, manage tests and prescriptions",
    link: "/features/simplified_process",
  },
];

export const other_feature_data: Offering[] = [
  {
    img_url: pharmacy,
    title: "Pharmacy",
    description:
      "Easily manage prescriptions, track medications, and connect with pharmacies for fast, reliable service",
    link: "/features/pharmacy",
  },

  {
    img_url: labouratory,
    title: "Laboratory",
    description:
      "Schedule sample collections, access test results, and simplify lab management for doctors, patients, and laboratories.",
    link: "/features/labouratory",
  },

  {
    img_url: first_aid,
    title: "First-Aid & Emergency",
    description:
      "Access step-by-step first-aid instructions and quickly contact emergency services like ambulance, fire, and police.",
    link: "",
  },

  {
    img_url: health_edu,
    title: "Health Education",
    description:
      "Stay informed with personalized health resources, from condition management to wellness tips, empowering better decisions.",
    link: "/features/health_edu",
  },
  {
    img_url: vr,
    title: "VR",
    description:
      "Enhance diagnosis, treatment, and patient engagement with immersive VR technology for both therapy and education.",
    link: "/features/vr",
  },

  {
    img_url: therapy,
    title: "Therapy",
    description:
      "Enhance diagnosis, treatment, and patient engagement with immersive VR technology for both therapy and education.",
    link: "/features/therapy",
  },
];
