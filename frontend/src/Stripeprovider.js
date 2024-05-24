import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PJ7TISDGm3VSLieZjdiglnFNGoufmHigYgOAldLO0Vo4V9AGBsNyr6EAmhi4JzUSYz3wRtnF8VdKnmzAgZDS9gL0069bLlznC');

const StripeProvider = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeProvider;
