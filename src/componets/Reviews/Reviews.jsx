"use client"
import styles from "./Reviews.module.css"
import { useState, useEffect } from 'react';

export default function Reviews () {

    const [reviews, setReviews] = useState('');
    console.log(reviews);

    useEffect(() => {

        if (reviews) {
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=scotland`)
                .then(response => response.json())
                .then(data => setReviews(data));
        }

    }, [])


function setCountry(country) {
    setReviews(country);
}

    return (
        <>
            <div className={styles.reviewBox}>
                <header className={styles.header}></header>
                <p className={styles.description}></p>

                <div className={styles.buttonSection}>
                    <button className={styles.englandButton} onClick={() => setCountry('England')}>England</button>
                    <button className= {styles.walesButton} onClick={() => setCountry('Wales')}>Wales</button>
                    <button className={styles.scotlandButton} onClick={() => setCountry('Scotland')}>Scotland</button>
                </div>
                <div className={styles.reviewData}></div>
            </div>
        </>
    )
}

// Add on click events to each button logging a test to show it worked
//