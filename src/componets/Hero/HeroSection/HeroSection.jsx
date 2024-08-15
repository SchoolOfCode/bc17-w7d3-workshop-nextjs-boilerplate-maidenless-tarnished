import HeroDescription from "../HeroDescription/HeroDescription";
import HeroImage from "../HeroImage/HeroImage";
import styles from "./HeroSection.module.css";
const HeroSection = ({ heroImagesrc, heroImagealt}) => {
  return (
    <section className={styles.heroSection}>
      <HeroImage src={heroImagesrc} alt={heroImagealt} />
      <HeroDescription />
    </section>
  );
};

export default HeroSection;
