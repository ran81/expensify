import { createStore } from 'redux';


/*
Action creators === functions that return action objects
*/
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET',
});

/**
 * Reducers - map action which is "something happened" to 
 * what happens to the state in response to that action.
 * Rules:
 * 1. Reducers are PURE functions -- no side effects
 * 2. NEVER CHANGE STATE OR ACTION!! we create a new state.. not to mutate!
 */
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};


// createStore takes a reducer as an argument and an action.
// We respond to an action according to its type.
const store = createStore(countReducer);

// We can listen to changes of the store.
store.subscribe(() => {
  console.log(store.getState());  
});

/*
Actions - an object that are sent to the store
for example:
increment, decrement...

We send actions to the store via a dispatch() call.
*/
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
