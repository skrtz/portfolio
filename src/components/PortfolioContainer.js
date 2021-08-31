import React, { useState } from 'react';
// import Burger from './Burger'
import NavTabs from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import '../App.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'HOME') {
      return <Home />;
    }
    if (currentPage === 'ABOUT') {
      return <About />;
    }
    if (currentPage === 'PROJECTS') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => {
      setCurrentPage(page);
    };

  return (
    <div className="main">
      {/* <Burger /> */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}