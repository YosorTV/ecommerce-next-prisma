export type ProductProps = {
  id: string;
  name: string;
  images?: string[];
  unit_amount: string | null;
  currency: string;
};

export type ProductListProps = {
  data?: ProductProps[];
};

export type ProductDetailsProps = {
  data: {
    name: string;
    unit_amount: string | number | null;
    description?: string;
    images: string;
    id: string;
  };
};
