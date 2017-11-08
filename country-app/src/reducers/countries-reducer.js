import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, countries: state.countries}

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country =>
                country.id === parseInt(action.id));
            return {...state, selectedCountry}

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => 
                country.name.toLowerCase()
                .includes(action.searchText.toLowerCase()));
            return {...state, visibleCountries: foundCountries}

      case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country =>
                country.id !== parseInt(action.id));
            const notDeletedVisibleCountries = state.visibleCountries.filter(country =>
                country.id !== parseInt(action.id));
            return {...state, countries: notDeletedCountries,
                visibleCountries: notDeletedVisibleCountries}

        default:
            return state;
    }
};

export default countriesReducer;