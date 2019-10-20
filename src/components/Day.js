import React, {Component} from 'react';
import "./Day.css"
import Hours from "./Hours";

class Day extends Component {
  render() {
    return (
      <div className="Day">
        <Hours dayIndex={this.props.dayIndex} hours={this.props.hours}/>
      </div>
    );
  }
}

Day.propTypes = {};

export default Day;
