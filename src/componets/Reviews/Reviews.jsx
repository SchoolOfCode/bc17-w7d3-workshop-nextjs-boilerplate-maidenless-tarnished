"use client"
import styles from "./Reviews.module.css";
import { useState, useEffect } from 'react';

export default function Reviews () {
    const [reviews, setReviews] = useState({});  // Initialized as an empty object
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        if (selectedCountry) {
            fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
                .then(response => response.json())
                .then(data => setReviews(data))
        }
    }, [selectedCountry]);  // Effect depends on selectedCountry

    function setCountry(country) {
        setSelectedCountry(country);
    }

    return (
        <>
            <div className={styles.reviewBox}>
                <header className={styles.header}>Trusted.</header>
                <p className={styles.description}>We've got thousands of happy customers all over the UK. Choose your countery to see the latest review:</p>

                <div className={styles.buttonSection}>
                    <button className={styles.englandButton} onClick={() => setCountry('england')}>England</button>
                    <button className={styles.walesButton} onClick={() => setCountry('wales')}>Wales</button>
                    <button className={styles.scotlandButton} onClick={() => setCountry('scotland')}>Scotland</button>
                </div>
                <div className={styles.reviewData}>
                    <p>{reviews.text}</p>
                    <p>{reviews.author}</p>
                </div>
            </div>
        </>
    );
}
