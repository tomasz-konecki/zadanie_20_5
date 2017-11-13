import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/CountryDetails';


const mapStateToProps = (store) => {
    return {
        country: store.countriesReducer.selectedCountry
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountry: (id) => dispatch(getCountry(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);