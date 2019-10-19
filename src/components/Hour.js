import React, {Component} from 'react';
import "./Hour.css"
import {connect} from "react-redux";
import {addHour} from "../redux/actions";

class Hour extends Component {

  addHour = async () => {
    try {
      const response = await patchData('http://localhost:3001/teacher/hour', {
        "teacherId": "5dab71fff96f90348007ed67",
        "dayIndex": this.props.dayIndex,
        "hourIndex": this.props.hourIndex
      });
      if (response.updated) {
        this.props.addHour(this.props.dayIndex, this.props.hourIndex)
      } else {
        console.error('didnt add')
      }
    } catch (error) {
      console.error(error);
    }

    async function patchData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }

  }

  render() {
    return (
      <div className="Hour" onClick={this.addHour}>
        {
          this.props.isLit && 'lit'
        }
      </div>
    );
  }
}

export default connect(
  null,
  {addHour}
)(Hour);
