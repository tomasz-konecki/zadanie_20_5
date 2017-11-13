import { GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/actions-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: [],
    searchPhrase: '',
    continentSearch: ''
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country =>
                country.id === Number(action.id));
            return {...state, selectedCountry}

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => 
                country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return {...state, visibleCountries: foundCountries,
                            searchPhrase: action.searchText}

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country =>
                country.id !== Number(action.id));
            const notDeletedVisibleCountries = state.visibleCountries.filter(country =>
                country.id !== Number(action.id));
            return {...state, countries: notDeletedCountries,
                            visibleCountries: notDeletedVisibleCountries}

        case SET_CONTINENT:
            console.log("Continent: ", action.name);
            const continentCountries = state.countries.filter(country =>
                country.continent === action.name);
            return {...state, visibleCountries: continentCountries,
                            continentSearch: action.name}

        default:
            return state;
    }
};

export default countriesReducer;