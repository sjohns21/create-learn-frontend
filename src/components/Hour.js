import React, {Component} from 'react';
import "./Hour.css"
import {connect} from "react-redux";
import {hourToggle} from "../redux/actions";
import {API_BASE} from "../constants"

export function toPrettyHour(hourIndex) {
  let hour = hourIndex;
  let amPm = "AM";
  if (hour >= 12) {
    amPm = "PM";
    hour -= 12
  }
  if (hour === 0) hour = 12;
  return `${hour} ${amPm}`
}

class Hour extends Component {

  hourToggle = async () => {
    try {
      const response = await fetch(`${API_BASE}/teacher/hour`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "dayIndex": this.props.dayIndex,
          "hourIndex": this.props.hourIndex
        })
      });
      const data = await response.json();
      if (data.updated) {
        window.alert('availability updated!');
        this.props.hourToggle(this.props.dayIndex, this.props.hourIndex)
      } else {
        window.alert('availability not updated, please try again!')
      }
    } catch (error) {
      window.alert('availability not updated, please try again!');
      console.error(error);
    }
  };

  render() {

    let cssClass = "Hour ";
    switch (this.props.status) {
      case 0:
        cssClass += "notAvailable";
        break;
      case 1:
        cssClass += "isAvailable";
        break;
      case 2:
        cssClass += "class";
        break;
      default:
        cssClass += "notAvailable";
        break;
    }

    if (this.props.dayIndex === 0) {
      cssClass += " showTime"
    }
    return (
      <div data-hourindex={toPrettyHour(this.props.hourIndex)} className={cssClass}
           onClick={(this.props.status !== 2) ? this.hourToggle : null}>
      </div>
    );
  }
}

export default connect(
  null,
  {hourToggle}
)(Hour);
