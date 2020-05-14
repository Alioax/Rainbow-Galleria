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

export const handleSaved = (picture) => {
  return {
    type: "HANDLE_SAVED",
    payload: picture.picture === undefined? picture : picture.picture,
  };
};
