import React, {Component} from 'react';
import Hour from "./Hour";

class Hours extends Component {
  render() {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(
        <Hour key={i} dayIndex={this.props.dayIndex} hourIndex={i} status={this.props.hours[i]}/>
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
