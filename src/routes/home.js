import { motion } from "framer-motion";
import Layout from "../components/layout";
import React, { useEffect } from "react";
import Breakpoint from "react-socks";
import axios from "axios";
import data from "../data/pictures";
import Header from "../components/header";
import Menu from "../components/menu";
import { useLocation } from "react-router-dom";
import Gallery from "../components/gallery";
import { useCurrentBreakpointName } from "react-socks";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const breakpoint = useCurrentBreakpointName();
  let query = useQuery();

  /*        useEffect(() => {
                    /!*axios.get('../data/pictures.json').then(res => {
                        console.log(res.data)
                    })*!/
                });*/

  const transition = {
    ease: "easeInOut",
    duration: 1,
    delay: 3,
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

  const type = query.get("type");
  const activePic = query.get("pic");
  return (
    <Layout>
      <Header breakpoint={breakpoint} data={data} transition={transition} />
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
