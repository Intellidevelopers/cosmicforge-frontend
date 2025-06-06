import { Plan } from "../types";

// Patient Plans Data
export const patientPlans: Plan[] = [
  {
    id: "patient-free",
    name: "Free Plan",
    description: "Suitable to all Subscribers",
    priceUSD: 0,
    priceNGN: 0,
    features: [
      { text: "Access to Chat only." },
      { text: "Access to 10 AI Chatbot Responses." },
      { text: "Access to General & Emergency Specialist only." },
      { text: "Access to Shop/Purchase" },
      { text: "Access to Support" },
    ],
  },
  {
    id: "patient-basic",
    name: "Basic Plan",
    description: "Suitable to all Basic Plan Subscribers",
    priceUSD: 20,
    priceNGN: 16000,
    features: [
      { text: "Video Consultations and chat." },
      { text: "Access 50 AI Chatbot Responses." },
      { text: "Access 20 AI Diagnostic Requests." },
      { text: "Access to all Department Specialist." },
      { text: "Access to Shop/Purchase" },
      { text: "Suitable for individual accounts only." },
      { text: "Access to Standard support" },
    ],
  },
  {
    id: "patient-medium",
    name: "Medium Plan",
    description: "Suitable to all Medium Plan Subscribers",
    priceUSD: 40,
    priceNGN: 30000,
    features: [
      { text: "Video Consultations and chat." },
      { text: "Access to 100 AI Chatbot Responses" },
      { text: "Access to 50 AI Diagnostic Requests." },
      { text: "Access to all Department Specialist." },
      { text: "Access to Shop/Purchase" },
      { text: "Suitable for Family account ( 1 Adult & 2 Children )" },
      { text: "Access to First Aid Assistance." },
      { text: "Access to Standard support" },
    ],
  },
  {
    id: "patient-premium",
    name: "Premium Plan",
    description: "Suitable to all Premium Subscribers",
    priceUSD: 80,
    priceNGN: 60000,
    features: [
      { text: "Video Consultations and chat." },
      { text: "Access to Unlimited AI Chatbot Responses" },
      { text: "Access to Unlimited AI Diagnostic Requests." },
      { text: "Access to all Department Specialist." },
      { text: "Access to Shop/Purchase" },
      { text: "Suitable for Family account ( 2 Adults & 2 or more Children )" },
      { text: "Access to First Aid Assistance." },
      { text: "Access to Priority support" },
    ],
    isActive: true,
  },
];

// Doctor Plans Data
export const doctorPlans: Plan[] = [
  {
    id: "doctor-premium",
    name: "Premium Plan",
    description: "Suitable to all Premium Plan Subscribers.",
    priceUSD: 200,
    priceNGN: 200000,
    commissionRate: 15,
    maxPatients: Infinity,
    maxResponses: Infinity,
    features: [
      { text: "Access to Unlimited Patients per month" },
      { text: "Top Profile Listing" },
      { text: "Access to Unlimited AI Responses." },
      { text: "Video Consultation and Chat" },
      { text: "Access to Priority Support." },
    ],
    isActive: true,
  },
  {
    id: "doctor-free",
    name: "Free Plan",
    description: "Suitable to all Subscribers",
    priceUSD: 0,
    priceNGN: 0,
    commissionRate: 30,
    maxPatients: 20,
    maxResponses: 50,
    features: [
      { text: "Access to 20 Patients per month" },
      { text: "Regular Profile Listing" },
      { text: "Access to 50 AI Responses." },
      { text: "Access to Chat only" },
      { text: "Access to Support" },
    ],
  },
  {
    id: "doctor-basic",
    name: "Basic Plan",
    description: "Suitable to all Basic Plan Subscriber.",
    priceUSD: 50,
    priceNGN: 60000,
    commissionRate: 25,
    maxPatients: 50,
    maxResponses: 200,
    features: [
      { text: "Access to 50 Patients per month." },
      { text: "Regular Profile Listing" },
      { text: "Access to 200 AI Responses." },
      { text: "Video Consultation and Chat" },
      { text: "Access to Standard support" },
    ],
  },
  {
    id: "doctor-professional",
    name: "Professional Plan",
    description: "Suitable to all Professional Plan Subscriber.",
    priceUSD: 80,
    priceNGN: 100000,
    commissionRate: 20,
    maxPatients: 100,
    maxResponses: 400,
    features: [
      { text: "Access to 100 Patients per month." },
      { text: "Top Profile Listing" },
      { text: "Access to 400 AI Responses." },
      { text: "Video Consultation and Chat" },
      { text: "Access to Priority Support." },
    ],
  },
];
