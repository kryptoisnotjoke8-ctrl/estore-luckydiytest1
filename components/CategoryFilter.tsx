
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <nav className="flex flex-wrap justify-center list-none p-0 my-4 gap-2 md:gap-4">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 font-semibold text-sm md:text-base
            ${activeCategory === category
              ? 'bg-orange-500 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-orange-100'
            }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryFilter;
