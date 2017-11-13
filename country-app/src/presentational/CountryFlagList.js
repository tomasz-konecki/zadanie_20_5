import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './CountryFlag';

const CountryFlagList = (props) => (

    <div>
        <div className="search text-center">
            <input type="text" onChange={e => props.searchCountry(e.target.value)} />
        </div>

        <div className="countries-list">
            {props.visibleCountries.map(country => {
                return (
                    <div className="single-country" key={country.id}>
                        <Link className='logo' to={'/countries/country/' + country.id}>
                            <CountryFlag country={country} />
                        </Link>
                        <button onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
                    </div>
                )
            })}
        </div>

    </div>
);

export default CountryFlagList;