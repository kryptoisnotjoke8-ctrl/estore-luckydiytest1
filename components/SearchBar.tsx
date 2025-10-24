
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="my-4 mb-6 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={onSearchChange}
        className="block w-full px-5 py-3 text-base text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;
