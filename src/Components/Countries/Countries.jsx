import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

      const [countries, setCountries] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/countries')
                  .then(res => res.json())
                  .then(data => setCountries(data))
      }, [])

      return (
            <div className="pb-10 lg:pb-20 ">
                  <div className="max-w-[1170px] mx-auto p-4 lg:p-0">

                        <h2 className="text-blue font-sans font-medium w-fit font-josefin text-4xl md:text-5xl mb-14">Popular destinations in 2024!</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                              {
                                    countries?.map((country, idx) => <Country key={idx} country={country}></Country>)
                              }
                        </div>
                  </div>

            </div>
      );
};

export default Countries;