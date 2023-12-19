'use client';

import { FC, useEffect, useState } from 'react';

import { useCart } from '@/store';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

import { Button, Form, Title } from '@/components/elements';
import { formatPrice } from '@/helpers/formatters';
import { toaster } from '@/lib/toast';

export const CheckoutForm: FC<any> = ({
  secret,
  totalPrice,
}: {
  secret: string;
  totalPrice: number;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cartStore = useCart();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!secret) {
      // eslint-disable-next-line no-useless-return
      return;
    }
  }, [stripe]);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (!error) {
      setIsLoading(false);
      cartStore.setForm('success');
      toaster({ key: 'success', message: paymentIntent.status });
    }

    if (error) {
      toaster({ key: 'error', message: error.message });
    }
  };

  return (
    <Form id='payment-form' onSubmit={handleSubmit} className='pt-5'>
      <PaymentElement id='payment-element' options={{ layout: 'auto' }} />
      <div className='flex flex-col gap-5 pt-5'>
        <Title level='1'>Total: {formatPrice(totalPrice)}</Title>
        <Button
          id='submit'
          type='submit'
          className='w-full'
          disabled={!isLoading || !stripe || !elements}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};
