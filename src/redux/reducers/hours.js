import {ADD_HOUR, TOGGLE_TODO} from "../actionTypes";

const days = []
for (let i = 0; i < 7; i++) {
  const day = []
  for (let j = 0; j < 24; j++) {
    day.push(false)
  }
  days.push(day)
}
const initialState = days;

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_HOUR: {
      const {dayIndex, hourIndex} = action.payload;
      // const {hours} = state;
      const newDay = [...state[dayIndex]]
      newDay[hourIndex] = true
      // state[dayIndex][hourIndex] = true;
      const newState = [...state]
      newState[dayIndex] = newDay
      return newState
      // return {
      //   ...state,
      //   hours
      //   // allIds: [...state.allIds, id],
      //   // byIds: {
      //   //   ...state.byIds,
      //   //   [id]: {
      //   //     content,
      //   //     completed: false
      //   //   }
      //   // }
      // };
    }
    // case TOGGLE_TODO: {
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     byIds: {
    //       ...state.byIds,
    //       [id]: {
    //         ...state.byIds[id],
    //         completed: !state.byIds[id].completed
    //       }
    //     }
    //   };
    // }
    default:
      return state;
  }
}