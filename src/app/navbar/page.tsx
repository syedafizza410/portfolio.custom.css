'use client'

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="top">Portfolio</div>
      <nav className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <Link href="home" className="navbar-link">Home</Link>
        <Link href="about" className="navbar-link">About</Link>
        <Link href="project" className="navbar-link">Projects</Link>
        <Link href="contact" className="navbar-link">Contact</Link>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; 
      </div>
    </header>
  );
};

export default Navbar;
