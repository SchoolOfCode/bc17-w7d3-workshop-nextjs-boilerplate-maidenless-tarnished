"use client"
import styles from './Header.module.css'
import { useState } from 'react'
import Menu from "../Menu/menu.jsx"


const Header = () => {
  
const[isMenuOpen, setIsMenuOpen] = useState(false);

function handleClick() {
  setIsMenuOpen(!isMenuOpen)
  console.log(isMenuOpen)
}
  return (
    <header className={styles.headerContainer}>
        <h1 className={styles.title} >🔥 Fireplace Palace</h1>
        <img className={styles.img} src="/menu-open-button.png" onClick={() => handleClick()} />
      { 
      isMenuOpen && (
          <>
            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          </>
        )
      }

    </header>
  );
};

export default Header;


// make div for orange menu
// add links to the menu div