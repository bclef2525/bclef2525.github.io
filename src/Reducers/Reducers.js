import * as types from "../Actions/Actions";

const initialState = {
  mode: true
};

export default function modeChanger(state = initialState, action) {
  switch (action.type) {
    case types.SPLASH_MODE:
      return {
        mode: false
      };
    default:
      return state;
  }
}
