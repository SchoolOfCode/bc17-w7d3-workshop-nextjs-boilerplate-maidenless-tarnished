import styles from "./Reviews.module.css"

export default function Reviews () {
    return (
        <>
            <div className={styles.reviewBox}>
                <header className={styles.header}></header>
                <p className={styles.description}></p>
                <div>
                    <button className={styles.englandButton}></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </>
    )
}