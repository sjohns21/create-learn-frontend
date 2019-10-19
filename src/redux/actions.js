import {ADD_TODO, TOGGLE_TODO, SET_FILTER, HOUR_TOGGLE, HOUR_INIT} from "./actionTypes";

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

export const hourToggle = (dayIndex, hourIndex) => ({
  type: HOUR_TOGGLE,
  payload: {dayIndex, hourIndex}
});

export const hourInit = (hours) => ({
  type: HOUR_INIT,
  payload: {hours}
});
