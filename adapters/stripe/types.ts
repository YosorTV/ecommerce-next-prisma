export interface CustomerData {
  data: {
    email?: string;
    name?: string;
    stripeCustomerId?: string;
  };
}

export interface CustomerAdapter {
  email: string;
  name: string;
}
