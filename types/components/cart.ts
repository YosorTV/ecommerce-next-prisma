export type ProductItem = {
  id: string;
  name: string;
  image?: string;
  quantity?: number | 1;
  unit_amount: string | null;
};

export type CartItemProps = {
  data: ProductItem;
  onAdd: () => void;
  onRemove: () => void;
};

export type AddCartProps = {
  data: ProductItem;
};
