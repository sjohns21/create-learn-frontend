import React, {Component} from 'react';
import "./Week.css"
import Day from "./Day";
import {connect} from "react-redux";
import {hourInit} from "../redux/actions";


class Week extends Component {

  componentDidMount() {
    this.initialFetch()
  }

  initialFetch = async () => {
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
