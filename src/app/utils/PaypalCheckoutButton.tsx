// @ts-nocheck
'use client'

import React, { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { usePayments } from '@/context/PaymentsContext';

interface Payment {
  clientId: string;
  intent: 'capture';
  currency: string;
}

interface PaypalCheckoutButtonProps {
  payment: Payment;
}

const PaypalCheckoutButton: React.FC<PaypalCheckoutButtonProps> = ({ payment }) => {
  const [paidFor, setPaidFor] = useState(false);
  const { state, dispatch, setPaid, setSuccess, setError, setLoading } = usePayments();

  const handleApprove = async (orderId) => {
    const token = localStorage.getItem('token');
    setPaidFor(true);
    dispatch(setLoading(true));
    dispatch(setPaid(true));

    // Construct a payload object with only the necessary fields
    const payload = {
      title: state.title,
      description: state.description,
      link: state.link,
      price: state.price,
      image: state.image,
      adSpace: state.adSpace,
      paid: state.paid,
      startingDate: state.startingDate,
      campaignBudget: state.campaignBudget,
      duration: state.duration,
    };

    // Log the payload to check its contents
    console.log("Payload:", payload);

    // Ensure all required fields are filled
    if (!payload.title || !payload.description || !payload.link || !payload.price || !payload.image || !payload.adSpace) {
      dispatch(setError('All required fields must be filled out'));
      dispatch(setLoading(false));
      return;
    }

    try {
      const res = await fetch('https://createcamp.onrender.com/ads/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload), // Convert payload to JSON string
      });

      if (res.ok) {
        const data = await res.json();
        dispatch(setSuccess(true));
        console.log("data", data);
      } else {
        const data = await res.json();
        dispatch(setLoading(false));
        dispatch(setError(data.message));
        console.log("failed", data);
      }
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
      console.error('create ad failed:', error);
    }
  };

  return (
    <>
      <PayPalScriptProvider options={payment}>
        <PayPalButtons
          style={{ layout: 'horizontal', tagline: false }}
          onClick={(data, actions) => {
            const hasAlreadyPaid = false;

            if (hasAlreadyPaid) {
              setError('You already paid for this space, go to your dashboard to review.');
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: state.description,
                  amount: {
                    value: state.price,
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order?.capture();
            console.log('order', order);
            handleApprove(data.orderID);
          }}
          onCancel={() => {
            // Display cancel message, modal or redirect the user or back to the checkout page
          }}
          onError={(err) => {
            setError(err.message);
            console.error('paypal checkout onError', err);
          }}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PaypalCheckoutButton;
