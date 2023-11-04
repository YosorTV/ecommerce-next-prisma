export type ProductProps = {
  id: string;
  name: string;
  images?: [];
  price: number | null;
  currency: string;
};

export type ProductListProps = {
  data?: ProductProps[];
};
