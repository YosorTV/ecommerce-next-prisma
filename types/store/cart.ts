export type CartItemType = {
  name: string;
  id: string;
  images?: string[] | string;
  description?: string;
  unit_amount: string | null;
  quantity?: number;
};

export type CartState = {
  cart: CartItemType[];
  isOpen: boolean;
  onToggle: () => void;
  onAdd: (item: CartItemType) => void;
  onRemove: (item: CartItemType) => void;
};
