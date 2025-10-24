
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Product, CartItem } from './types';
import { fetchProducts } from './services/productService';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const handleAddToCart = useCallback((productToAdd: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product: productToAdd, quantity: 1 }];
    });
  }, []);

  const handleRemoveFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(item =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevItems.filter(item => item.product.id !== productId);
    });
  }, []);

  const categories = useMemo(() => {
    const allCategories = new Set(products.map(p => p.category));
    return ['All', ...Array.from(allCategories)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchTerm]);

  const cartItemCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      <main className="container mx-auto px-4">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
        <SearchBar searchTerm={searchTerm} onSearchChange={e => setSearchTerm(e.target.value)} />
        {isLoading ? (
            <div className="text-center p-10 text-gray-500">Loading products...</div>
        ) : (
            <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        )}
      </main>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onAddItem={handleAddToCart}
      />
    </div>
  );
};

export default App;
