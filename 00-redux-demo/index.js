const redux = require("redux");
const createStore = redux.createStore;
const CAKE_ORDERED = `CAKE_ORDERED`;
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      state;
  }
};

const store = createStore(reducer);
console.log("Initial state", initialState);

const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState()),
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
