import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:5000/create-payment-intent', {
          amount: 1000, // Amount in cents
        });

        const { clientSecret } = response.data;

        const confirmPayment = await stripe.confirmCardPayment(clientSecret, {
          payment_method: id,
        });

        if (confirmPayment.error) {
          setPaymentStatus('Payment failed');
        } else {
          setPaymentStatus('Payment successful');
        }
      } catch (error) {
        setPaymentStatus('Payment failed');
      }
    } else {
      setPaymentStatus(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      <p>{paymentStatus}</p>
    </form>
  );
};

export default CheckoutForm;
