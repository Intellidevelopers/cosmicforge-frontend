import { useParams } from "react-router-dom";
import HomeNavBar from "../../home/component/patient/HomeNavBar";
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import StepComponent from "../components/stepComponent";
import infantCPRImg from "../../../assets/images/infantCfr.jpg";
import childCPRimg from "../../../assets/images/childCfr.jpg";
import adultCPRImg from "../../../assets/images/adultCfr.jpg";
import sprainImg from "../../../assets/images/sprainStep.jpg";
import burnsImg from "../../../assets/images/burnsStep.jpg";
import poisoningImg from "../../../assets/images/poisoningStep.png";
import animalBiteImg from "../../../assets/images/animalBiteStep.png";
import drownImg from "../../../assets/images/drownStep.jpg";
import woundImg from "../../../assets/images/woundStep.png";
import bleedingImg from "../../../assets/images/bleedingStep.jpg";
import faintingImg from "../../../assets/images/fainting.jpg";
import fractureImg from "../../../assets/images/fractureStep.jpg";
import infantVomitingImg from "../../../assets/images/infantVomiting.jpg";
import childVomitingImg from "../../../assets/images/childVomiting.jpg";
import adultVomitingImg from "../../../assets/images/adultVomiting.jpg";
import infantDiarrheaImg from "../../../assets/images/infantDiarrhea.jpg";
import adultDiarrheaImg from "../../../assets/images/adultDiarrhea.jpg";
import childDiarrheaImg from "../../../assets/images/childDiarrhea.jpg";
import infantNoseBleedImg from "../../../assets/images/infantNoseBleed.jpg";
import childNoseBleedImg from "../../../assets/images/childNoseBleed.png";
import adultNoseBleedImg from "../../../assets/images/adultNoseBleed.jpg";
import infantAllergyImg from "../../../assets/images/infantAllergy.jpg";
import childAllergyImg from "../../../assets/images/childAllergy.jpg";
import adultAllergyImg from "../../../assets/images/adultAllergy.jpg";
import infantChokingImg from "../../../assets/images/infantChoking.jpg";
import childChokingImg from "../../../assets/images/childChoking.jpg";
import adultChokingImg from "../../../assets/images/adultChoking.jpg";

interface params {
  [key: string]: string | undefined;
}

