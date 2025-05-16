import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const Frequently = () => {
  const FaqData = [
    {
      label: "What is this platform, and how does it work?",
      texts:
        "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
    },
    {
      label: "Is my personal and medical data secure on this platform?",
      texts:
        "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
    },
    {
      label: "Who can use this platform?",
      texts:
        "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
    },
    {
      label: "How do I sign up as a doctor, patient, laboratory, or pharmacy?",
      texts:
        "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
    },
    {
      label: "Can I access the platform on mobile and desktop?",
      texts:
        "We prioritize your privacy and security. Our platform employs advanced encryption standards and complies with healthcare data protection regulations to ensure that all personal and medical information remains confidential and secure. We also implement robust authentication processes to prevent unauthorized access.",
    },
  ];

  return (
    <div className="py-16 pb-8 text-white bg-[#272EA7]">
      <div className="max-w-[96%] sm:max-w-[80%] mx-auto">
        <div className="text-center">
          <h1>FAQs</h1>
          <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        </div>
        <div className="max-w-[80%] mx-auto my-8 py-4 border-t-2 border-white">
          {FaqData.map((items, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{items.label}</AccordionTrigger>
                <AccordionContent>{items.texts}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequently;
