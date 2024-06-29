import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateTouristSpot = () => {

      const loadedTouristSpot = useLoaderData();

      // const { image, spotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, description } = loadedTouristSpot || {};

      const [spotName, setSpotName] = useState(loadedTouristSpot?.spotName);
      const [countryName, setCountryName] = useState(loadedTouristSpot?.countryName);
      const [image, setImage] = useState(loadedTouristSpot?.image);
      const [location, setLocation] = useState(loadedTouristSpot?.location);
      const [averageCost, setAverageCost] = useState(loadedTouristSpot?.averageCost);
      const [seasonality, setSeasonality] = useState(loadedTouristSpot?.seasonality);
      const [travelTime, setTravelTime] = useState(loadedTouristSpot?.travelTime);
      const [totalVisitorsPerYear, setTotalVisitorsPerYear] = useState(loadedTouristSpot?.totalVisitorsPerYear);
      const [description, setDescription] = useState(loadedTouristSpot?.description)

      const handleUpdateTouristSpot = (e) => {
            e.preventDefault();

            const formData = {
                  image,
                  spotName,
                  countryName,
                  location,
                  averageCost,
                  seasonality,
                  travelTime,
                  totalVisitorsPerYear,
                  description,
            };

            fetch(`http://localhost:5000/touristSpotDetails/${loadedTouristSpot?._id}`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(formData)
            })
                  .then(res => res.json())
                  .then(data => {
                        
                        if (data.modifiedCount === 1) {
                              toast.success('Tourist Spot update Successfully!')
                        }
                  })
      }

      return (
            <div className="max-w-7xl mx-auto my-8 md:my-14">
                  <Helmet>
                        <title>Update Spot | ExploreAsia</title>
                  </Helmet>
                  <div className="max-w-7xl mx-auto flex items-center flex-col gap-4 justify-center text-center">
                        <h1 className="text-blue font-bold text-5xl font-josefin  relative z-20">Update Tourist Spot!</h1>
                        <span className="-mt-8 md:-mt-8 mb-4 h-3 w-[470px] common-bg relative z-0"></span>

                  </div>

                  <form onSubmit={handleUpdateTouristSpot} className="lg:w-4/5 p-4 mx-auto">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                              <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tourists Spot Name</label>
                                    <input value={spotName}
                                          onChange={(e) => setSpotName(e.target.value)} type="text" id="spot_name" name="spotName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tourists Spot Name" required />
                              </div>
                              <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country Name</label>
                                    <input value={countryName}
                                          onChange={(e) => setCountryName(e.target.value)} type="text" id="country_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country Name" required />
                              </div>
                              <div>
                                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                                    <input name="type"
                                          value={location}
                                          onChange={(e) => setLocation(e.target.value)}
                                          type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="location" required />
                              </div>
                              <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Average Cost
                                    </label>
                                    <input type="number"
                                          name="price"
                                          value={averageCost}
                                          onChange={(e) => setAverageCost(e.target.value)} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Average Cost" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                              </div>
                              <div>
                                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seasonality</label>
                                    <select value={seasonality} onChange={(e) => setSeasonality(e.target.value)} className="select bg-gray-50 min-h-11 h-11 select-bordered w-full">
                                          <option disabled value=''>Seasonality</option>
                                          <option value='Summer'>Summer</option>
                                          <option value='Winter'>Winter</option>
                                          <option value='Rainy Season'>Rainy Season</option>
                                          <option value='Autumn'>Autumn</option>
                                          <option value='Late Autumn'>Late Autumn</option>
                                          <option value='Spring'>Spring</option>
                                    </select>
                              </div>
                              <div>
                                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input name="image"
                                          value={image}
                                          onChange={(e) => setImage(e.target.value)} type="url" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                              </div>
                              <div>
                                    <label htmlFor="travel_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Travel Time</label>
                                    <input value={travelTime}
                                          onChange={(e) => setTravelTime(e.target.value)} type="text" id="travel_time" name="travel_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=">Travel Time" required />
                              </div>
                              <div>
                                    <label htmlFor="totalVisitorsPerYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Visitors Per Year</label>
                                    <input value={totalVisitorsPerYear}
                                          onChange={(e) => setTotalVisitorsPerYear(e.target.value)} type="number" id="totalVisitorsPerYear" name="totalVisitorsPerYear" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=">Total Visitors Per Year" required />
                              </div>
                        </div>
                        <div className="mb-6">
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort Description</label>
                              <textarea name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} rows="3" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Description" required />
                        </div>

                        <button type="submit" className="text-white common-bg  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>

                  </form>

            </div>
      );
};

export default UpdateTouristSpot;