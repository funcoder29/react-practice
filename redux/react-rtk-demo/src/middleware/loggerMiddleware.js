export const loggerMiddleware = (store) => (next) => (action) => {
  console.log(
    "Dispatching:",
    typeof action === "object" && action !== null && "type" in action
      ? action.type
      : undefined,
  );
  console.log("Current state:", store.getState());

  const result = next(action); // Pass the action to the next middleware or reducer

  console.log("Next state:", store.getState());
  return result;
};
