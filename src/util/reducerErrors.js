export default handleError => reducer => (state, action) => {
  try {
    return reducer(state, action);
  } catch (error) {
    return handleError(error, state, action);
  }
};
