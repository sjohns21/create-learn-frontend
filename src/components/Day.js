import React, {Component} from 'react';
import "./Day.css"
import Hours from "./Hours";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class Day extends Component {
  render() {
    return (
      <div className="Day">
        <div className="name">{days[this.props.dayIndex]}</div>
        <Hours dayIndex={this.props.dayIndex} hours={this.props.hours}/>
      </div>
    );
  }
}

export default Day;
