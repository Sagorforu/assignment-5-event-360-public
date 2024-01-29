import EventItems from "./LandingPageSection/EventItems";
import Gallery from "./LandingPageSection/Gallery";
import HeroSection from "./LandingPageSection/HeroSection";
import OurServices from "./LandingPageSection/OurServices";
import PricingPlan from "./LandingPageSection/PricingPlan";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <OurServices />
      <EventItems />
      <PricingPlan />
      <Gallery />
    </div>
  );
};

export default Home;
