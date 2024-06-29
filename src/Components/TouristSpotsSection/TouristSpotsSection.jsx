import { useEffect, useState } from "react";
import TouristSpot from "../TouristSpot/TouristSpot";
import { Link } from "react-router-dom";

const TouristSpotsSection = () => {

      const [touristSpots, setTouristSpots] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/touristSpots')
                  .then(res => res.json())
                  .then(data => setTouristSpots(data))
      }, [])

      return (
            <div className="my-10 lg:my-20 py-10 lg:py-20 bg-[#f3f4f9]">
                  <div className="max-w-[1170px] mx-auto p-4 lg:p-0">

                        <h2 className="text-blue font-sans font-medium w-fit font-josefin text-4xl md:text-5xl mb-20">Popular Tour Packages!</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                              {
                                    touristSpots?.slice(0, 6).map((touristSpot, idx) => <TouristSpot key={idx} touristSpot={touristSpot}></TouristSpot>)
                              }
                        </div>

                        <Link to='/allTouristSpots' className={`${touristSpots?.length > 6 ? 'flex' : 'hidden'}  items-center justify-center`}>
                              <button className="px-7 md:px-10 py-4 md:py-5 relative rounded group overflow-hidden font-medium  inline-block bg-[#00095E] text-white">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">View All Tourist Spots</span>
                              </button>
                        </Link>
                  </div>

            </div >
      );
};

export default TouristSpotsSection;