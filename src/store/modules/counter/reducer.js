import { add_num, sub_num } from "./actionTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case add_num:
      const plusNumber = state + action.number;
      return plusNumber;

    case sub_num:
      const redNum = state - action.number;
      return redNum;

    default:
      return state;
  }
};

export default reducerCounter;
