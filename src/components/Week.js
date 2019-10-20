import React, {Component} from 'react';
import "./Week.css"
import Day from "./Day";
import {connect} from "react-redux";
import {hourInit} from "../redux/actions";


class Week extends Component {

  addClass = async () => {
    const dayIndex = window.prompt('dayIndex');
    const start = window.prompt('start');
    const end = window.prompt('end');
    if (!dayIndex || !start || !end) return
    if (dayIndex < 0 || dayIndex > 6) return
    if (start < 0 || start > 23) return
    if (end < 0 || end > 23) return
    if (start > end) return

    let windowIsAvailable = true
    if (dayIndex >= 0 && dayIndex <= 6) {
      for (let i = start; i <= end; i++) {
        const status = this.props.hours[dayIndex][i]
        if (status === 0 || status === 2) {
          windowIsAvailable = false
          break
        }
      }
    }
    console.log('windowIsAvailable', windowIsAvailable)
    if (windowIsAvailable) {
      try {
        const response = await fetch('http://localhost:3001/teacher/class', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          headers: {
            'Content-Type': 'application/json'
          },
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({
            "teacherId": "5dab71fff96f90348007ed67",
            dayIndex,
            start,
            end
          }) // body data type must match "Content-Type" header
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
      const response = await fetch('http://localhost:3001/teacher/5dab71fff96f90348007ed67', {
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
    return (
      <>
        <div onClick={this.addClass}>
          addClass
        </div>
        <div className="Week">
          {/*<Hours/>*/}
          {/*<Day dayIndex={0}/>*/}
          {/*<Day/>*/}
          {/*<Day/>*/}
          {/*<Day/>*/}
          {/*<Day/>*/}
          {/*<Day/>*/}
          {/*<Day/>*/}
          {/*<Day/>*/}
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
