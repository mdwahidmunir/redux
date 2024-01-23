const redux = require('redux');

INTIAL_STORE = { counter: 0 };

const reducer = (store = INTIAL_STORE, action) => {
    let newStore = store
    if (action.type === "INCREMENT")
        newStore = { ...store, counter: store.counter + 1 }
    else if (action.type === "DECREMENT")
        newStore = { ...store, counter: store.counter - 1 }
    else if (action.type === "INCREMENT_BY_X")
        newStore = { ...store, counter: store.counter + action.payload }
    else if (action.type === "DECREMENT_BY_X")
        newStore = { ...store, counter: store.counter - action.payload }
    return newStore
}

store = redux.createStore(reducer);

const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT_BY_X", payload: 5 });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT_BY_X", payload: 3 });