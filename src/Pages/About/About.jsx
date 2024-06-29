import { Helmet } from "react-helmet-async";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import TourGuide from "../../Components/TourGuide/TourGuide";

const About = () => {
      return (
            <div>
                  <Helmet>
                        <title>About | ExploreAsia</title>
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
                                    <h1 className='text-white text-center font-medium lg:text-6xl mb-4 animate__animated animate__zoomIn font-josefin lg:w-[60%]'>With Us, You Are Always In For A Pleasant Surprise</h1>
                                    <span className='text-lg text-white flex items-center gap-2 mb-4'>
                                          <Link to='/'>Home</Link> <MdKeyboardDoubleArrowRight className="text-yellow text-2xl" /> About Us

                                    </span>

                              </div>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between max-w-[1170px] mx-auto my-10 lg:my-20 items-center p-4 lg:p-0">
                              <div className=" min-h-[200px] lg:w-[45%]">
                                    <span className="text-yellow text-2xl text-left font-medium">About Us</span>
                                    <h2 className="text-blue font-sans font-medium w-fit font-josefin text-4xl md:text-5xl mt-1">Explore All Corners of The World With Us!</h2>
                                    <p className="text-[#666] text-base my-6">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

                                          A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                                    <button className="mt-3 px-7 md:px-10 py-4 md:py-5 relative rounded group overflow-hidden font-medium  inline-block bg-[#00095E] text-white">
                                          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                                          <span className="relative group-hover:text-white">Explores Destinations</span>
                                    </button>
                              </div>
                              <div className=" lg:w-[53%] flex flex-col md:flex-row gap-6 mt-6 lg:mt-0">
                                    <div className="h-[400px] md:w-1/2 lg:h-[330px]">
                                          <img className="w-full h-full object-cover lg:mt-8" src="https://i.ibb.co/PGyP5vn/5314.jpg" alt="" />
                                    </div>
                                    <div className="h-[400px] md:w-1/2 lg:h-[330px] lg:mt-[85px]">
                                          <img className="w-full h-full object-cover" src="https://i.ibb.co/m5NjqNz/2149868585.jpg" alt="" />
                                   </div>
                              </div>
                        </div>
                        <TourGuide />

                  </div>




            </div>
      );
};

export default About;