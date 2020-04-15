const {innerWidth: width, innerHeight: height} = window;

const vp = (state = {width, height}, action) => {

    switch (action.type) {
        case 'setViewport':
            return action.payload;
        default:
            return state;
    }
};

export default vp;