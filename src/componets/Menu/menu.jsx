import Link from "next/link"
import styles from "./menu.module.css"

export default function Menu({ isOpen, onClose }) {

    function handleClick() {
        onClose();
        console.log("Menu closed");
    }
    return (
        <>
            <div className={`${styles.menuBox} ${!isOpen ? styles.hide : ''}`}>
                <img className={styles.closeButton} src="/menu-close-button.png" onClick={() => handleClick()} />
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