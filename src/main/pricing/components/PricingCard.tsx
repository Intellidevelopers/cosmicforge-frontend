import { PricingCardProps } from "../types";
import React from "react";
import { formatPrice } from "../utils";

const PricingCard: React.FC<PricingCardProps> = ({ plan, currency, category, onSelect }) => {
  const price = currency === "USD" ? plan.priceUSD : plan.priceNGN;
  const currencySymbol = currency === "USD" ? "$" : "₦";

  return (
    <div
      className={` rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full ${
        plan.isActive ? "bg-[#272EA7] cursor-default text-white!" : "bg-white transition-colors"
      }`}
    >
      <div className="p-6 flex-grow">
        <h3
          className={`text-xl font-bold  ${
            plan.isActive ? "text-white cursor-default " : "text-gray-900 transition-colors"
          }`}
          //   className="text-xl font-bold text-gray-900"
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mt-1 ${
            plan.isActive ? "text-white/80 cursor-default " : "text-gray-600 transition-colors"
          }`}
        >
          {plan.description}
        </p>

        <div className="mt-4 flex items-baseline">
          <span
            className={`text-xl font-bold  ${
              plan.isActive ? "text-white cursor-default " : "text-gray-900 transition-colors"
            }`}
          >
            {currencySymbol} {formatPrice(price)}
          </span>
          <span className="text-gray-500 ml-1 text-sm">/Month</span>
        </div>

        {category === "doctor" && plan.commissionRate && (
          <p
            className={`text-sm mt-1 ${
              plan.isActive ? "text-white/80 cursor-default " : "text-gray-600 transition-colors"
            }`}
          >
            {plan.commissionRate}% commission per consultation
          </p>
        )}

        <ul className="mt-6 space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-[#272EA7] mr-2">•</span>
              </div>
              <p
                className={`text-sm mt-1 ${
                  plan.isActive
                    ? "text-white/80 cursor-default "
                    : "text-gray-600 transition-colors"
                }`}
              >
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={() => onSelect(plan.id)}
          className={`w-full py-3 px-4 rounded-md text-center  font-medium ${
            plan.isActive
              ? "text-[#0d1380] bg-white cursor-default"
              : "bg-[#272EA7] text-white hover:bg-[#232997]  transition-colors"
          }`}
        >
          {plan.isActive ? "Active Plan" : "Choose Plan"}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
