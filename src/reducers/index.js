import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY } from './../actions';

export const initialState = {
  total: 100,
  operation: "*",
  memory: 100
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return Number(num1) + Number(num2);
    case ("*"):
      return Number(num1) * Number(num2);
    case ("-"):
      return Number(num1) - Number(num2);
    default:
      return;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload
      });

    case (CLEAR_DISPLAY):
      return({
        ...state,
        total: 0
      })

    default:
      return state;
  }
}

export default reducer;