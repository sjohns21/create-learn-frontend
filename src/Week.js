import React, {Component} from 'react';
import "./Week.css"
import Day from "./Day";

class Week extends Component {
  render() {
    return (
      <div className="Week">
        {/*<Hours/>*/}
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
        <Day/>
      </div>
    );
  }
}

export default Week;
