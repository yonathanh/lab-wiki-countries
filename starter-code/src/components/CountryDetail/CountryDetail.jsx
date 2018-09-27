import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            <Link
              className="list-group-item list-group-item-action"
              to={`/Card/${this.props.id}`}
            >
              {this.props.flag} {this.props.name}
            </Link>
          </a>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
