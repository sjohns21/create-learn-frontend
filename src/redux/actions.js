import {HOUR_TOGGLE, HOUR_INIT} from "./actionTypes";

export const hourToggle = (dayIndex, hourIndex) => ({
  type: HOUR_TOGGLE,
  payload: {dayIndex, hourIndex}
});

export const hourInit = (hours) => ({
  type: HOUR_INIT,
  payload: {hours}
});
