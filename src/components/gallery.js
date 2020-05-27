import React from "react";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import { Container } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Fullscreen from "./fullscreen";
import getScrollbarWidth from "../functions/scrollbarWidth";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { handleSaved } from "../states/actions/actions";

const Gallery = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const saved = useSelector((state) => state.saved);
  let lastUrl = `/galleria?type=${props.type}`;

  if (props.type === null) {
    lastUrl = `/galleria?`;
  }
  let columns = 2;
  let pictures = props.data;

  if (props.type !== null) {
    if (props.type === "Saved") {
      pictures = saved;
    } else {
      pictures = props.data.filter((n) => n.types.includes(props.type));
    }
  }

  if (props.breakpoint === "medium") {
    columns = 3;
  }
  if (props.breakpoint === "large") {
    columns = 4;
  }
  if (props.breakpoint === "xlarge") {
    /*columns = 6*/
    columns = 4;
  }

  const handleModalOpen = (isOpen) => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "0";
    }
  };

  const handleSave = (x, event) => {
    event.preventDefault();
    dispatch(handleSaved(x));
    if (saved.length === 1 && props.type === "Saved") {
      history.push("/");
    }
  };
  return (
    <>
      {pictures.length === 0 ? (
        <div className="p-lg-5 m-lg-5 p-5 d-flex justify-content-center align-items-center">
          <h1 className="text-primary  mb-0 font-weight-light">No Photos here, Send us some</h1>
        </div>
      ) : (
        <Container fluid>
          <div className="pt-theme">
            <Row className="flex-row-reverse">
              <Col className="" xs={12 / columns}>
                {pictures.map((picture, index) =>
                  index % columns === columns - 1 ? (
                    <Link key={index} to={`${lastUrl}${props.type !== null? "&" : ""}pic=${index}`}>
                      <div className="overflow-hidden hover-parent position-relative img-hover img-hover mb-theme rounded shadow-lg">
                        <img
                          className="img-fluid w-100 "
                          src={picture.url}
                          alt={picture.alt}
                        />
                        {props.breakpoint === "xlarge" ? (
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(event) => handleSave({ picture }, event)}
                            className={
                              (saved.some(
                                (code) =>
                                  JSON.stringify(code) ===
                                  JSON.stringify(picture)
                              )
                                ? ""
                                : "hover-only-opacity-1") +
                              " position-absolute rounded top-theme-2 left-theme-2 d-inline-flex"
                            }
                          >
                            <div
                              className={
                                (saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                )
                                  ? "blur-sm"
                                  : "") +
                                " d-inline-flex p-3 hover-blur bg-w-50 rounded"
                              }
                            >
                              {saved.some(
                                (code) =>
                                  JSON.stringify(code) ===
                                  JSON.stringify(picture)
                              ) ? (
                                <MdFavorite className="text-danger h3 mb-0" />
                              ) : (
                                <MdFavoriteBorder className="text-danger h3 mb-0" />
                              )}
                            </div>
                          </motion.div>
                        ) : (
                          void 0
                        )}
                      </div>
                    </Link>
                  ) : (
                    void 0
                  )
                )}
              </Col>
              <Col className="" xs={12 / columns}>
                {pictures.map((picture, index) =>
                  index % columns === columns - 2 ? (
                    <Link key={index} to={`${lastUrl}${props.type !== null? "&" : ""}pic=${index}`}>
                      <div className="overflow-hidden hover-parent position-relative img-hover img-hover mb-theme rounded shadow-lg">
                        <img
                          className="img-fluid w-100 "
                          src={picture.url}
                          alt={picture.alt}
                        />
                        {props.breakpoint === "xlarge" ? (
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                            }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(event) => handleSave({ picture }, event)}
                            className={
                              (saved.some(
                                (code) =>
                                  JSON.stringify(code) ===
                                  JSON.stringify(picture)
                              )
                                ? ""
                                : "hover-only-opacity-1") +
                              " position-absolute rounded top-theme-2 left-theme-2 d-inline-flex"
                            }
                          >
                            <div
                              className={
                                (saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                )
                                  ? "blur-sm"
                                  : "") +
                                " d-inline-flex p-3 hover-blur bg-w-50 rounded"
                              }
                            >
                              {saved.some(
                                (code) =>
                                  JSON.stringify(code) ===
                                  JSON.stringify(picture)
                              ) ? (
                                <MdFavorite className="text-danger h3 mb-0" />
                              ) : (
                                <MdFavoriteBorder className="text-danger h3 mb-0" />
                              )}
                            </div>
                          </motion.div>
                        ) : (
                          void 0
                        )}
                      </div>
                    </Link>
                  ) : (
                    void 0
                  )
                )}
              </Col>
              {columns > 2 ? (
                <Col className="" xs={12 / columns}>
                  {pictures.map((picture, index) =>
                    index % columns === columns - 3 ? (
                      <Link key={index} to={`${lastUrl}${props.type !== null? "&" : ""}pic=${index}`}>
                        <div className="overflow-hidden hover-parent position-relative img-hover img-hover mb-theme rounded shadow-lg">
                          <img
                            className="img-fluid w-100 "
                            src={picture.url}
                            alt={picture.alt}
                          />
                          {props.breakpoint === "xlarge" ? (
                            <motion.div
                              whileHover={{
                                scale: 1.1,
                              }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(event) =>
                                handleSave({ picture }, event)
                              }
                              className={
                                (saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                )
                                  ? ""
                                  : "hover-only-opacity-1") +
                                " position-absolute rounded top-theme-2 left-theme-2 d-inline-flex"
                              }
                            >
                              <div
                                className={
                                  (saved.some(
                                    (code) =>
                                      JSON.stringify(code) ===
                                      JSON.stringify(picture)
                                  )
                                    ? "blur-sm"
                                    : "") +
                                  " d-inline-flex p-3 hover-blur bg-w-50 rounded"
                                }
                              >
                                {saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                ) ? (
                                  <MdFavorite className="text-danger h3 mb-0" />
                                ) : (
                                  <MdFavoriteBorder className="text-danger h3 mb-0" />
                                )}
                              </div>
                            </motion.div>
                          ) : (
                            void 0
                          )}
                        </div>
                      </Link>
                    ) : (
                      void 0
                    )
                  )}
                </Col>
              ) : (
                void 0
              )}
              {columns > 3 ? (
                <Col className="" xs={12 / columns}>
                  {pictures.map((picture, index) =>
                    index % columns === columns - 4 ? (
                      <Link key={index} to={`${lastUrl}${props.type !== null? "&" : ""}pic=${index}`}>
                        <div className="overflow-hidden hover-parent position-relative img-hover img-hover mb-theme rounded shadow-lg">
                          <img
                            className="img-fluid w-100 "
                            src={picture.url}
                            alt={picture.alt}
                          />
                          {props.breakpoint === "xlarge" ? (
                            <motion.div
                              whileHover={{
                                scale: 1.1,
                              }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(event) =>
                                handleSave({ picture }, event)
                              }
                              className={
                                (saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                )
                                  ? ""
                                  : "hover-only-opacity-1") +
                                " position-absolute rounded top-theme-2 left-theme-2 d-inline-flex"
                              }
                            >
                              <div
                                className={
                                  (saved.some(
                                    (code) =>
                                      JSON.stringify(code) ===
                                      JSON.stringify(picture)
                                  )
                                    ? "blur-sm"
                                    : "") +
                                  " d-inline-flex p-3 hover-blur bg-w-50 rounded"
                                }
                              >
                                {saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                ) ? (
                                  <MdFavorite className="text-danger h3 mb-0" />
                                ) : (
                                  <MdFavoriteBorder className="text-danger h3 mb-0" />
                                )}
                              </div>
                            </motion.div>
                          ) : (
                            void 0
                          )}
                        </div>
                      </Link>
                    ) : (
                      void 0
                    )
                  )}
                </Col>
              ) : (
                void 0
              )}
              {columns > 4 ? (
                <Col className="" xs={12 / columns}>
                  {pictures.map((picture, index) =>
                    index % columns === columns - 5 ? (
                      <Link key={index} to={`${lastUrl}${props.type !== null? "&" : ""}pic=${index}`}>
                        <div className="overflow-hidden hover-parent position-relative img-hover img-hover mb-theme rounded shadow-lg">
                          <img
                            className="img-fluid w-100 "
                            src={picture.url}
                            alt={picture.alt}
                          />
                          {props.breakpoint === "xlarge" ? (
                            <motion.div
                              whileHover={{
                                scale: 1.1,
                              }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(event) =>
                                handleSave({ picture }, event)
                              }
                              className={
                                (saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                )
                                  ? ""
                                  : "hover-only-opacity-1") +
                                " position-absolute rounded top-theme-2 left-theme-2 d-inline-flex"
                              }
                            >
                              <div
                                className={
                                  (saved.some(
                                    (code) =>
                                      JSON.stringify(code) ===
                                      JSON.stringify(picture)
                                  )
                                    ? "blur-sm"
                                    : "") +
                                  " d-inline-flex p-3 hover-blur bg-w-50 rounded"
                                }
                              >
                                {saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                ) ? (
                                  <MdFavorite className="text-danger h3 mb-0" />
                                ) : (
                                  <MdFavoriteBorder className="text-danger h3 mb-0" />
                                )}
                              </div>
                            </motion.div>
                          ) : (
                            void 0
                          )}
                        </div>
                      </Link>
                    ) : (
                      void 0
                    )
                  )}
                </Col>
              ) : (
                void 0
              )}
              {columns > 5 ? (
                <Col className="" xs={12 / columns}>
                  {pictures.map((picture, index) =>
                    index % columns === columns - 6 ? (
                      <Link key={index} to={`${lastUrl}${props.type !== null? "&" : ""}pic=${index}`}>
                        <div className="overflow-hidden hover-parent position-relative img-hover img-hover mb-theme rounded shadow-lg">
                          <img
                            className="img-fluid w-100 "
                            src={picture.url}
                            alt={picture.alt}
                          />
                          {props.breakpoint === "xlarge" ? (
                            <motion.div
                              whileHover={{
                                scale: 1.1,
                              }}
                              whileTap={{ scale: 0.9 }}
                              onClick={(event) =>
                                handleSave({ picture }, event)
                              }
                              className={
                                (saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                )
                                  ? ""
                                  : "hover-only-opacity-1") +
                                " position-absolute rounded top-theme-2 left-theme-2 d-inline-flex"
                              }
                            >
                              <div
                                className={
                                  (saved.some(
                                    (code) =>
                                      JSON.stringify(code) ===
                                      JSON.stringify(picture)
                                  )
                                    ? "blur-sm"
                                    : "") +
                                  " d-inline-flex p-3 hover-blur bg-w-50 rounded"
                                }
                              >
                                {saved.some(
                                  (code) =>
                                    JSON.stringify(code) ===
                                    JSON.stringify(picture)
                                ) ? (
                                  <MdFavorite className="text-danger h3 mb-0" />
                                ) : (
                                  <MdFavoriteBorder className="text-danger h3 mb-0" />
                                )}
                              </div>
                            </motion.div>
                          ) : (
                            void 0
                          )}
                        </div>
                      </Link>
                    ) : (
                      void 0
                    )
                  )}
                </Col>
              ) : (
                void 0
              )}
            </Row>
          </div>

          {props.activePic !== null
            ? handleModalOpen(true)
            : handleModalOpen(false)}

          {/* <AnimatePresence> */}
          {props.activePic !== null ? (
            <motion.div
              className="z-2"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
            >
              <Fullscreen
                isXLarge={props.breakpoint === "xlarge"}
                type={props.type}
                pictures={pictures}
                activePic={parseInt(props.activePic)}
              />
            </motion.div>
          ) : (
            void 0
          )}
          {/* </AnimatePresence> */}
        </Container>
      )}
    </>
  );
};

export default Gallery;
