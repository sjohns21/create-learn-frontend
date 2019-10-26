import React, {Component} from 'react';
import "./Week.css"
import Day from "./Day";
import {toPrettyHour} from "./Hour"
import {connect} from "react-redux";
import {hourInit} from "../redux/actions";
import {API_BASE} from "../constants"

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayIndex: 0,
      start: 0,
      end: 0
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: Number(e.target.value)})
  };

  addClass = async () => {
    const {dayIndex, start, end} = this.state;

    let windowIsAvailable = true;
    for (let i = start; i <= end; i++) {
      const status = this.props.hours[dayIndex][i];
      if (status === 0 || status === 2) {
        windowIsAvailable = false;
        window.alert("this time block is not available!");
        break
      }
    }
    if (windowIsAvailable) {
      try {
        const response = await fetch(`${API_BASE}/teacher/class`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            dayIndex,
            start,
            end
          })
        });
        const data = await response.json();
        if (data.classAdded) {
          window.alert('class added!');
          this.fetchHours()
        } else {
          console.error('class not added, please try again!')
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  componentDidMount() {
    this.fetchHours()
  }

  fetchHours = async () => {
    try {
      const response = await fetch(`${API_BASE}/teacher`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const teacher = await response.json();
      if (teacher._id) {
        this.props.hourInit(teacher.hours)
      } else {
        console.error('didnt get')
      }
    } catch (error) {
      console.error(error);
    }
  };

  reset = async () => {
    try {
      const response = await fetch(`${API_BASE}/teacher/reset`, {
        method: 'POST'
      });
      const data = await response.json();
      if (data.reset) {
        window.alert('reset successful!');
        this.fetchHours()
      } else {
        window.alert('reset not successful, please try again!')
      }
    } catch (error) {
      window.alert('reset not successful, please try again!');
      console.error(error);
    }
  };

  render() {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(<Day dayIndex={i} hours={this.props.hours[i]} key={i}/>)
    }
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(
        <option value={i} key={i}> {toPrettyHour(i)} </option>
      )
    }

    return (
      <>
        <span className="addClass">
          <select name="dayIndex" onChange={this.handleChange}>
            <option value="0">Monday</option>
            <option value="1">Tuesday</option>
            <option value="2">Wednesday</option>
            <option value="3">Thursday</option>
            <option value="4">Friday</option>
            <option value="5">Saturday</option>
            <option value="6">Sunday</option>
          </select>
          <label>start:</label>
          <select name="start" onChange={this.handleChange}>
            {hours}
          </select>
          <label>stop:</label>
          <select name="end" onChange={this.handleChange}>
            {hours}
          </select>
          <button onClick={this.addClass}>
            add class
          </button>
          </span>
        <button className="reset" onClick={this.reset}>
          reset schedule
        </button>
        <div className="key">
          <span className="notAvailable">
            not available
          </span>
          <span className="isAvailable">
            is available
          </span>
          <span className="class">
            class
          </span>
        </div>

        <div className="Week">
          {days}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({hours}) => {
  return {hours}
};

export default connect(mapStateToProps, {hourInit})(Week);
