const savedItems =
  localStorage.getItem("Saved") !== null
    ? JSON.parse(localStorage.getItem("Saved"))
    : [];

const saved = (state = savedItems, action) => {
  switch (action.type) {
    case "HANDLE_SAVED":
      const savedDuplicate = [...state];
      if (
        savedDuplicate.some(
          (code) => JSON.stringify(code) === JSON.stringify(action.payload)
        )
      ) {
        //removing a picture
        let i = 0;
        savedDuplicate.forEach((item, index) => {
          if (JSON.stringify(item) === JSON.stringify(action.payload)) {
            i = index;
          }
        });
        savedDuplicate.splice(i, 1);
      } else {
        //adding a picture
        savedDuplicate.unshift(action.payload);
      }

      //syncing both local storage and redux state with the new array
      localStorage.setItem("Saved", JSON.stringify(savedDuplicate));
      return savedDuplicate;
    default:
      return state;
  }
};

export default saved;
