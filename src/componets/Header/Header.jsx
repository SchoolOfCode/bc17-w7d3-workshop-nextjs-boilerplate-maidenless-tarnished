"use client"
import Link from "next/link"
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
      <img className={styles.img} src="/menu-open-button.png" onClick={() => handleClick()} />
      { 
      isMenuOpen && (
          <>
            <div className={styles.menu}>
              <img src="/menu-close-button.png" />
                <div className={styles.link}>
              <Link href="/app">Home</Link>
              <Link href="/founders">Founders</Link>
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