import PropTypes from 'prop-types';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyListTableRow = ({ touristSpot, handleDelete }) => {


      const { _id, spotName, averageCost, seasonality, travelTime } = touristSpot || {};

      return (
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                        <p className='text-sm lg:text-lg text-[#666]'>{spotName}</p>
                  </td>
                  <td className="p-3">
                        <p className='text-sm lg:text-lg text-[#666]'>{travelTime}</p>
                  </td>
                  <td className="p-3">
                        <p className='text-sm lg:text-lg text-[#666]'>${averageCost}</p>
                  </td>
                  <td className="p-3">
                        <p className="text-sm lg:text-lg dark:text-gray-600 text-[#666]">{seasonality}</p>
                  </td>

                  <td className="p-3 text-right text-[#666] flex items-center gap-3">

                        {/* update spot */}
                        <Link to={`/updateTouristSpot/${_id}`}>
                              <span className='text-[#666] text-3xl text-blue cursor-pointer'><CiEdit /></span>
                        </Link>

                        {/* delete spot */}
                        <span onClick={() => handleDelete(_id)} className='text-[#666] text-3xl text-blue cursor-pointer'><MdDelete /></span>
                  </td>
            </tr>

      );
};

MyListTableRow.propTypes = {
      touristSpot: PropTypes.object,
      handleDelete: PropTypes.func
};

export default MyListTableRow;