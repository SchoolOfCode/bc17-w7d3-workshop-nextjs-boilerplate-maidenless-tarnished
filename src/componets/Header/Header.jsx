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
          

            <button onClick={handleClick}>See the partners</button>
          </>
        )
      }

    </header>
  );
};

export default Header;
