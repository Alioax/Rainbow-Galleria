import {BreakpointProvider as Breakpoint} from 'react-socks';
import useWindowDimensions from "./viewport";
import {withRouter} from 'react-router-dom';
import React, {useEffect} from 'react';


const Utilities = ({children}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    useWindowDimensions();
    return (
        <Breakpoint>
            {children}
        </Breakpoint>
    )
};

export default withRouter(Utilities);