import './TourGallery.css'

const TourGallery = () => {
      return (
            <div className=" mb-10 lg:mb-20">
                  <div className="max-w-[1170px] mx-auto p-4 lg:p-0">

                        <h2 className="text-blue font-sans font-medium w-fit font-josefin text-4xl md:text-5xl mb-14 mt-1">Travel Gallery!</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12 gap-6 gallery">

                              <div className="lg:col-span-4 lg:row-span-8">
                                    <img className='w-full h-[250px] md:h-full rounded-lg object-cover' src="https://i.ibb.co/6N7cYrs/124649.jpg" alt="" />
                              </div>
                              <div className="flex flex-col gap-6 lg:col-span-4 lg:row-span-8">
                                    <img className='w-full h-[250px] md:h-full rounded-lg object-cover' src="https://i.ibb.co/SsdCDLh/57186.jpg" alt="" />
                                    <img className='w-full h-[250px] md:h-full rounded-lg object-cover' src="https://i.ibb.co/J7pspdH/1094.jpg" alt="" />
                              </div>
                              <div className="lg:col-span-4 lg:row-span-8">
                                    <img className='w-full h-[250px] md:h-full rounded-lg object-cover' src="https://i.ibb.co/S7xq9Hv/2293.jpg" alt="" />
                              </div>
                              <div className="lg:col-span-4 lg:row-span-4">
                                    <img className='w-full h-[250px] md:h-full rounded-lg object-cover' src="https://i.ibb.co/stqvgQ0/2149520423.jpg" alt="" />
                              </div>
                              <div className="lg:col-span-4 lg:row-span-4">
                                    <img className='w-full h-[250px] md:h-full rounded-lg object-cover' src="https://i.ibb.co/jR86N3F/2149270114.jpg" alt="" />
                              </div>
                              <div className="lg:col-span-4 lg:row-span-4">
                                    <img className='w-full h-[250px] md:h-full rounded-lg object-cover' src="https://i.ibb.co/x3yWFv2/1356-1.jpg" alt="" />
                              </div>
                        </div>

                  </div>

            </div>
      );
};

export default TourGallery;