import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { searchCountries, deleteCountry } from '../actions/actions-countries';

class CountryFlagContainer extends Component {

/*
    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }

   deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }    
*/
    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.props.searchCountry} />
                </div>
                <CountryFlagList countries={this.props.visibleCountries}
                    deleteCountry={this.props.deleteCountry} />
            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagContainer)