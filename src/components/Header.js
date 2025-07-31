import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky-header ${scrolled ? 'scrolled' : ''}`}>
      <h1>Harsh Kumar Gautam</h1>
      {!scrolled && (
        <p className="lead">Senior Java Developer | 7 Years Experience | Microservices | Fintech</p>
      )}
    </header>
  );
};

export default Header;