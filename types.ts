
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
