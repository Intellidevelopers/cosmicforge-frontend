import React, { useState } from "react";
import { doctorPlans, patientPlans } from "./data";

import { Currency } from "../types";
import Footer from "../../../main/onboarding/component/Footer";
import NavigationComponent from "../../../main/onboarding/pages/components/Navigation";
import PageHeader from "./PageHeader";
import PricingCard from "./PricingCard";

const PricingPage: React.FC = () => {
  // States
  const [currency, setCurrency] = useState<Currency>("NGN");

  const handlePlanSelect = (planId: string) => {
    console.log(`Selected plan: ${planId}`);

    //=====================================
    // Once the functionalities are ready i will write the implementation here
  };

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "NGN" ? "USD" : "NGN"));
  };

  return (
    <React.Fragment>
      <NavigationComponent />
      <div className="mt-[4rem]">
        <PageHeader />
        {/* <HomeMobileNavBar title={"Shop"} onSearchFired={() => {}} /> */}
        <div className="max-w-[1200px]  mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={toggleCurrency}
              className="py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Switch to {currency === "NGN" ? "USD" : "NGN"}
            </button>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Patient Billing Plans</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {patientPlans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  currency={currency}
                  category="patient"
                  onSelect={handlePlanSelect}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Doctor Billing Plans</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {doctorPlans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  currency={currency}
                  category="doctor"
                  onSelect={handlePlanSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PricingPage;
