import { Link, useLoaderData } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { IoFootsteps, IoLocationSharp } from "react-icons/io5";
import { IoIosPeople, IoIosPricetags } from "react-icons/io";
import { FaPersonHiking } from "react-icons/fa6";
import CommonButton from "../CommonButton/CommonButton";
import { Helmet } from "react-helmet-async";


const TouristSpotDetails = () => {

      const loadedTouristSpot = useLoaderData();
      const { image, spotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, description } = loadedTouristSpot || {};


      return (
            <div className="lg:mb-20">
                  <Helmet>
                        <title>Spot Details | ExploreAsia</title>
                  </Helmet>
                  <div className="lg:my-10 mb-5">

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
                                    <h1 className='text-white text-center font-medium lg:text-6xl mb-4 animate__animated animate__zoomIn font-josefin'>Package Details</h1>
                                    <span className='text-lg text-white flex items-center gap-2 mb-4'>
                                          <Link to='/'>Home</Link> <MdKeyboardDoubleArrowRight className="text-yellow text-2xl" /> Package details

                                    </span>

                              </div>
                        </div>
                  </div>

                  <div className="p-4 lg:p-0 flex flex-col lg:flex-row justify-between max-w-7xl mx-auto lg:mt-20">

                        <div className=" lg:w-[59%]">
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 my-5">

                                    <div className="flex items-center gap-2">
                                          <BiTime className="text-3xl text-yellow" />
                                          <div className="flex flex-col">
                                                <span className="text-blue font-semibold">Duration</span>
                                                <span className="text-[#666666] text-sm">{travelTime}</span>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <IoFootsteps className="text-3xl text-yellow" />
                                          <div className="flex flex-col">
                                                <span className="text-blue font-semibold">Tour Type
                                                </span>
                                                <span className="text-[#666666] text-sm">Daily Tour</span>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <IoIosPeople className="text-3xl text-yellow" />
                                          <div className="flex flex-col">
                                                <span className="text-blue font-semibold">Group Size

                                                </span>
                                                <span className="text-[#666666] text-sm">20 People</span>
                                          </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                          <FaPersonHiking className="text-3xl text-yellow" />
                                          <div className="flex flex-col">
                                                <span className="text-blue font-semibold">Tour Guide


                                                </span>
                                                <span className="text-[#666666] text-sm">5 Guide</span>
                                          </div>
                                    </div>
                              </div>
                              <img className="mb-6" src={image} alt="" />
                              <div className="flex justify-between items-start">
                                    <div>
                                          <h1 className="text-blue text-4xl font-bold font-josefin">{spotName}</h1>
                                          <span className='text-base font-semibold text-[#666] flex items-center gap-2 mb-2'><IoLocationSharp className='text-2xl text-yellow' /> {location}</span>
                                          
                                    </div>
                                    <div className='flex items-center gap-3 px-3 py-1 md:px-7 md:py-3 common-bg'>
                                          <IoIosPricetags className='text-2xl md:text-4xl text-white' />

                                          <div className="">
                                                <p className='text-white font-medium md:text-2xl'>${averageCost}</p>
                                          </div>
                                    </div>
                              </div>
                              
                              <hr className="my-5" />
                              <p className="text-[#666] text-sm">{description}</p>
                              <hr className="my-5" />

                              {/* table */}
                              <div className="my-8">
                                    <table className="w-full">

                                          <tbody>

                                                <tr className="border">
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">Destination</td>
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">{spotName}</td>
                                                </tr>
                                                <tr className="border">
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">Country</td>
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">{countryName}</td>
                                                </tr>
                                                <tr className="border">
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">Depature</td>
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">Yes required</td>
                                                </tr>
                                                <tr className="border">
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">Average Cost</td>
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">${averageCost}</td>
                                                </tr>

                                                <tr className="border">
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">Visitors Per Year</td>
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">{totalVisitorsPerYear}</td>
                                                </tr>

                                                <tr className="border">
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">Season</td>
                                                      <td className="border py-3 px-6 text-blue font-medium text-lg">{seasonality}</td>
                                                </tr>


                                          </tbody>
                                    </table>
                              </div>
                        </div>

                        {/* right part */}
                        <div className=" lg:w-[39%]">

                              <div className="bg-[#00095E] flex items-center justify-between py-3 px-6">
                                    <h1 className=" text-white font-josefin text-3xl">Book This Tour</h1>
                                    <p className='text-yellow font-medium md:text-2xl'>${averageCost}</p>
                              </div>

                              <div className="">
                                    <div className="">

                                          <div className="w-full shrink-0 shadow-2xl">
                                                <form className="card-body">
                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text text-blue font-medium">Your Full Name</span>
                                                            </label>
                                                            <input type="text" placeholder="your full name" className="input input-bordered rounded-full" required />
                                                      </div>
                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text text-blue font-medium">Email</span>
                                                            </label>
                                                            <input type="email" placeholder="email" className="input input-bordered rounded-full" required />
                                                      </div>
                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text text-blue font-medium ">Phone</span>
                                                            </label>
                                                            <input type="number" placeholder="your number" className="input input-bordered rounded-full" required />

                                                      </div>
                                                      <div className="form-control">
                                                            <label className="label">
                                                                  <span className="label-text text-blue font-medium ">Select Your Date</span>
                                                            </label>
                                                            <input type="date" placeholder="Select your date" className="input input-bordered rounded-full" required />

                                                      </div>

                                                      <div>
                                                            <label className="label">
                                                                  <span className="label-text text-blue font-medium ">Message</span>
                                                            </label>
                                                            <textarea rows='5' className="border w-full p-4 rounded-2xl" name="" id="" placeholder="Write your Message"></textarea>
                                                      </div>


                                                      <div className="form-control mt-6">
                                                            <CommonButton text='Book Now' width="100%" />
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>

                              <img className="w-full mt-10" src="https://i.ibb.co/VCtXC12/9906308-4304705.jpg" alt="" />
                        </div>
                  </div>

            </div>
      );
};

export default TouristSpotDetails;