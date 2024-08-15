"use client"

import styles from './Header.module.css'
import { useState } from 'react'


const Header = (props) => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);

function handleClick() {
  setIsMenuOpen(!isMenuOpen)
  console.log(isMenuOpen)
}
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>{props.title} Limgrave Palace</h1>
      <button onClick={() => handleClick()}>Menu Toggle</button>
      {
        isMenuOpen && (
          <>
            <p>Wassup!</p>
          </>
        )
      }

    </header>
  );
};

export default Header;
