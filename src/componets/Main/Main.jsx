import HeroSection from "../Hero/HeroSection/HeroSection"
import Separator from "../Separator/Separator";
import HowItWorksSection from "../HowItWorks/HowItWorksSection/HowItWorksSection";

const Main = () => {
  return (
    <main>
      <HeroSection heroImagesrc="/hero-desktop.png" />
      <Separator />
      <HowItWorksSection />
    </main>
  );
};

export default Main;
