import React, { Component } from "react";
import countries from "../../countries.json";
import CountryDetail from "../CountryDetail/CountryDetail";
import Card from "../Card/Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: countries
    };
  }

  showCountries = () => {
    return this.state.countries.map((oneCountry, index) => {
      return (
        <CountryDetail
          key={index}
          id={oneCountry.cca3}
          name={oneCountry.name.official}
          flag={oneCountry.flag}
          //plusClickHandler={() => this.plusFood(index)}
        />
      );
    });
  };
  render() {
    console.log(countries[0].cca3);

    return (
      <div className="list-group">
        <div style={{ height: "600px", overflow: "scroll" }}>
          {this.showCountries()}
        </div>
      </div>
    );
  }
}

export default Home;
