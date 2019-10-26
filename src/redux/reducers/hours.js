import {HOUR_TOGGLE, HOUR_INIT} from "../actionTypes";

const days = [];
for (let i = 0; i < 7; i++) {
  const day = [];
  for (let j = 0; j < 24; j++) {
    day.push(0)
  }
  days.push(day)
}
const initialState = days;

export default function (state = initialState, action) {
  switch (action.type) {
    case HOUR_TOGGLE: {
      const {dayIndex, hourIndex} = action.payload;
      const newDay = [...state[dayIndex]];
      const oldState = newDay[hourIndex];
      let newState;
      if (oldState === 0) {
        newState = 1
      } else if (oldState === 1) {
        newState = 0
      }
      newDay[hourIndex] = newState;
      const newTotalState = [...state];
      newTotalState[dayIndex] = newDay;
      return newTotalState
    }
    case HOUR_INIT: {
      const {hours} = action.payload;
      return hours
    }
    default:
      return state;
  }
}
