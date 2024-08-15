"use client"
import Link from "next/link"
import styles from './Header.module.css'
import { useState } from 'react'


const Header = () => {
  
const[isMenuOpen, setIsMenuOpen] = useState(false);

function handleClick() {
  setIsMenuOpen(!isMenuOpen)
  console.log(isMenuOpen)
}
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.title}>🔥 Fireplace Palace</h1>
      <img className={styles.img} src="/menu-open-button.png" onClick={() => handleClick()} />
      { 
      isMenuOpen && (
          <>
            <div className={styles.menu}>
              <img className={styles.closeButton} src="/menu-close-button.png" onClick={() => handleClick()} />
              <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/founders">Meet the Founders</Link>
              </div>
            </div>
          </>
        )
      }

    </header>
  );
};

export default Header;


// make div for orange menu
// add links to the menu div