import PropTypes from 'prop-types';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyListTableRow = ({ touristSpot, handleDelete, index }) => {


      const { _id, spotName, countryName, image, averageCost, seasonality, travelTime } = touristSpot || {};

      return (
            <tr>
                  <th>
                        <span className='text-xl text-blue'>{index + 1}</span>
                  </th>
                  <td>
                        <div className="flex items-center gap-3">
                              <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                          <img
                                                src={image}
                                                alt="Avatar Tailwind CSS Component" />
                                    </div>
                              </div>
                              <div>
                                    <div className="font-bold font-josefin text-blue text-base lg:text-lg">{spotName}</div>
                                    <div className="text-sm opacity-50">{countryName}</div>
                              </div>
                        </div>
                  </td>
                  <td>
                        <span className='text-blue'>{travelTime}</span>
                        <br />
                        <span className="badge badge-ghost text-blue badge-sm hidden md:flex">{seasonality}</span>
                  </td>
                  <td className='text-blue font-bold'>$ {averageCost}</td>
                  <th className="p-3 text-right text-[#666] flex items-center gap-3">
                        {/* update spot */}
                        <Link to={`/updateTouristSpot/${_id}`}>
                              <span className='text-[#666] text-3xl text-blue cursor-pointer'><CiEdit /></span>
                        </Link>

                        {/* delete spot */}
                        <span onClick={() => handleDelete(_id)} className='text-[#666] text-3xl text-blue cursor-pointer'><MdDelete className='hover:text-yellow-500'/></span>
                  </th>
            </tr>

      );
};

MyListTableRow.propTypes = {
      touristSpot: PropTypes.object,
      handleDelete: PropTypes.func,
      index: PropTypes.number
};

export default MyListTableRow;