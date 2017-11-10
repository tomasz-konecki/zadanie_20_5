import { connect } from 'react-redux';
import { setContinent, deleteCountry, searchCountries } from '../actions/actions-countries';
import Continents from '../presentational/Continents';


const mapStateToProps = (store) => {
    return {
        visibleCountries: store.countriesReducer.countries.filter(country =>
                    country.continent === 'Europa')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseContinent: (name) => dispatch(setContinent(name)),
        deleteCountry: (id) => dispatch(deleteCountry(id)),
        searchCountry: (name) => dispatch(searchCountries(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Continents);
