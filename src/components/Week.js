import React, {Component} from 'react';
import "./Week.css"
import Day from "./Day";
import {connect} from "react-redux";

class Week extends Component {

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

export default connect(mapStateToProps)(Week);
