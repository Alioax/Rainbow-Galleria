import React from "react";
import { motion } from "framer-motion";

const Header = (props) => {
  let isLarge = false;

  const slideDown = {
    top: { paddingTop: 0 },
    center: { paddingTop: "25vh" },
  };

  const fadeIn = {
    top: { opacity: 1 },
    center: { opacity: 0 },
  };

  let heightControl = {
    top: { maxHeight: "90vh" },
    center: { maxHeight: "50vh" },
  };

  let blur = {
    top: { opacity: 1 },
    center: { opacity: 0 },
  };

  let headerImg = props.data.filter((pic) => pic.headerMd)[0];

  if (props.breakpoint === "large" || props.breakpoint === "xlarge") {
    heightControl = {
      top: { maxHeight: "90vh" },
      center: { maxHeight: "50vh" },
    };
    isLarge = true;
    blur = {
      top: { backdropFilter: "blur(4px)" },
      center: { backdropFilter: "blur(0)" },
    };
    headerImg = props.data.filter((pic) => pic.headerLg)[0];
  }

  return (
    <motion.div
      initial={"center"}
      animate={"top"}
      variants={slideDown}
      transition={props.transition}
      className="position-relative"
    >
      <motion.div
        initial={"center"}
        animate={"top"}
        variants={heightControl}
        transition={props.transition}
        className="overflow-hidden"
      >
        <img
          src={headerImg.url}
          alt={headerImg.alt}
          className="img-fluid w-100"
        />
      </motion.div>
      <motion.div
        initial={"center"}
        animate={"top"}
        variants={blur}
        transition={props.transition}
        className={
          (isLarge ? void 0 : "blur-sm") +
          " position-absolute w-100 h-100 top-0"
        }
      ></motion.div>
      <div className="position-absolute d-flex align-items-center justify-content-center w-100 h-100 top-0">
        <div>
          <motion.h1
            initial={"center"}
            animate={"top"}
            variants={fadeIn}
            transition={props.transition}
            className="text-white mb-0"
          >
            Rainbow Galleria
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
