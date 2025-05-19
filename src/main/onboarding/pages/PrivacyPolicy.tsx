import { useEffect } from "react";
import Footer from "../pages/components/Footer";
// import { useLocation, useNavigate } from "react-router-dom";
import NavigationComponent from "./components/Navigation";

function PrivacyPolicy() {
  // const { state } = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <NavigationComponent />
      <div className="w-full font-poppins ">
        <div className="w-full p-24">
          <div className=" gap-4">
            <p className="font-extrabold text-[24px] md:text-[35px]">
              Privacy Policy
            </p>
            <p className="font-light leading-10">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Why do we use it? It is a long
              established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like). Where does it come from? Contrary to popular
              belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over
              2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
              Extremes of Good and Evil) by Cicero, written in 45 BC. This book
              is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
              amet..", comes from a line in section 1.10.32.
            </p>

            <h1 className="font-extrabold text-[24px] md:text-[35px] mt-5">
              Content Moderation Policy
            </h1>
            <p className="font-light leading-10">
              1. Purpose This policy ensures that all user-generated content on
              CosmicForge HealthNet aligns with the platform's mission to
              provide a safe, respectful, and trustworthy environment for
              healthcare access. It establishes guidelines for acceptable
              content, a process for handling violations, and rights for users
              to appeal decisions. 2. Prohibited Content The following types of
              content are strictly prohibited: Hate Speech and Discrimination:
              Content that promotes violence, discrimination, or harassment
              based on race, ethnicity, religion, gender, sexual orientation, or
              other protected characteristics. Medical Misinformation: False,
              misleading, or unverified medical advice or claims that could harm
              users. Obscene and Graphic Material: Content that is offensive,
              explicit, or inappropriate for a professional healthcare platform.
              Illegal Activities: Promotion or solicitation of illegal
              activities, including drug misuse and unlicensed medical
              practices. Spam and Scams: Malicious links, advertisements, or any
              content intended to defraud or mislead users. 3. Review and
              Removal Process Content Flagging: Users can flag inappropriate
              content using the platform’s reporting tools. Review Timeline: All
              flagged content will be reviewed by the moderation team within 48
              hours. Action on Violations: If content violates the policy, it
              will be promptly removed, and the user responsible will be
              notified. Repeated Violations: Users with multiple infractions may
              face account warnings, suspensions, or permanent bans, depending
              on the severity of the violations. 4. User Responsibilities
              Content Authenticity: Users must ensure that all shared content is
              original or appropriately credited. Plagiarized or copyrighted
              material without permission is prohibited. Respectful Interaction:
              Users must engage respectfully and avoid content that could harm,
              demean, or incite conflict with others. Reporting Violations:
              Users are encouraged to report inappropriate content or behavior
              through the platform’s reporting tools for swift action. 5.
              Appeals Appeal Rights: Users may appeal content removal decisions
              within 7 days of notification. Appeal Process: Appeals are
              reviewed by a senior moderation team or administrator within 14
              business days to ensure fairness. Final Decisions: Users will be
              notified of the final decision, which will include an explanation
              of the outcome. 6. Moderation Tools and Transparency AI Moderation
              Assistance: The platform uses advanced AI tools to assist in
              identifying prohibited content, ensuring swift action and
              consistent enforcement. Human Oversight: Final moderation
              decisions are made by trained human reviewers to account for
              context and nuances. Transparency: Users will be provided with
              clear reasons for content removal and steps to prevent future
              violations. 7. Policy Updates This policy will be reviewed and
              updated periodically to reflect evolving platform needs and user
              expectations. Significant changes will be communicated to users
              via platform notifications or email.
            </p>

            <h1 className="font-extrabold text-[24px] md:text-[35px] mt-5">
              User Code of Conduct
            </h1>

            <p className="font-light leading-10">
              1. General Expectations Accurate Information: Users are required
              to provide accurate and truthful personal, medical, and payment
              information when using the platform. Misrepresentation or
              falsification of data is strictly prohibited and may result in
              account suspension. Respectful Interaction: Users must interact
              respectfully with healthcare providers, platform staff, and other
              users. Any form of abuse, harassment, or hate speech will not be
              tolerated. Compliance with Policies: Users must adhere to all
              platform policies, including privacy guidelines and content
              moderation standards. 2. Prohibited Activities False or Misleading
              Information: Users must not share unverified or false medical
              information, which can cause harm to others. Impersonation of
              another individual, including healthcare providers, is strictly
              prohibited. Security Breaches: Users must not attempt to bypass
              platform security measures, access restricted areas, or exploit
              vulnerabilities in the system. Inappropriate Content: Uploading,
              sharing, or transmitting offensive, obscene, or harmful content,
              including graphic images or videos, is not allowed. Illegal
              Activities: Using the platform for illegal purposes, such as
              fraud, unauthorized access, or distribution of prohibited
              substances, is strictly prohibited. Disruptive Behavior: Spamming,
              trolling, or engaging in activities that disrupt the normal
              operation of the platform is not allowed. 3. Account Security
              Credential Protection: Users must keep their login credentials
              confidential and not share them with others. Accounts should be
              accessed only by the registered user. Suspicious Activities: Any
              suspicious activity, such as unauthorized access or fraudulent
              transactions, must be reported to customer support immediately.
              Secure Environment: Users are encouraged to use strong passwords
              and enable two-factor authentication (2FA) where available to
              enhance account security. 4. Consequences of Violations Warnings:
              Minor violations may result in a warning, with guidance provided
              on corrective actions. Suspensions: Serious or repeated violations
              may lead to temporary account suspension. Termination: Persistent
              non-compliance or severe infractions may result in permanent
              account termination. Reporting to Authorities: Illegal activities
              will be reported to relevant law enforcement or regulatory
              authorities for further action. 5. Appeals and Resolution Appeal
              Rights: Users have the right to appeal warnings, suspensions, or
              account terminations by contacting customer support. Appeals must
              be submitted within 7 days of the action and will be reviewed
              within 14 business days. Dispute Resolution: Users and platform
              representatives will work collaboratively to resolve disputes in a
              timely and fair manner. 6. Responsibilities of Platform Use
              Healthcare Interaction: Users must respect healthcare providers’
              time and expertise during consultations and interactions.
              Inappropriate behavior during consultations, such as offensive
              language or uncooperative conduct, is prohibited. Feedback and
              Reviews: Users are encouraged to leave honest and constructive
              reviews but must avoid defamatory, false, or malicious statements
              about healthcare providers or platform services. Use of Platform
              Features: Users must use platform features as intended and refrain
              from misusing tools, forms, or functionalities. 7. Continuous
              Improvement Feedback Participation: Users are encouraged to
              provide feedback to improve platform features and services.
              Awareness: Users should stay informed about platform updates,
              including changes to policies or terms of use.{" "}
            </p>

            <h1 className="font-extrabold text-[24px] md:text-[35px] mt-5">
              Healthcare Provider Code of Conduct
            </h1>
            <p className="font-light leading-10">
              1. Professional Standards Adherence to Medical Ethics: Providers
              must uphold the highest professional standards, adhering to local
              and international medical ethics, including the Hippocratic Oath
              and any region-specific medical regulations. Patient-Centered
              Care: Providers must prioritize the well-being of patients,
              ensuring that care is compassionate, respectful, and devoid of
              bias. Confidentiality and Data Security: All patient information
              must be treated as confidential and managed securely, in
              compliance with applicable laws such as GDPR, HIPAA, or NDPR
              (Nigeria Data Protection Regulation). Cultural Competence:
              Providers must respect cultural, religious, and personal beliefs,
              adapting communication styles to build trust with diverse patient
              populations. 2. Service Delivery High-Quality Consultations:
              Providers must deliver accurate and evidence-based diagnoses,
              prescriptions, and medical advice. All consultations must be
              conducted with professionalism and in a manner that builds trust
              and confidence. Timely Responses: Providers must respond promptly
              to consultation requests and patient messages within the agreed
              timeframes. Delays or missed appointments must be communicated
              proactively to patients through the platform. Proactive
              Availability Management: Providers must update their availability
              schedules regularly to reflect real-time changes. Unavailability
              without prior notice disrupts patient care and may result in
              penalties. Guidance for Emergencies: Providers must direct
              patients to appropriate emergency services if the condition
              requires immediate, in-person care that cannot be managed
              remotely. 3. Prohibited Practices Unethical Behavior: Providers
              must not solicit or accept bribes, gifts, or favors from patients
              in exchange for preferential treatment. Providers must refrain
              from engaging in activities that could harm the reputation of the
              platform or undermine patient trust. Misrepresentation: Providers
              must not exaggerate qualifications, certifications, or
              capabilities in their profiles or during consultations.
              Misinformation and Negligence: Sharing unverified or false medical
              advice, ignoring patient concerns, or failing to adhere to
              standard protocols is unacceptable. Discrimination and Harassment:
              Providers must treat all patients equitably, without
              discrimination based on age, gender, race, religion, disability,
              socio-economic status, or other protected characteristics. Any
              form of harassment, including verbal or written abuse, is strictly
              prohibited. Solicitation and Off-Platform Practices: Providers
              must not solicit patients for consultations or services outside
              the platform. Engaging in financial transactions or unregulated
              practices off the platform is prohibited. 4. Accountability Policy
              Compliance: Providers must adhere to all platform policies,
              including guidelines on ethical behavior, service delivery, and
              communication standards. Breaches of policies or medical standards
              may result in warnings, suspension, or permanent removal from the
              platform. Dispute Resolution: All disputes with patients must be
              addressed through the platform’s dispute resolution system.
              Providers must cooperate fully and in good faith to resolve issues
              promptly. Audit and Quality Monitoring: Providers may be subject
              to periodic quality reviews or audits to ensure compliance with
              platform standards. Consistently poor performance or patient
              complaints may trigger additional reviews or actions. Legal
              Compliance: Providers must comply with all relevant local,
              national, and international medical and telehealth regulations. 5.
              Communication and Interaction Professional Communication:
              Providers must maintain professionalism in all communications with
              patients and platform representatives, using respectful and clear
              language. Language Accessibility: Providers are encouraged to
              communicate in a language the patient understands, using
              translation tools if necessary to ensure clarity. Patient
              Education: Providers must take the time to explain diagnoses,
              treatments, and prescriptions to ensure patients fully understand
              their health conditions and next steps. 6. Continuous Improvement
              Participation in Training: Providers are encouraged to attend
              periodic training sessions or workshops organized by the platform
              to improve skills and remain updated on platform features.
              Adoption of Technology: Providers must familiarize themselves with
              platform tools, including AI diagnostics, IoT integration, and
              blockchain-secured medical record systems, to optimize patient
              care. Feedback Integration: Providers should consider patient
              feedback to improve service delivery and maintain high-quality
              consultations. 7. Consequences of Non-Compliance Warnings: Minor
              infractions may result in written warnings and guidance on
              corrective actions. Suspensions: Serious or repeated violations
              may result in temporary suspension of account access. Termination:
              Providers who breach platform policies, medical standards, or
              legal requirements may face permanent account termination and
              reporting to relevant authorities. 8. Support and Resources
              Provider Support: The platform offers dedicated support channels
              for providers to address queries, technical issues, or policy
              clarifications. Resource Hub: Providers have access to a resource
              hub featuring best practices, updated medical guidelines, and
              platform usage tutorials.
            </p>
            <h1 className="font-extrabold text-[24px] md:text-[35px] mt-5">
              Refund and Cancellation Policy
            </h1>
            <p className="font-light leading-10">
              1. Overview CosmicForge HealthNet is dedicated to maintaining
              transparency and fairness in all financial transactions. This
              policy defines the terms under which refunds can be requested and
              services canceled, while emphasizing a model that avoids
              additional charges for patients. 2. Eligibility for Refunds
              Refunds are applicable under the following conditions: • Provider
              Cancellations: o If the healthcare provider cancels or fails to
              attend the scheduled consultation. • Platform Errors: o Technical
              issues or disruptions on the platform that prevent the
              consultation from occurring. • Incorrect Charges: o If a patient
              is charged due to a system error, a full refund will be issued.
              Refund requests must be submitted within 7 days of the
              consultation date. 3. Cancellation Policy For Patients • Free
              Cancellations: o Patients may cancel appointments up to 24 hours
              before the scheduled time for a full refund or rescheduling
              option. • Late Cancellations: o Cancellations made less than 24
              hours before the appointment may not be eligible for a refund,
              depending on the provider’s policy. • No-Shows: o Patients who
              miss their scheduled consultation without prior cancellation will
              not receive a refund. For Providers • Providers are expected to
              honor all booked appointments unless unavoidable circumstances
              arise. • Providers who cancel or fail to attend will forfeit their
              consultation fee, and patients will receive a full refund. 4.
              Processing Refunds • Refund Timeline: o Approved refunds will be
              processed within 10 business days via the original payment method.
              • Provider Earnings: o If a refund is issued, the provider will
              not receive payment for the canceled consultation. • Platform
              Fees: o No additional transaction or platform fees are charged to
              patients, ensuring full refunds reflect the amount paid. 5.
              Commission Model • CosmicForge HealthNet deducts a commission fee
              from the provider’s consultation payment before transferring the
              balance. • This commission fee does not affect patient refunds and
              is only applied after a completed consultation. 6. Disputes •
              Patients and providers can escalate unresolved refund disputes to
              the platform’s Support Center. • All disputes will be reviewed and
              resolved within 14 business days, with both parties allowed to
              submit evidence for consideration. 7. Exceptions Refunds are not
              provided in the following cases: • Dissatisfaction with the
              consultation outcome if the provider delivered the service as
              described. • Patient cancellations made outside the provider’s
              specified timeframe, unless under exceptional and verified
              circumstances. 8. Contact Information For questions or assistance
              with refunds and cancellations, please contact: Email:
              support@cosmicforgehealthnet.com Live Chat: Available on the
              platform during business hours. 9. Policy Updates This policy is
              subject to periodic updates. Users will be notified of significant
              changes via email or platform notifications.
            </p>
          </div>

          <div></div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
