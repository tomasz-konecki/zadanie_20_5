import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { searchCountries, deleteCountry } from '../actions/actions-countries';


const mapStateToProps = (store) => {
    return {
        visibleCountries: store.countriesReducer.searchPhrase === ''
            ? store.countriesReducer.countries
            : store.countriesReducer.visibleCountries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCountry: (id) => dispatch(deleteCountry(id)),
        searchCountry: (phrase) => dispatch(searchCountries(phrase))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagList)