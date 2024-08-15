
import styles from './HeroImage.module.css'
const HeroImage = ({ src, alt }) => {
    return (
        <img
        src={src}
        alt={alt}
        className={styles.heroImage}
      />
    )
}

export default HeroImage