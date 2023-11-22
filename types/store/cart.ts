type CartItem = {
  name: string;
  id: string;
  images?: string[] | string;
  description?: string;
  unit_amount: number;
  quantity?: number;
};

export type CartState = {
  cart: CartItem[];
  isOpen: boolean;
  onToggle: () => void;
  onAdd: (item: CartItem) => void;
};
