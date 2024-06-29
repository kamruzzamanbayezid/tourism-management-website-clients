import PropTypes from 'prop-types';
import { IoIosPricetags, IoMdTime } from "react-icons/io";
import { MdAreaChart } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import './TouristSpot.css';
import { Link } from 'react-router-dom';
// import 'animate.css';


const TouristSpot = ({ touristSpot }) => {

      const { _id, image, spotName, countryName, location, averageCost, seasonality, travelTime } = touristSpot || {};

      return (
            <div className="bg-white card-style p-5 hover-card mb-10 flex flex-col">
                  <div className='relative'>
                        <img className='card-image -mt-10 transition-all duration-300 h-[200px] w-full' src={image} alt="Luxury Townhouse" />
                        <div id='view-btn' className='hidden absolute bg-[#00095E] text-white inset-16 items-center justify-center text-lg font-medium'>
                              <Link to={`/touristSpotDetails/${_id}`}><button className='hover:underline'>View Details</button></Link>
                        </div>
                        <div className='absolute -bottom-7 left-5 bg-red-500 border-radius-style button-slanted'>
                              <span className='button-slanted-content flex items-center gap-2 text-white font-normal'> <IoMdTime className='text-xl text-white' />{travelTime}</span>
                        </div>
                  </div>
                  <h2 className='text-2xl font-bold mt-8 mb-2 text-blue flex-1 font-josefin'>{spotName}</h2>

                  <span className='text-sm text-gray-600 flex items-center gap-2 mb-4'><IoLocationSharp className='text-xl text-yellow' /> {location}</span>

                  <span className='text-blue font-medium '>#{countryName}</span>
                  <hr className='my-4' />
                  <div className='grid grid-cols-2 gap-5'>
                        <span className='text-sm flex items-center gap-2'><IoIosPricetags className='text-xl text-yellow' /> ${averageCost}</span>
                        <span className='text-sm flex items-center gap-2'><MdAreaChart className='text-xl text-yellow' /> {seasonality}</span>

                  </div>
            </div >
      );
};

TouristSpot.propTypes = {
      touristSpot: PropTypes.object,
};

export default TouristSpot;