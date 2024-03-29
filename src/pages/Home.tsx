import AboutMyCompany from "./LandingPageSection/AboutMyCompany";
import ClientReviews from "./LandingPageSection/ClientReviews";
import Customers from "./LandingPageSection/Customers";
import EventItems from "./LandingPageSection/EventItems";
import Gallery from "./LandingPageSection/Gallery";
import GetSupport from "./LandingPageSection/GetSupport";
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
      <Customers />
      <ClientReviews />
      <AboutMyCompany />
      <GetSupport />
    </div>
  );
};

export default Home;
