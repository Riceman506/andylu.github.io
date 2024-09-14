import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 140;

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={styles.container}>
      <a href="#!" onClick={() => handleScroll('profile')}>Andy Lu</a>

      <nav className={styles.navbar}>
        <a href="#!" onClick={() => handleScroll('projects')}>Projects</a>
        <a href="#!" onClick={() => handleScroll('skills')}>Skills</a>
        <a href="#!" onClick={() => handleScroll('aboutMe')}>About Me</a>
      </nav>
    </header>
  );
};

export default Navbar;