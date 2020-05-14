import React, {useEffect} from "react";
import {motion} from "framer-motion"
import {useSelector, useDispatch} from "react-redux";
import {setNotification} from "../states/actions/actions";


function Notification(props) {
    const dispatch = useDispatch();
    const times = useSelector(state => state.notification);
    useEffect(() => {
        if (props.once) {
            dispatch(setNotification(+1));
        }
    }, []);
    if (times > 1) {
        return (<></>)
    } else {
        return (
            <motion.div animate={{top: [0, 32, 32, 0], scale: [0.98, 1, 1, 0.98], opacity: [0, 1, 1, 0]}}
                        transition={{delay : 1,duration: 8, times: [0, 0.05, 0.95, 1], ease: "easeInOut"}}
                        className={times > 1 ? "d-none" : void 0 + " position-fixed d-flex justify-content-center z-3 font-amatic top-theme"}>
                {props.children}
            </motion.div>
        );
    }
}

export default Notification