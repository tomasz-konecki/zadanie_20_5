import { connect } from 'react-redux';
import { setContinent, deleteCountry, searchCountries } from '../actions/actions-countries';
import Continents from '../presentational/Continents';


const mapStateToProps = (store) => {
    return {
        visibleCountries: store.countriesReducer.continentSearch === ''
            ? store.countriesReducer.countries
            : store.countriesReducer.visibleCountries
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseContinent: (name) => dispatch(setContinent(name)),
        deleteCountry: (id) => dispatch(deleteCountry(id)),
        searchCountry: (phrase) => dispatch(searchCountries(phrase))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Continents);