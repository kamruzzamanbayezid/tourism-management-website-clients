import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const AllTouristSpots = () => {

      const loadedAllTouristSpots = useLoaderData();
      const [allTouristSpots, setAllTouristSpots] = useState(loadedAllTouristSpots);

      const handleSort = () => {

            // using normal fetch
            // fetch('http://localhost:5000/touristSpots/descending')
            //       .then(res => res.json())
            //       .then(data => setAllTouristSpots(data))

            // use axios
            axios.get('http://localhost:5000/touristSpots/descending')
                  .then(res => setAllTouristSpots(res.data))

      }



      return (
            <div>
                  <Helmet>
                        <title>All Tourist Spots | ExploreAsia</title>
                  </Helmet>
                  <div className="lg:my-10 mb-10">
                        <div className='relative'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/Zxr0MQZ/2149153256.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='location relative z-10 home-slider-place flex flex-col justify-center items-center h-[70vh] md:h-[60vh]  mx-auto'>
                                    <h1 className='text-white text-center font-medium lg:text-6xl mb-4 animate__animated animate__zoomIn font-josefin'>Live Your Life Through Travel</h1>
                                    <span className='text-lg text-white flex items-center gap-2 mb-4'>
                                          <Link to='/'>Home</Link> <MdKeyboardDoubleArrowRight className="text-yellow text-2xl" /> All Tourist Spots

                                    </span>

                              </div>
                        </div>
                  </div>


                  {
                        loadedAllTouristSpots?.length === 0 ?
                              <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                                    <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                              </div>

                              :
                              <div className="max-w-[1170px] mx-auto p-4 lg:p-0">

                                    {/* dropdown */}
                                    <div className="lg:max-w-5xl mx-auto mb-8 flex justify-center">
                                          <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className=" py-3 px-6 rounded-md m-1 bg-[#00095E] text-white">Sort By</div>
                                                <ul tabIndex={0} className="dropdown-content menu bg-yellow text-blue rounded-box z-[1] w-52 p-2 shadow">
                                                      <li onClick={handleSort}><a>Average Cost</a></li>
                                                </ul>
                                          </div>
                                    </div>

                                    <div className=''>

                                          {
                                                allTouristSpots?.map((touristSpot, idx) => <SingleTouristSpot key={idx} touristSpot={touristSpot}></SingleTouristSpot>)
                                          }
                                    </div>
                              </div>
                  }


            </div>
      );
};

export default AllTouristSpots;