const FirstAidSteps = () => {
  const stepInfo: {
    [key: string]: {
      steps: string[];
      image: string;
    };
  } = {
    infantCPR: {
      steps: [
        "Check responsiveness by tapping foot gently and shouting. If alone, call the emergency hotline of the nearest healthcare centre and perform CPR for 2 minutes.",
        "Open airways and check for signs of breathing, then place two fingers in the centre of the chest of the infant to give 4cm deep compressions.",
        "Cover the mouth and nose of infant and give two gentle breaths. If available, use paediatric pads using each in front and back for support.",
        "Stop CPR once the baby breathes or moves, or when healthcare providers are around to provide essential care.",
      ],
      image: infantCPRImg,
    },
    childCPR: {
      steps: [
        "Check the scene for any danger before helping the child. Check the child’s pulse, breathing, and other signs of consciousness.",
        "Open airways and check for signs of breathing, then place two hands at the centre ofthe  child’s chest to give 5cm deep compressions.",
        "Cover the child’s mouth and nose and give two gentle breaths. If available, use paediatric pads, using one in front and back for support.",
        "Stop CPR once the child breathes or moves, or when healthcare providers are around to provide essential care.",
      ],
      image: childCPRimg,
    },
    adultCPR: {
      steps: [
        "Check responsiveness by tapping foot gently and shouting. If alone, call the emergency hotline of the nearest healthcare centre and perform CPR for 2 minutes.",
        "Open airways and check for signs of breathing, then place two fingers in the centre of the chest of the infant to give 4cm deep compressions.",
        "Cover the mouth and nose of infant and give two gentle breaths. If available, use paediatric pads using each in front and back for support.",
        "Stop CPR once the baby breathes or moves, or when healthcare providers are around to provide essential care.",
      ],
      image: adultCPRImg,
    },
    poisoning: {
      steps: [
        "Identify the poison, if possible but avoid  tasting it. If the poison was inhaled, move the person to fresh air. If on the skin, rinse thoroughly with water.",
        "Do not induce vomiting unless advised by a professional and call emergency services immediately.",
      ],
      image: poisoningImg,
    },
    "animal-bite": {
      steps: [
        "Wash the bite area with soap and clean water for at least 5 minutes. Then apply an antiseptic to prevent infection.",
        "If bleeding, use a clean cloth to reduce and stop bleeding.",
        "Cover the wound surface with a sterile bandage.",
        "Seek medical attention for rabies or tetanus evaluation.",
      ],
      image: animalBiteImg,
    },
    drowning: {
      steps: [
        "Remove the person from the water safely, then check for signs of breathing and pulse rate.",
        "Check responsiveness to sounds and touch. If not breathing, start CPR immediately.",
        "Adjust the position to allow for breathing and call emergency services immediately.",
      ],
      image: drownImg,
    },
    burns: {
      steps: [
        "Remove the person from the heat source immediately and cool the burn with running cool (not cold) water for 10–20 minutes.",
        "ORemove any tight items like jewelry or clothing near the burn and cover with a clean, non-stick sterile dressing or cloth.",
        "In severe cases, report to the nearest healthcare facility but do not apply butter, oil, or break blisters.",
      ],
      image: burnsImg,
    },
    fainting: {
      steps: [
        " Lie on their back on a flat surface and raise their legs slightly if breathing. Watch out for signs of light-headedness, tunnel vision, loss of consciousness, paleness, and sweating and loosen tight clothing to encourage breathing.",
        " Do not crowd the person. Monitor breathing and responsiveness for some minutes and encourage slow rising and movement. Once awake, sit slowly and rest for about 10-15 minutes.",
        "Identify strenuous activities and check blood sugar levels to reduce the chance of recurrence. Ensure proper nutrition and hydration, and avoid standing for extended hours.",
      ],
      image: faintingImg,
    },
    fracture: {
      steps: [
        "Use a cast or splint to hold bones together depending on the fracture location. Apply ice packs to surface to reduce swelling and pain.",
        "Administer acetaminophen or ibuprofen for pain relief.",
      ],
      image: fractureImg,
    },
    wound: {
      steps: [
        "Use medical gloves to conduct a proper assessment of wound for size, depth and presence of foreign materials or debris.",
        "Irrigate with copious amounts of water or sterile saline and use antiseptics only if the wound has been exposed for a long time or as directed by a physician.",
        "Manually remove debris and dirt using forceps, then select the best dressing method for the size and type of wound.",
        "Secure the dressing firmly with a bandage or a plaster material and give a shot of tetanus immune globulin based on the necessary guidelines by a physician.",
        "Offer systemic or local analgesia as directed by a physician and record all treatment steps, findings, and patient's instructions before administering oral medication.",
      ],
      image: woundImg,
    },
    bleeding: {
      steps: [
        "Perform a rapid visual and tactile assessment using personal protective equipment (PPE) to determine the source of the bleeding.",
        "Apply a firm and continuous pressure to the wound using a gauze or a dressing to stop the active bleeding. In extreme cases, elevate the bleeding area to stop blood flow and maintain a firm pressure for about 10-15 minutes.",
        "Add more layers of dressing depending on the amount of blood. Avoid removing any soaked layer of dressing, Instead, apply an haemostatic dressing in accordance to protocol and training.",
        "Cover the patient with a warm blanket to maintain body temperature, then monitor breathing, circulation, and mental reasoning.",
        "Call emergency hotlines in severe cases to ensure further treatment and care are administered until the patient fully recovers.",
      ],
      image: bleedingImg,
    },
    sprain: {
      steps: [
        "Immobilize the limb by using a cast or a splint. Use the RICE treatment method, i.e. rest, ice, compression, elevation. If required, protect with a brace to speed up recovery.",
        "Administer pain relief like paracetamol or ibuprofen and use crutches as recommended by the doctor, especially in extreme cases.",
        "Exercise the limb by stretching and moving lightly after 2-3 days to strengthen it after the pain subsides.",
        "See a doctor if you feel severe pain, bruising or inability to walk in the affected region and if swelling persists after 1 week.",
      ],
      image: sprainImg,
    },
    infantVomiting: {
      steps: [
        "Offer oral rehydration solution (ORS) in little measured amounts every 5-10 minutes.",
        "Continue breastfeeding or formula feeding the baby unless otherwise advised by your physician. Keep the infant upright during and after feeding to reduce reflux action.",
        "Watch out for signs of dehydration in infant and seek medical assistance. In case vomiting lasts for more than 12 hours, baby has a fever, feeds poorly or blood is present in vomit, seek professional medical assistance.",
      ],
      image: infantVomitingImg,
    },
    childVomiting: {
      steps: [
        "Give the child small, frequent sips of ORS; Avoid giving juice, soda, or water in large amounts. Instead, reintroduce food slowly to stop the vomiting.",
        "Avoid the use of over-the-counter medication. Watch for signs of dehydration and dizziness.",
        "Report cases longer than 24 hours, blood in vomit, etc., to the nearest healthcare service providers.",
      ],
      image: childVomitingImg,
    },
    adultVomiting: {
      steps: [
        "Ensure the adult is hydrated either through water, or ORS; Use ice chips if nauseated. Give bland tasting foods like rice, toast, etc., to prevent reflux.",
        "Use Ondansetron or Promethazine as prescribed by a licensed physician.",
        "If symptoms persist after 48 hours, seek medical help from licensed doctors.",
      ],
      image: adultVomitingImg,
    },
    infantDiarrhea: {
      steps: [
        "Ensure the baby is hydrated and continue feeding to replenish lost energy. Give ORS in small quantities.",
        "Avoid using anti-diarrhoea drugs to stop the stool. Administer 10mg of zinc per day (only for babies over 2 months old)",
        "Watch out for signs of vomiting, sunken eyes, dry eyes, no urine, or lethargy, and seek medical help.",
      ],
      image: infantDiarrheaImg,
    },
    childDiarrhea: {
      steps: [
        "Ensure the child is hydrated and continues to feed to replenish lost energy. Give ORS in small quantities after each stool, then supplement with water, soup, and diluted juice if necessary.",
        "Avoid using anti-diarrhoea drugs. Administer 20mg of zinc per day for 10-14 days.",
        "Watch for 2-3 days for signs of improvement. If you notice blood/mucus in stool, persistent vomiting, high fever or signs of dehydration, report to the nearest clinic.",
      ],
      image: childDiarrheaImg,
    },
    adultDiarrhea: {
      steps: [
        "Ensure the patient is hydrated with water, broth, herbal teas, and ORS. Administer light food for a short time and avoid dairy and alcohol intake.",
        "Use Loperamide for adults only. Administer probiotics to balance out the gut microbes.",
        "Check for signs of improvement. If you notice blood/mucus in stool, persistent vomiting, high fever or signs of dehydration, report to the nearest clinic.",
      ],
      image: adultDiarrheaImg,
    },
    infantNoseBleed: {
      steps: [
        "Sit the infant upright and keep the head slightly bent forward. Use a soft cloth to catch the blood around its nostrils.",
        "Gently pinch just below the nasal bone using a thumb and finger and apply cold compress to the bridge of the nose or back of the neck.",
        "Avoid inserting anything into the nostril. Use a humidifier in the environment and a gentle nasal spray, as advised by a physician..",
        "Report to a medical facility if bleeding persists for more than 10-15 minutes.",
      ],
      image: infantNoseBleedImg,
    },
    childNoseBleed: {
      steps: [
        "Sit the child upright and keep head slightly bent forward. Use a soft cloth to catch the blood for its nostrils and encourage open mouth breathing.",
        "Firmly pinch the soft part of the nose and hold for about 10 minutes without checking. Apply cold packs to the nose or cheeks to help constrict the vessels.",
        "Avoid nose blowing, picking, or rubbing for a few hours, and keep nails short to prevent minor cuts inside the nose.",
        "Treat allergies and report cases that last for more than 20 minutes, frequent bleeding or blood flowing from both nostrils and mouth.",
      ],
      image: childNoseBleedImg,
    },
    adultNoseBleed: {
      steps: [
        "Sit patient upright and lean forward slightly, then encourage open mouth breathing. Stop the bleeding with a soft cloth and identify underlying causes.",
        "Firmly pinch the soft part of the nose and hold for about 10 minutes without checking. Apply cold packs to the nose or cheeks to help constrict the vessels.",
        "Avoid bending over, hot drinks, smoking, and nose blowing for hours. Use a humidifier in the environment and a gentle nasal saline spray to prevent dryness.",
        "Report cases that last for more than 20 minutes, frequent bleeding or blood flowing from both nostril and mouth. Check the blood pressure to determine if the patient has signs of high BP.",
      ],
      image: adultNoseBleedImg,
    },
    infantAllergy: {
      steps: [
        "Watch out for signs of rash sweating, sneezing and itchiness when certain formulas or drugs are consumed by infants. In severe cases, infants may experience trouble breathing, swollen face/lips, vomiting, or paleness.",
        "Remove the allergen and give an antihistamine as prescribed by a paediatrician and monitor closely for biphasic reactions.",
        "Use an infant epinephrine auto-injector if available and call emergency services immediately. If the infant is pale, lie flat on the parent’s arms and raise the legs slightly.",
        "Eliminate and avoid allergens to prevent recurrence.",
      ],
      image: infantAllergyImg,
    },
    childAllergy: {
      steps: [
        "Watch out for signs of rash, sneezing, running nose, mild swelling and itchy mouth or throat.",
        "In severe cases, the child may experience shortness of breath, swelling of tongue/lips, vomiting or diarrhoea, and dizziness.",
        "Remove the trigger element in food or drugs and give oral antihistamine, then closely observe. Lay the child flat with legs lifted up to improve blood circulation and use a medical bracelet in severe cases.",
        "Use a pediatric epinephrine auto-injector and call the emergency help line immediately.  Watch out for signs of recurrence and consult a paediatrician.",
      ],
      image: childAllergyImg,
    },
    adultAllergy: {
      steps: [
        "Watch out for signs of rash, sneezing, nasal congestion, stomach discomfort, mild swelling, and an itchy mouth or throat.",
        "Remove the trigger element in food or drugs and give oral antihistamine, then closely observe. Lay down flat unless the patient experiences breathing difficulty. Discourage walking for the first few hours.",
        "Use epinephrine and monitor the reaction for at least 4 hours. Avoid triggers and wear medical alert bracelets, and call emergency services for a proper check-up.",
      ],
      image: adultAllergyImg,
    },
    infantChoking: {
      steps: [
        "If symptoms start when you’re alone, give two minutes of care before make a call to the emergency healthcare service nearest to your location.",
        "Lay the infant face-down close to your forearm and support their neck with your other arm. Use the heel of your arm to give 5 firm back blows in between their shoulder blades.",
        "Turn the infant over in a position facing up and place 2 fingers on the centre of their chest at some distance below the nipple line to give 5 quick downward chest thrusts.",
        "Watch for signs of relief before repeating the entire process. If the infant is unresponsive, consider infant CPR immediately.",
        "Continue CPR until the object has been removed or help arrives.",
      ],
      image: infantChokingImg,
    },
    childChoking: {
      steps: [
        "Encourage the child to cough. Do not hit a child’s back to suppress the cough, as this can affect breathing.",
        "Call for help if the child cannot cough, talk, or breathe. Ensure you reach out to the emergency contacts of a specialized health professional.",
        "Stand or kneel behind the child while supporting their chest with one hand to lean them forward. After that, use the heel of your other hand to give five firm back blows in between the shoulder blades.",
        "While still kneeling behind the child, wrap your arm around their waist and place a fist on their belly button to give 5 quick upward thrusts.",
        "If the child becomes unresponsive, start CPR treatment immediately.",
      ],
      image: childChokingImg,
    },
    adultChoking: {
      steps: [
        "If an adult is choking uncontrollably and unable to talk, encourage them to keep coughing to free their airways.",
        "If the symptoms worsen and they cough, speak or breathe, encourage them to stay calm and call for help with emergency healthcare hotline.",
        "Stand behind the person and then push them forward to give 5 firm back blows in between their shoulder blades using the heel of your palm. Ensure your blows are firm enough to dislodge the object but not too hard to avoid causing injuries.",
        "Stand behind the person and wrap your arms around their waist to give abdominal thrusts. Make a fist with one hand and place it above their belly button, then grab the fist with your other hand to give 5 quick inward and upward thrusts.",
        "Repeat the last two processes until the object is removed and the person starts to speak and breathe properly. In case they’re unresponsive, begin CPR with immediate chest compressions.",
      ],
      image: adultChokingImg,
    },
  };

  const params = useParams<params>();
  const { person, case: caseType } = params;
  const category =
    caseType === "f"
      ? person?.toLocaleLowerCase()
      : `${person?.toLocaleLowerCase()}${caseType}`;
  const selectedType = stepInfo[category ? category : ""];
  console.log(params);
  console.log(category);
  return (
    <div>
      <HomeNavBar
        title={person ? `${person?.replace(/-/g, " ")}` : ""}
        onSearchFired={() => {}}
      />
      <HomeMobileNavBar
        title={person ? `${person?.replace(/-/g, " ")} ${category}` : ""}
        onSearchFired={() => {}}
      />
      <div className="px-3 pt-3 bg-white gap-4 flex flex-col ">
        <h2 className="font-bold ">
          Steps for {person?.replace(/-/g, " ")}{" "}
          {caseType === "f" ? "" : caseType?.toLocaleLowerCase()}{" "}
        </h2>
        <div className="flex flex-col gap-2">
          {selectedType.steps.map((str, i) => {
            return <StepComponent number={i + 1} step={str} />;
          })}
        </div>
        <img src={selectedType.image} alt="Cpr Image" className="w-full" />
      </div>
    </div>
  );
};

export default FirstAidSteps;
