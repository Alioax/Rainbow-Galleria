import { BreakpointProvider as Breakpoint } from "react-socks";
import useWindowDimensions from "./viewport";
import { withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Utilities = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useWindowDimensions();
  return (
    <Breakpoint>
      {children}
      <Helmet>
        <title>Rainbow Galleria</title>
        <meta name="description" content="Photography Gallery" />
        <meta property="og:title" content="Rainbow Gallery" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="rainbow-galleria.netlify.app/512.png"
        />
        <meta
          property="og:image:secure_url"
          content="rainbow-galleria.netlify.app/512.png"
        />
        <meta
          property="og:url"
          content={`https://rainbow-galleria.netlify.app/#/`}
        />
      </Helmet>
    </Breakpoint>
  );
};

export default withRouter(Utilities);
