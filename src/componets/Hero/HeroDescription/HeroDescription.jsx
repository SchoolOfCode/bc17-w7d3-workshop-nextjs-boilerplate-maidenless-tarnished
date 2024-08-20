import Link from "next/link"
import styles from './HeroDescription.module.css'

const HeroDescription = () => {  
  return (
        <div className={styles.heroDescription}>
        <p className={styles.heroHeadline}>
          Discover the <br />
          perfect fireplace ...
        </p>
          <Link href="/bookings">Book Consultation</Link>
      </div>
    )
}

export default HeroDescription