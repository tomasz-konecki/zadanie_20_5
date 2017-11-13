import React from 'react';

class CountryDetails extends React.Component {

componentDidMount() {
    this.props.getCountry(this.props.params.id);
}

render() {
    return (
        <div className="country-wrapper">
            <header>
                <img className="country-photo" src={this.props.country.imageUrl} alt="" />
            </header>
            <div className="country-info">
                <h1>{this.props.country.name}</h1>
                <h2>Kontynent: {this.props.country.continent}</h2>
                <div className="info">
                    <div>
                        <span>{this.props.country.populace}</span>
                        <span>Ludność[mln]</span>
                    </div>
                    <div>
                        <span>{this.props.country.capital}</span>
                        <span>Stolica</span>
                    </div>
                    <div>
                        <span>{this.props.country.currency}</span>
                        <span>Waluta</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

};

export default CountryDetails;