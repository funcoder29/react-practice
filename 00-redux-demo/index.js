const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const CAKE_ORDERED = `CAKE_ORDERED`;
const CAKE_RESTOCKED = `CAKE_RESTOCKED`;
const ICECREAM_ORDERED = `ICECREAM_ORDERED`;
const ICECREAM_RESTOCKED = `ICECREAM_RESTOCKED`;
const combineReducers = redux.combineReducers;
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream() {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreames: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case CAKE_RESTOCKED:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return { ...state, numOfIceCreames: state.numOfIceCreames - 1 };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreames: state.numOfIceCreames + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const unsubscribe = store.subscribe(() => {});

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(5));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIceCream },
  store.dispatch,
);
actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(5);

actions.orderIcecream();
actions.orderIcecream();
actions.restockIceCream(2);

unsubscribe();
