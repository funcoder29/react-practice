export const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error("Redux error:", err);
    //reportToService(err, { action, state: store.getState() });
    throw err;
  }
};
