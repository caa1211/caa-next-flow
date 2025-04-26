'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Content from '../components/Content';

export default function Home() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex mt-11 mb-11">
        <Menu 
          isCollapsed={isMenuCollapsed} 
          onToggle={() => setIsMenuCollapsed(!isMenuCollapsed)} 
        />
        <div className="flex-1">
          <Content />
        </div>
      </main>

      <Footer />
    </div>
  );
}
