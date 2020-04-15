import React from "react";
import '../styles/base.scss'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faMapMarkerAlt, faShareAlt, faDownload, faHeart} from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';

library.add(faMapMarkerAlt, faShareAlt, faDownload, faHeart, farHeart);
const Layout = ({children}) => {
    return (
        <main>
            {children}
        </main>
    )

};

export default Layout;