import React from 'react';
import CountryFlagList from '../presentational/CountryFlagList';

const Continents = (props) => ({

    render() {
        return (
            <div>
                <select onChange={e => props.chooseContinent(e.target.value)}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>

                <CountryFlagList visibleCountries={props.visibleCountries}
                    deleteCountry={props.deleteCountry} searchCountry={props.searchCountry}/>

            </div>
        )
    }
})

export default Continents;