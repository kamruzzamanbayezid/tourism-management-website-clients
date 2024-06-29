import PropTypes from 'prop-types';
import './Country.css'
import { Link } from 'react-router-dom';

const Country = ({ country }) => {

      const { country_name, image, description } = country || {};

      return (

            <Link to={`/specificCountry/${country_name}`}>
                  <div className="country-card bg-base-100 shadow-xl">
                        <figure className="">
                              <img
                                    src={image}
                                    alt={country_name}
                              />
                        </figure>
                        <div className="p-4">
                              <h2 className="card-title font-josefin text-blue text-2xl font-bold mb-2">{country_name}</h2>
                              <p className='text-[#666] text-sm'>{description}</p>
                        </div>
                  </div>
            </Link>
      );
};

Country.propTypes = {
      country: PropTypes.object
}

export default Country;