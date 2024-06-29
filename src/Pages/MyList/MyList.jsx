import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import MyListTableRow from "./MyListTableRow/MyListTableRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyList = () => {

      const { user } = UseAuth();
      const email = user?.email;

      const [touristSpots, setTouristSpots] = useState([]);

      useEffect(() => {
            fetch(`http://localhost:5000/touristSpots/${email}`)
                  .then(res => res.json())
                  .then(data => setTouristSpots(data))
      }, [email]);

      const handleDelete = (id) => {

            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`http://localhost:5000/touristSpots/${id}`, {
                              method: 'DELETE'
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);
                                    if (data.deletedCount === 1) {
                                          console.log("Successfully deleted one document.");
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                          });

                                          const remaining = touristSpots?.filter(touristSpot => touristSpot?._id !== id);
                                          setTouristSpots(remaining);
                                    }
                              });
                  }
            });
      }

      return (
            <div className="mb-20">
                  <Helmet>
                        <title>My Spots List | ExploreAsia</title>
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
                                    <h1 className='text-white text-center font-medium lg:text-6xl mb-4 animate__animated animate__zoomIn font-josefin'>Travel far enough, You meet yourself</h1>
                                    <span className='text-lg text-white flex items-center gap-2 mb-4'>
                                          <Link to='/'>Home</Link> <MdKeyboardDoubleArrowRight className="text-yellow text-2xl" /> Tourist Spots You Added

                                    </span>

                              </div>
                        </div>
                  </div>

                  {
                        touristSpots?.length === 0 ?
                              <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                                    <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                              </div>
                              :
                              <div className="max-w-7xl p-2 mx-auto sm:p-4 dark:text-gray-800">

                                    <div className="overflow-x-auto">
                                          <table className="min-w-full text-lg">
                                                <colgroup>
                                                      <col />
                                                      <col />
                                                      <col />
                                                      <col />

                                                      <col className="w-24" />
                                                </colgroup>
                                                <thead className="dark:bg-gray-300">
                                                      <tr className="text-left">
                                                            <th className="text-blue text-base lg:text-xl p-3">Spot Name</th>
                                                            <th className="text-blue text-base lg:text-xl p-3">Travel Time</th>
                                                            <th className="text-blue text-base lg:text-xl p-3">Average Cost</th>
                                                            <th className="text-blue text-base lg:text-xl p-3">Season</th>
                                                            <th className="text-blue text-base lg:text-xl p-3">Status</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {
                                                            touristSpots?.map(touristSpot => <MyListTableRow
                                                                  key={touristSpot?._id}
                                                                  touristSpot={touristSpot}
                                                                  handleDelete={handleDelete}
                                                            ></MyListTableRow>)
                                                      }
                                                </tbody>


                                          </table>
                                    </div>
                              </div>
                  }

            </div>
      );
};

export default MyList;