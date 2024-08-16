import HeroSection from "../Hero/HeroSection/HeroSection"
import Separator from "../Separator/Separator";
import HowItWorksSection from "../HowItWorks/HowItWorksSection/HowItWorksSection";
import Reviews from "../Reviews/Reviews.jsx";
const Main = () => {
  return (
    <main>
      <HeroSection heroImagesrc="/hero-desktop.png" />
      <Reviews />
      <Separator />
      <HowItWorksSection />
    </main>
  );
};

export default Main;
