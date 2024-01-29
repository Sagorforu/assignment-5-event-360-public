import EventItems from "./LandingPageSection/EventItems";
import Gallery from "./LandingPageSection/Gallery";
import HeroSection from "./LandingPageSection/HeroSection";
import OurServices from "./LandingPageSection/OurServices";
import PricingPlan from "./LandingPageSection/PricingPlan";
import RecentEvents from "./LandingPageSection/RecentEvents";
import UpComingEvents from "./LandingPageSection/UpComingEvents";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <OurServices />
      <EventItems />
      <PricingPlan />
      <Gallery />
      <RecentEvents />
      <UpComingEvents />
    </div>
  );
};

export default Home;
