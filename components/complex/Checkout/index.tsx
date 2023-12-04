'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { useCart } from '@/store';
// import { loadStripe } from '@stripe/stripe-js';

import { CheckoutForm } from '@/components/simple';
import { getIntentId } from '@/services/checkout';

// const stripePromise = loadStripe(process.env.STRIPE_PUBLISH_KEY);

export const Checkout: FC = () => {
  const [secret, setSecret] = useState(null);

  const cartStore = useCart();

  const fetchSecret = useCallback(async () => {
    const { data } = await getIntentId({
      items: cartStore.cart,
      paymentIntentId: cartStore.paymentIntentId,
    });

    if (data) {
      setSecret(data.client_secret);
      cartStore.setPaymentIntentId(data.id);
    }
  }, [cartStore, getIntentId]);

  useEffect(() => {
    fetchSecret();
  }, []);

  return (
    <section>
      <div>Checkout</div>
      <CheckoutForm />
    </section>
  );
};
