import HeroSection from "../Hero/HeroSection/HeroSection"
import Separator from "../Separator/Separator";
import HowItWorksSection from "../HowItWorks/HowItWorksSection/HowItWorksSection";

const Founders = () => {
    return (
        <main>
            <HeroSection heroImagesrc="/founder-mike-and-mandy.png" />
            <Separator />
            <HowItWorksSection />
        </main>
    )
}

export default Founders