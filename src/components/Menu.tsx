import React, { useState } from 'react';

interface MenuProps {
  onToggle: () => void;
  isCollapsed: boolean;
}

interface MenuItem {
  title: string;
  children?: string[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    children: ['Overview', 'Analytics', 'Reports']
  },
  {
    title: 'Projects',
    children: ['Active', 'Completed', 'Archived']
  },
  {
    title: 'Settings',
    children: ['Profile', 'Security', 'Preferences']
  }
];

const Menu: React.FC<MenuProps> = ({ onToggle, isCollapsed }) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div 
      className={`h-full bg-gray-100 relative transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-12' : 'w-[300px]'
      }`}
    >
      <button
        onClick={onToggle}
        className="absolute -right-3 top-4 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 z-10"
      >
        {isCollapsed ? '→' : '←'}
      </button>
      <nav className={`p-4 ${isCollapsed ? 'hidden' : 'block'}`}>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200 last:border-b-0">
              <div 
                className="flex items-center justify-between p-2 hover:bg-gray-200 rounded cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <span>{item.title}</span>
                {item.children && (
                  <span className="text-gray-500">
                    {expandedItems.includes(index) ? '▼' : '▶'}
                  </span>
                )}
              </div>
              {item.children && expandedItems.includes(index) && (
                <ul className="ml-4 py-2 space-y-1">
                  {item.children.map((child, childIndex) => (
                    <li 
                      key={childIndex}
                      className="p-2 hover:bg-gray-200 rounded cursor-pointer text-sm text-gray-600"
                    >
                      {child}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {isCollapsed && (
        <div className="p-2 text-center text-gray-500">
          Menu
        </div>
      )}
    </div>
  );
};

export default Menu; 