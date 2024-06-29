import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Countries from "../../Components/Countries/Countries";
import Slider from "../../Components/Slider/Slider";
import TourGallery from "../../Components/TourGallery/TourGallery";
import TourGuide from "../../Components/TourGuide/TourGuide";
import TouristSpotsSection from "../../Components/TouristSpotsSection/TouristSpotsSection";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>Home | ExploreAsia</title>
                  </Helmet>

                  <Banner />
                  <Slider />
                  <TouristSpotsSection />
                  <Countries />
                  <TourGuide />
                  <Testimonials />
                  <TourGallery />
            </div>
      );
};

export default Home;