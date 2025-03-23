
export const getDiscountedPrice = (price: number, billingCycle: 'monthly' | 'annual'): number => {
  if (billingCycle === 'annual') {
    return Math.round(price * 0.9);
  }
  return price;
};
