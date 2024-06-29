import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// custom css
import './Slider.css'

const Slider = () => {

      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };

      return (
            <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                  }}
                  pagination={{
                        clickable: true,
                  }}
                  // navigation={true}
                  modules={[Autoplay, Pagination]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper mt-10 lg:mt-0 mb-10"
            >
                  <SwiperSlide>
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
                              <div className='slider-text relative z-10  flex flex-col  justify-center items-center md:items-start md:pl-20 h-[80vh] md:h-[80vh] w-[100vw]'>
                                    <h1 className='text-white font-medium font-josefin text-2xl md:text-4xl lg:text-7xl mb-4 lg:anima md:w-[60%] te__animated animate__lightSpeedInRight lg:w-[50%] text-center md:text-start'>It is Better to Travel Well Than to Arrive</h1>
                                    <button className="px-7 md:px-10 py-4 md:py-5 relative rounded group overflow-hidden font-medium  inline-block bg-[#00095E] text-white">
                                          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                                          <span className="relative group-hover:text-white">Explores Now</span>
                                    </button>
                              </div>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className='relative'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/XFNdR6w/1356.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='slider-text relative z-10  flex flex-col  justify-center items-center md:items-start md:pl-20 h-[80vh] md:h-[80vh] w-[100vw]'>
                                    <h1 className='text-white font-medium text-2xl md:text-4xl lg:text-7xl mb-4 lg:w-[50%] md:w-[60%] text-center md:text-start font-josefin'>It is Better to Travel Well Than to Arrive</h1>


                                    <button className="px-7 md:px-10 py-4 md:py-5 relative rounded group overflow-hidden font-medium  inline-block bg-[#00095E] text-white">
                                          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                                          <span className="relative group-hover:text-white">Explores Now</span>
                                    </button>
                              </div>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className='relative'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/PryM3xH/2149153258.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='slider-text relative z-10  flex flex-col  justify-center items-center md:items-start md:pl-20 h-[80vh] md:h-[80vh] w-[100vw]'>
                                    <h1 className='text-white font-medium font-josefin text-2xl md:text-4xl lg:text-7xl mb-4 lg:w-[50%] md:w-[60%] text-center md:text-start'>It is Better to Travel Well Than to Arrive</h1>

                                    <button className="px-7 md:px-10 py-4 md:py-5 relative rounded group overflow-hidden font-medium  inline-block bg-[#00095E] text-white">
                                          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                                          <span className="relative group-hover:text-white">Explores Now</span>
                                    </button>
                              </div>
                        </div>
                  </SwiperSlide>

                  <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                              <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                  </div>
            </Swiper>
      );
};

export default Slider;