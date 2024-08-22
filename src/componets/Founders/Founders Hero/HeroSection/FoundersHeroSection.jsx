import FoundersHeroDescription from "../FoundersHeroDescription/FoundersHeroDescription";
import FoundersHeroImage from "../HeroImage/FoundersHeroImage"
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <FoundersHeroDescription />
      <FoundersHeroImage />
    </section>
  );
};

export default HeroSection;
