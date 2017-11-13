import React from 'react';
import CountryFlagList from '../presentational/CountryFlagList';

const Continents = (props) => (

    <div>
        <p>Select continent</p>
        <select onChange={e => props.chooseContinent(e.target.value)}>
            <option value=""></option>
            <option value="Europa">Europa</option>
            <option value="Afryka">Afryka</option>
        </select>

        <CountryFlagList visibleCountries={props.visibleCountries}
            deleteCountry={props.deleteCountry} searchCountry={props.searchCountry} />
            
    </div>

)


export default Continents;