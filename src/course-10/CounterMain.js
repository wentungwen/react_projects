import { useReducer } from "react";
import Button from "../course-5/Button";
import Panel from "../course-7/Panel";
import { validators } from "tailwind-merge";

// use constant to avoid the typo
const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "set-value-to-add";
const COUNT_SUBMIT = "count-submit";

// return the updated variables based on different action types
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    case COUNT_SUBMIT:
      return {
        ...state,
        valueToAdd: 0,
        count: state.valueToAdd + state.count,
      };
    default:
      throw new Error("unexpected action type" + action.type);
    // or do nothing: return state;
  }
};

function CounterPage({ config }) {
  const { initialCount } = config;
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  // if input is NaN then use 0
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: COUNT_SUBMIT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button primary onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button secondary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
