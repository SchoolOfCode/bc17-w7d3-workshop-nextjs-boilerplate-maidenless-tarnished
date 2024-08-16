"use client"
import styles from "./Reviews.module.css"

export default function Reviews () {
function handleClick(country) {
    console.log(country)
}
    return (
        <>
            <div className={styles.reviewBox}>
                <header className={styles.header}></header>
                <p className={styles.description}></p>
                <div className={styles.buttonSection}>
                    <button className={styles.englandButton} onClick={() => handleClick('England')}>England</button>
                    <button className= {styles.walesButton}>Wales</button>
                    <button className={styles.scotlandButton}>Scotland</button>
                </div>
                <div className={styles.reviewData}></div>
            </div>
        </>
    )
}

// Add on click events to each button logging a test to show it worked
//