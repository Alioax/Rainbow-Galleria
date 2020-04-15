import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {setViewPort} from "../states/actions/actions";

export function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const dispatch = useDispatch();
    useEffect(() => {
        function handleResize() {
            dispatch(setViewPort(getWindowDimensions()));
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return getWindowDimensions;
}