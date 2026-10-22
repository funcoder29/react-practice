const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("./features/cake/cakeSlice.js");
const icecreamReducer = require("./features/icecream/icecreamSlice.js");
const userReducer = require("./features/user/userSlice.js");

const logger = reduxLogger.createLogger();
console.log("In store");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
