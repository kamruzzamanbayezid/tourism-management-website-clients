import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Guide.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from "swiper/modules";



const TourGuide = () => {

      const [tourGuide, setTourGuide] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/tourGuides')
                  .then(res => res.json())
                  .then(data => setTourGuide(data))
      }, [])

      return (
            <div className="py-10 lg:py-20 mb-10 lg:mb-20 bg-[#f3f4f9]">
                  <div className="max-w-[1170px] mx-auto p-4 lg:p-0">

                        <span className="text-yellow text-xl text-left font-medium">Tour Guide</span>
                        <h2 className="text-blue font-sans font-medium w-fit font-josefin text-4xl md:text-5xl mb-14 mt-1">Experience The World With Us!</h2>

                        <Swiper
                              slidesPerView={1}
                              spaceBetween={30}
                              freeMode={true}
                              pagination={{
                                    clickable: true,
                              }}
                              breakpoints={{
                                    640: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                    },
                                    768: {
                                          slidesPerView: 2,
                                          spaceBetween: 30,
                                    },
                                    1024: {
                                          slidesPerView: 3,
                                          spaceBetween: 30,
                                    },
                              }}
                              modules={[FreeMode, Pagination]}
                              className="mySwiper"
                        >
                              {
                                    tourGuide?.map((guide, i) => <SwiperSlide key={i}>
                                          <div className="guide-card">
                                                <figure className="guide-image flex items-center justify-center">
                                                      <img
                                                            src={guide?.image}
                                                            alt={guide?.name}
                                                            className=''
                                                      />
                                                      <div className='social-icon flex justify-center items-end'>
                                                            <ul className='flex items-center gap-4 pb-10'>
                                                                  <li>
                                                                        <a className='text-3xl text-yellow' href="#"><FaFacebook /></a>
                                                                  </li>
                                                                  <li>
                                                                        <a className='text-3xl text-yellow' href="#"><FaInstagram /></a>
                                                                  </li>
                                                                  <li>
                                                                        <a className='text-3xl text-yellow' href="#"><FaTwitter /></a>
                                                                  </li>
                                                            </ul>
                                                      </div>
                                                </figure>
                                                <div className="p-4 flex flex-col items-start">
                                                      <h2 className="card-title text-blue font-josefin text-2xl font-bold mb-2">{guide?.name}</h2>
                                                      <p className='text-[#666] text-lg text-yellow'>{guide?.designation}</p>
                                                </div>
                                          </div>
                                    </SwiperSlide>)
                              }
                        </Swiper>
                  </div>

            </div>
      );
};

export default TourGuide;