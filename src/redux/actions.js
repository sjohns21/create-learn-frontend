import {ADD_TODO, TOGGLE_TODO, SET_FILTER, ADD_HOUR} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {id}
});

export const setFilter = filter => ({type: SET_FILTER, payload: {filter}});

export const addHour = (dayIndex, hourIndex) => ({
  type: ADD_HOUR,
  payload: {dayIndex, hourIndex}
});
