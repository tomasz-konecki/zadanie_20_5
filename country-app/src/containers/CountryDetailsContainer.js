import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actions-countries';
import CountryDetails from '../presentational/CountryDetails';

class CountryDetailsContainer extends Component {
    
    
    componentDidMount() {
        this.props.dispatch(getCountry(this.props.params.id));
    }

    render() {
        return (
            <CountryDetails country={this.props.selectedCountry} />
        )
    }
}


const mapStateToProps = (store) => {
    return {
        selectedCountry: store.countriesReducer.selectedCountry
    };
};


export default connect(mapStateToProps)(CountryDetailsContainer);