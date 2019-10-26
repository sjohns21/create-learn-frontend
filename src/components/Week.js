import React, {Component} from 'react';
import "./Week.css"
import Day from "./Day";
import {connect} from "react-redux";
import {hourInit} from "../redux/actions";
import SimpleModal from "./Modal";
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
  }

  addClass = async () => {
    const {dayIndex, start, end} = this.state;
    console.log({dayIndex, start, end})
    console.log(dayIndex, start, end)

    let windowIsAvailable = true
    for (let i = start; i <= end; i++) {
      const status = this.props.hours[dayIndex][i]
      if (status === 0 || status === 2) {
        windowIsAvailable = false
        break
      }
    }
    console.log('windowIsAvailable', windowIsAvailable)
    if (windowIsAvailable) {
      try {
        const response = await fetch(`${API_BASE}/teacher/class`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
          },
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({
            dayIndex,
            start,
            end
          })
        });
        const data = await response.json()
        if (data.classAdded) {
          // this.props.hourToggle(this.props.dayIndex, this.props.hourIndex)
          this.fetchHours()
        } else {
          console.error('didnt add class')
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  componentDidMount() {
    this.fetchHours()
  }

  componentDidUpdate(prevProps) {

  }

  fetchHours = async () => {
    try {
      const response = await fetch(`${API_BASE}/teacher`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        referrer: 'no-referrer', // no-referrer, *client
      });
      const teacher = await response.json()
      if (teacher._id) {
        this.props.hourInit(teacher.hours)
      } else {
        console.error('didnt get')
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const days = []
    for (let i = 0; i < 7; i++) {
      days.push(<Day dayIndex={i} hours={this.props.hours[i]} key={i}/>)
    }
    const hours = []
    for (let i = 0; i < 24; i++) {
      hours.push(
        <option value={i} key={i}>{i}</option>
      )
    }

    return (
      <>
        <button onClick={this.addClass}>
          addClass

        </button>
        <select name="dayIndex" onChange={this.handleChange}>
          <option value="0">Monday</option>
          <option value="1">Tuesday</option>
          <option value="2">Wednesday</option>
          <option value="3">Thursday</option>
          <option value="4">Friday</option>
          <option value="5">Saturday</option>
          <option value="6">Sunday</option>
        </select>
        <select name="start" onChange={this.handleChange}>
          {hours}
        </select>
        <select name="end" onChange={this.handleChange}>
          {hours}
        </select>
        <span className="key">
          key
          <span className="notAvailable">
            not available
          </span>
          <span className="isAvailable">
            is available
          </span>
          <span className="class">
            class
          </span>
        </span>
        {/*<SimpleModal/>*/}

        <div className="Week">
          {days}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  // const {visibilityFilter} = state;
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  // return {todos};
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
  const {hours} = state
  return {hours}
};

export default connect(mapStateToProps, {hourInit})(Week);
