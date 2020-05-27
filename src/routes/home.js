import { motion } from "framer-motion";
import Layout from "../components/layout";
import React, { useEffect } from "react";
import Breakpoint from "react-socks";
import axios from "axios";
import data from "../data/pictures";
import Header from "../components/header";
import Menu from "../components/menu";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Gallery from "../components/gallery";
import { useCurrentBreakpointName } from "react-socks";
import getScrollbarWidth from "../functions/scrollbarWidth";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const breakpoint = useCurrentBreakpointName();
  let query = useQuery();
  const type = query.get("type");
  const activePic = query.get("pic");

  console.log(activePic === null ? 0 : 3);

  /*        useEffect(() => {
                    /!*axios.get('../data/pictures.json').then(res => {
                        console.log(res.data)
                    })*!/
                }); */

  useEffect(() => {
    if (activePic === null) {
      document.body.classList.add("modal-open");
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "0";
    }
    setTimeout(() => {
      if (activePic === null) {
        document.body.classList.remove("modal-open");
        document.body.style.paddingRight = "0";
      }
    }, 3500);
  }, []);

  
  const transition = {
    ease: "easeInOut",
    duration: 1,
    delay: activePic !== null ? 0 : 3,
  };

  const transitionSpring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  const fadeIn = {
    visible: { opacity: 1 },
    fade: { opacity: 0 },
  };

  return (
    <Layout>
      <Helmet>
        <title>
          Rainbow Galleria
        </title>
      </Helmet>
      <Header
        breakpoint={breakpoint}
        data={data}
        activePic={activePic}
        transition={transition}
      />
      <motion.div
        initial={"fade"}
        animate={"visible"}
        variants={fadeIn}
        transition={transition}
      >
        <Breakpoint large down>
          <Gallery
            activePic={activePic}
            breakpoint={breakpoint}
            data={data}
            type={type}
          />
          <Menu isLarge={false} type={type} />
        </Breakpoint>
        <Breakpoint xlarge up>
          <Menu isLarge={true} type={type} />
          <Gallery
            activePic={activePic}
            breakpoint={breakpoint}
            data={data}
            type={type}
          />
        </Breakpoint>
      </motion.div>
    </Layout>
  );
};
export default Home;
