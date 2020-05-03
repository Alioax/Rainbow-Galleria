export const setViewPort = (nr) => {
  return {
    type: "setViewport",
    payload: nr,
  };
};

export const setNotification = (frequency) => {
  return {
    type: "SET_NOTIFICATION",
    payload: frequency,
  };
};
