
import styles from './HeroImage.module.css'
const HeroImage = () => {
    return (
        <img
        src="/hero-desktop.png"
        alt="a very nice fireplace"
        className={styles.heroImage}
      />
    )
}

export default HeroImage