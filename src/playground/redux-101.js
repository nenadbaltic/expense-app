import { createStore } from 'redux';

// ACTION GENERATORS = functions that return action objects
const incrementCount = (obj) => {
    return {
        type: 'INCREMENT',
        incrementBy: obj ? obj.incrementBy : 1
    }
}
const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}
const resetCount = () => {
    return {
        type: 'RESET'
    }
}
const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count: count
    }
}

// REDUCERS
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'SET':
            return { count: action.count };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

// STORE
const store = createStore(countReducer);

store.subscribe(() => { // Following changes
    console.log(store.getState());
}); // NOTE: return value from subscribe is unsubscribe


// ACTIONS - than an object that gets sent to the store
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 10 
});
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
// console.log(store.getState());

// Process:
// 1. Create store
// 2. Actions - than an object that gets sent to the store
// 3. Action Generators - functions that return action objects
// 4. Reducers