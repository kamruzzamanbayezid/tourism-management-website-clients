

const Testimonials = () => {
      return (
            <div className="mb-10 lg:mb-20">
                  <div className="max-w-[1170px] mx-auto px-4 lg:px-0">
                        <span className="text-yellow text-xl text-left font-medium">Testimonials</span>
                        <h2 className="text-blue font-sans font-medium w-fit font-josefin text-4xl md:text-5xl mb-14 mt-1">What Customer Says!</h2>
                  </div>

                  <div className="carousel w-full h-[500px] testimonial-container bg-[url('https://i.ibb.co/VWdkJK5/8549.jpg')] bg-cover bg-center bg-no-repeat">

                        <div id="slide1" className="carousel-item relative w-full">

                              <div className="absolute inset-0 flex items-center justify-center md:pb-10 lg:pb-0">
                                    <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
                                          <div className="flex flex-col items-center space-y-6 md:p-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-yellow dark:text-violet-600">
                                                      <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                                                      <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                                                </svg>
                                                <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700 text-blue">My experience with this travel service was exceptional! The guides were knowledgeable and friendly, making every moment of my trip memorable. Highly recommended!</p>
                                                <div className="flex justify-center space-x-3 items-center">
                                                      <img src="https://i.ibb.co/bQCSqxP/5677.jpg" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500" />
                                                      <div>
                                                            <p className="leading-tight text-blue font-josefin text-lg font-bold">Alice Johnson</p>
                                                            <p className="text-sm leading-tight dark:text-gray-700 text-blue">Travel Blogger</p>
                                                            <a className="flex items-center py-2 space-x-1 text-sm dark:text-violet-600" href="/">
                                                                  <span>Read full story</span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                                  </svg>
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    </section>
                              </div>

                              <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-center lg:justify-end">
                                    <a href="#slide3" className="btn btn-circle bg-[#00095E] hover:bg-[#FFC800] text-white">❮</a>
                                    <a href="#slide2" className="btn btn-circle bg-[#00095E] hover:bg-[#FFC800] text-white">❯</a>
                              </div>
                        </div>

                        <div id="slide2" className="carousel-item relative w-full">

                              <div className="absolute inset-0 flex items-center justify-center md:pb-10 lg:pb-0">
                                    <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
                                          <div className="flex flex-col items-center space-y-6 md:p-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-yellow dark:text-violet-600">
                                                      <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                                                      <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                                                </svg>
                                                <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700 text-blue">he attention to detail and the level of service provided by the team were top-notch. They ensured that all my needs were met, and the destinations were breathtaking. I can't wait to travel with them again!</p>
                                                <div className="flex justify-center space-x-3 items-center">
                                                      <img src="https://i.ibb.co/YhRm0bN/profile.jpg" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500" />
                                                      <div>
                                                            <p className="leading-tight text-blue font-josefin text-lg font-bold">Mark Williams</p>
                                                            <p className="text-sm leading-tight dark:text-gray-700 text-blue">Photographer</p>
                                                            <a className="flex items-center py-2 space-x-1 text-sm dark:text-violet-600" href="/">
                                                                  <span>Read full story</span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                                  </svg>
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    </section>
                              </div>

                              <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-center lg:justify-end">
                                    <a href="#slide1" className="btn btn-circle bg-[#00095E] hover:bg-[#FFC800] text-white">❮</a>
                                    <a href="#slide3" className="btn btn-circle bg-[#00095E] hover:bg-[#FFC800] text-white">❯</a>
                              </div>
                        </div>

                        <div id="slide3" className="carousel-item relative w-full">

                              <div className="absolute inset-0 flex items-center justify-center md:pb-10 lg:pb-0">
                                    <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
                                          <div className="flex flex-col items-center space-y-6 md:p-8">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 text-yellow dark:text-violet-600">
                                                      <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                                                      <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                                                </svg>
                                                <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700 text-blue">I had an amazing adventure! The travel plans were well-organized, and the guides were very professional. It was an unforgettable experience, and I would definitely recommend it to anyone looking for an exciting trip.</p>
                                                <div className="flex justify-center space-x-3 items-center">
                                                      <img src="https://i.ibb.co/qJY1Nsj/3542.jpg" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500" />
                                                      <div>
                                                            <p className="leading-tight text-blue font-josefin text-lg font-bold">Sophia Martinez</p>
                                                            <p className="text-sm leading-tight dark:text-gray-700 text-blue">Photographer</p>
                                                            <a className="flex items-center py-2 space-x-1 text-sm dark:text-violet-600" href="/">
                                                                  <span>Read full story</span>
                                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                                                  </svg>
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>
                                    </section>
                              </div>

                              <div className="absolute left-5 right-5 bottom-5 flex gap-3 transform justify-center lg:justify-end">
                                    <a href="#slide2" className="btn btn-circle bg-[#00095E] hover:bg-[#FFC800] text-white">❮</a>
                                    <a href="#slide1" className="btn btn-circle bg-[#00095E] hover:bg-[#FFC800] text-white">❯</a>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Testimonials;