import styles from './HeroDescription.module.css'

const HeroDescription = () => {  
  return (
        <div className={styles.heroDescription}>
        <p className={styles.heroHeadline}>Meet the artisans behind our masterpieces!</p>
        <p>Mike and Mandy</p>
      </div>
    )
}

export default HeroDescription