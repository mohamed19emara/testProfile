import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <h1>بروفايلي</h1>
      <ul>
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/about">من أنا</Link></li>
        <li><Link to="/skills">المهارات</Link></li>
        <li><Link to="/projects">المشاريع</Link></li>
        <li><Link to="/contact">اتصل بي</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
