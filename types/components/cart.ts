export type CartProps = {
  data: {
    id: string;
    image: string;
    name: string;
    quantity?: number | 1;
    unit_amount: number | null;
  };
};
