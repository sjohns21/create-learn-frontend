import React, {Component} from 'react';
import "./Hours.css"
import Hour from "./Hour";
import {getTodosByVisibilityFilter} from "../redux/selectors";
import {connect} from "react-redux";

class Hours extends Component {
  render() {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      let isLit = false
      if (this.props.hours[i]) {
        isLit = true;
      }
      hours.push(
        <Hour key={i} dayIndex={this.props.dayIndex} hourIndex={i} isLit={isLit}/>
      )
    }
    return (
      <div className="Hours">
        {hours}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   // const {visibilityFilter} = state;
//   // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
//   // return {todos};
//   //   const allTodos = getTodos(state);
//   //   return {
//   //     todos:
//   //       visibilityFilter === VISIBILITY_FILTERS.ALL
//   //         ? allTodos
//   //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
//   //           ? allTodos.filter(todo => todo.completed)
//   //           : allTodos.filter(todo => !todo.completed)
//   //   };
//   const {hours} = state.hours
//   return {hours}
// };

// export default connect(mapStateToProps)(Hours);
export default Hours;
