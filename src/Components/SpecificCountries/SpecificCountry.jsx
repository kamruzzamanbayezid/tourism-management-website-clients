import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SpecificCountry = ({ specificCountry }) => {

      const { _id, image, spotName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, description, name } = specificCountry || {};

      return (
            <div>
                  <div className="dark:bg-gray-100 dark:text-gray-900 mb-10 lg:max-w-5xl lg:mx-auto shadow-md p-6">
                        <div className="grid grid-cols-12 gap-6 mx-auto dark:bg-gray-50">
                              <div className="bg-no-repeat bg-cover dark:bg-gray-300 col-span-full lg:col-span-4">
                                    <img className='w-full h-full' src={image} alt="" />
                              </div>

                              <div className="flex flex-col col-span-full row-span-full lg:col-span-8 ">
                                    <span className='text-sm font-semibold text-[#666] flex items-center gap-2 '><IoLocationSharp className='text-xl text-yellow' /> {location}</span>
                                    <h1 className="text-3xl text-blue font-semibold">{spotName}</h1>

                                    <div className='flex flex-wrap items-center gap-3 my-2'>
                                          <span className="text-xs bg-[#00095E] text-white px-4 py-1 rounded font-medium font-josefin">{travelTime}</span>

                                          <span className="text-xs bg-[#00095E] text-white px-4 py-1 rounded font-medium font-josefin">${averageCost}</span>

                                          <span className="text-xs bg-[#00095E] text-white px-4 py-1 rounded font-medium font-josefin">{seasonality}</span>

                                    </div>

                                    <p className=" text-sm text-[#666] pt-2">{description}</p>
                                    <span className="text-sm font-bold text-blue mt-2">Visitors Per Year: {totalVisitorsPerYear}</span>

                                    <div className="flex flex-wrap items-center justify-between pt-2">
                                          <div className="flex space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow dark:text-gray-600">
                                                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="self-center text-blue text-sm">by {name}</span>
                                          </div>
                                          <Link to={`/touristSpotDetails/${_id}`} className="inline-flex items-center pt-2 pb-2 space-x-2 text-sm dark:text-violet-600">
                                                <span className='text-blue hover:underline'>View Details</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow">
                                                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                </svg>
                                          </Link>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

SpecificCountry.propTypes = {
      specificCountry: PropTypes.object,
      setCountry: PropTypes.func
};

export default SpecificCountry;