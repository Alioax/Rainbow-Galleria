import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";
import Row from "reactstrap/es/Row";

const Menu = (props) => {
  const saved = useSelector((state) => state.saved);

  const transitionSpring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };


  return (
    <div
      className={
        (props.isLarge ? "top-0 py-3" : "bot-0 py-3") +
        " blur-trans-md bg-w-72 z-1 position-sticky"
      }
    >
      <Container fluid>
        <ul
          className={
            (props.isLarge ? "d-flex row mx-0" : "scrolling-wrapper-flexBox") +
            " position-sticky px-0 mb-0"
          }
        >
          <Row className="flex-nowrap">
            <AnimatePresence>
              {saved.length !== 0 ? (
                <motion.li
                  initial={{
                    opacity: 0,
                    width: 0,
                  }}
                  animate={{
                    opacity: 1,
                    width: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    width: 0,
                  }}
                  transition={transitionSpring}
                  className="col-auto px-3"
                >
                  <Link
                    className={
                      (props.type === "Saved"
                        ? "font-weight-bold"
                        : "text-secondary") + " align-items-center d-inline-flex"
                    }
                    to="/galleria?type=Saved"
                  >
                    <span>Saved</span>
                    <span className="badge badge-primary ml-2">
                      {saved.length}
                    </span>
                  </Link>
                </motion.li>
              ) : (
                void 0
              )}
            </AnimatePresence>
            <li className="col-auto px-3">
              <Link
                className={
                  (props.type ? "text-secondary" : "font-weight-bold") + ""
                }
                to="/"
              >
                All
              </Link>
            </li>
            <li className="col-auto px-3">
              <Link
                className={
                  (props.type === "Original"
                    ? "font-weight-bold"
                    : "text-secondary") + ""
                }
                to="/galleria?type=Original"
              >
                Original
              </Link>
            </li>
            <li className="col-auto px-3">
              <Link
                className={
                  (props.type === "Mesmerizing"
                    ? "font-weight-bold"
                    : "text-secondary") + ""
                }
                to={"/galleria?type=Mesmerizing"}
              >
                Mesmerizing
              </Link>
            </li>
          </Row>
        </ul>
      </Container>
    </div>
  );
};

export default Menu;
