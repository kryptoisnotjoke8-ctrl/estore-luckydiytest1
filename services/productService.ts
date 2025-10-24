
import type { Product } from '../types';

const mockProducts: Product[] = [
  { id: 1, name: "Classic Leather Jacket", price: 199.99, category: "Jackets", imageUrl: "https://picsum.photos/seed/1/400/300" },
  { id: 2, name: "Slim Fit Jeans", price: 79.99, category: "Pants", imageUrl: "https://picsum.photos/seed/2/400/300" },
  { id: 3, name: "Cotton Crewneck T-Shirt", price: 24.99, category: "T-Shirts", imageUrl: "https://picsum.photos/seed/3/400/300" },
  { id: 4, name: "Wool Blend Scarf", price: 45.00, category: "Accessories", imageUrl: "https://picsum.photos/seed/4/400/300" },
  { id: 5, name: "Running Sneakers", price: 120.00, category: "Shoes", imageUrl: "https://picsum.photos/seed/5/400/300" },
  { id: 6, name: "Denim Jacket", price: 150.50, category: "Jackets", imageUrl: "https://picsum.photos/seed/6/400/300" },
  { id: 7, name: "Casual Chinos", price: 65.00, category: "Pants", imageUrl: "https://picsum.photos/seed/7/400/300" },
  { id: 8, name: "V-Neck T-Shirt", price: 29.99, category: "T-Shirts", imageUrl: "https://picsum.photos/seed/8/400/300" },
  { id: 9, name: "Leather Belt", price: 39.99, category: "Accessories", imageUrl: "https://picsum.photos/seed/9/400/300" },
  { id: 10, name: "Formal Leather Shoes", price: 180.00, category: "Shoes", imageUrl: "https://picsum.photos/seed/10/400/300" },
  { id: 11, name: "Winter Parka", price: 250.00, category: "Jackets", imageUrl: "https://picsum.photos/seed/11/400/300" },
  { id: 12, name: "Graphic Print T-Shirt", price: 35.00, category: "T-Shirts", imageUrl: "https://picsum.photos/seed/12/400/300" },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 500); // Simulate network delay
  });
};
