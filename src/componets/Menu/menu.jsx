import Link from "next/link"
import { useState } from "react"
import styles from "./menu.module.css"

export default function Menu() {

    const[closeMenu, setCloseMenu] = useState(false)
    function handleClick() {
        setCloseMenu(!closeMenu)
    }

    return (
        <>
            <div className={styles.menuBox}>
                <img className={styles.closeButton} src="/menu-close-button.png" />
                <div className={styles.links}>
                    <Link onClick={() => handleClick()} href="/" >Home</Link>
                    <Link onClick={() => handleClick()} href="/founders">Meet the Founders</Link>
                </div>
            </div>
        </>
    )
}

// an orange box the width of the page, fixed to the top
// has to have a button top right 
// has to have 2 links to web pages
// must go away when links are clicked