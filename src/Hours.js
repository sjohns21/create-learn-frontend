import React, {Component} from 'react';
import "./Hours.css"
import Hour from "./Hour";


class Hours extends Component {
  render() {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(
        <Hour/>
      )
    }
    return (
      <div className="Hours">
        {hours}
      </div>
    );
  }
}

export default Hours;
