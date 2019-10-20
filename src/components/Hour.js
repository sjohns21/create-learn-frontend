import React, {Component} from 'react';
import "./Hour.css"
import {connect} from "react-redux";
import {hourToggle} from "../redux/actions";

class Hour extends Component {

  hourToggle = async () => {
    try {
      const response = await fetch('http://localhost:3001/teacher/hour', {
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({
          "teacherId": "5dab71fff96f90348007ed67",
          "dayIndex": this.props.dayIndex,
          "hourIndex": this.props.hourIndex
        }) // body data type must match "Content-Type" header
      });
      const data = await response.json()
      if (data.updated) {
        this.props.hourToggle(this.props.dayIndex, this.props.hourIndex)
      } else {
        console.error('didnt toggle')
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {

    return (
      <div className="Hour" onClick={(this.props.status !== 2) ? this.hourToggle : null}>
        {/*{*/}
        {/*  this.props.status === 0 && 'notAvailable'*/}
        {/*}*/}
        {
          this.props.status === 1 && 'isAvailable'
        }
        {
          this.props.status === 2 && 'class'
        }
      </div>
    );
  }
}

export default connect(
  null,
  {hourToggle}
)(Hour);
