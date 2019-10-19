import React, {Component} from 'react';
import "./Day.css"
import Hours from "./Hours";

class Day extends Component {
  render() {
    return (
      <div className="Day">
        {/*Day*/}
        <Hours/>
      </div>
    );
  }
}

Day.propTypes = {};

export default Day;
