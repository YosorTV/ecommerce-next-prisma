'use client';

import { FC, useCallback, useEffect, useState } from 'react';

import { useCart, useTheme } from '@/store';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { AnimatePresence, motion } from 'framer-motion';

import { Lottie } from '../Lottie';

import { Button } from '@/components/elements';
import { CheckoutForm } from '@/components/simple';
import { formatTotalAmount } from '@/helpers/formatters';
// eslint-disable-next-line import/extensions
import lottieAnim from '@/public/LottieConfirmed.json';
import { getIntentId } from '@/services/checkout';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

export const Checkout: FC = () => {
  const [secret, setSecret] = useState<string | null>(null);
  /* Store */
  const cartStore = useCart();
  const themeStore = useTheme();
  /* Stripe */

  const { totalPrice } = formatTotalAmount(cartStore.cart);

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

  const handleBack = () => cartStore.setForm('cart');

  /* Effects */
  useEffect(() => {
    fetchSecret();
  }, []);

  const options: StripeElementsOptions = {
    clientSecret: secret,
    appearance: {
      theme: themeStore.theme === 'light' ? 'stripe' : 'night',
      labels: 'floating',
    },
  };

  return (
    <section className='relative flex flex-1 flex-col gap-y-5'>
      <Button
        type='button'
        variant='text'
        onClick={handleBack}
        className='absolute -left-5 -top-5 text-lg'
      >
        Back to cart
      </Button>
      <AnimatePresence mode='wait'>
        {secret ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm secret={secret} totalPrice={totalPrice} />
            </Elements>
          </motion.div>
        ) : (
          <Lottie src={lottieAnim} text='Preparing your order 🛒' />
        )}
      </AnimatePresence>
    </section>
  );
};
