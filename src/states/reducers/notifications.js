const notification = (state = 0, action) => {

    switch (action.type) {
        case 'SET_NOTIFICATION':
            return state + action.payload;
        default:
            return state;
    }
};

export default notification;