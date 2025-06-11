export const formatPrice = (price: number) => {
  if (price === 0) return "0.00";
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
