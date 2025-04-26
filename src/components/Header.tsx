import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-11 bg-white border-b border-gray-200 flex items-center justify-center z-50">
      <div className="w-full max-w-2xl px-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-8 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
    </header>
  );
};

export default Header; 