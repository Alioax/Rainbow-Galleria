import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./notification";
import Breakpoint from "react-socks";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  MdFavoriteBorder,
  MdFavorite,
  MdPlace,
  MdFileDownload,
} from "react-icons/md";
import { handleSaved } from "../states/actions/actions";

const Fullscreen = (props) => {
  const dispatch = useDispatch();
  const saved = useSelector((state) => state.saved);

  const handleSave = (x, event) => {
    dispatch(handleSaved(x));
    if (saved.length === 1 && props.type === "Saved") {
      history.push("/");
    }
  };

  const useKeyPress = (targetKey, fn) => {
    function downHandler({ key }) {
      if (key === targetKey) {
        fn();
      }
    }

    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      return () => {
        window.removeEventListener("keydown", downHandler);
      };
    }, [props.activePic]);
  };

  const history = useHistory();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, history, props.type);

  function handlePicChange(step) {
    if (props.activePic !== props.pictures.length - 1 && step === 1) {
      if (props.type === null) {
        history.replace(
          `galleria?${props.type !== null ? "&" : ""}pic=${
            props.activePic + step
          }`
        );
      } else {
        history.replace(
          `galleria?type=${props.type}&pic=${props.activePic + step}`
        );
      }
    }
    if (props.activePic !== 0 && step === -1) {
      if (props.type === null) {
        history.replace(`galleria?pic=${props.activePic + step}`);
      } else {
        history.replace(
          `galleria?type=${props.type}&pic=${props.activePic + step}`
        );
      }
    }
  }

  useKeyPress("ArrowRight", () => {
    handlePicChange(1);
  });
  useKeyPress("ArrowLeft", () => {
    handlePicChange(-1);
  });
  useKeyPress("d", () => {
    handlePicChange(1);
  });
  useKeyPress("D", () => {
    handlePicChange(1);
  });
  useKeyPress("A", () => {
    handlePicChange(-1);
  });
  useKeyPress("a", () => {
    handlePicChange(-1);
  });
  useKeyPress("4", () => {
    handlePicChange(-1);
  });
  useKeyPress("6", () => {
    handlePicChange(1);
  });
  useKeyPress("PageUp", () => {
    handlePicChange(-1);
  });
  useKeyPress("PageDown", () => {
    handlePicChange(1);
  });
  useKeyPress("+", () => {
    handlePicChange(1);
  });
  useKeyPress("-", () => {
    handlePicChange(-1);
  });
  useKeyPress("Escape", () => {
    if (props.type === null) {
      history.replace("");
    } else {
      history.replace(`galleria?type=${props.type}`);
    }
  });

  return (
    <>
      <Helmet>
        <title>
          {props.pictures[props.activePic].title} | Rainbow Galleria
        </title>
        <meta
          name="description"
          content={props.pictures[props.activePic].description}
        />
        <meta
          property="og:title"
          content={props.pictures[props.activePic].title}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={props.pictures[props.activePic].url}
        />
        <meta
          property="og:url"
          content={`https://rainbow-galleria.netlify.app/#/galleria?${
            props.type === null ? "" : props.type + "&"
          }pic=${props.activePic}`}
        />
      </Helmet>
      <div
        className={
          (props.isXLarge ? "align-items-center" : "align-items-start") +
          " vh-100 vw-100 p-theme d-flex overflow-modal justify-content-center top-0 z-2 left-0 blur-trans-md bg-rainbow-animation position-fixed"
        }
      >
        <div
          className={
            (props.isXLarge ? void 0 : "align-items-center") +
            " w-fullscreen d-flex flex-xl-row flex-xl-nowrap flex-column-reverse justify-content-center"
          }
          ref={wrapperRef}
        >
          <Notification isXLarge={props.isXLarge} once={true}>
            <div className="d-flex align-items-center justify-content-center bg-cyan-50 text-white blur-sm p-3 rounded">
              <Breakpoint xlarge up>
                <h4 className="mb-0 font-weight-light">
                  Use <span className="font-weight-bold">Keyboard keys</span> to
                  navigate
                </h4>
              </Breakpoint>
              <Breakpoint large down>
                <h4 className="mb-0 font-weight-light">
                  Click{" "}
                  <span className="mb-0 font-weight-light">
                    on side of the pictures
                  </span>{" "}
                  to navigate
                </h4>
              </Breakpoint>
            </div>
          </Notification>
          <div
            className={
              (props.isXLarge
                ? "rounded-left w-25vw"
                : "rounded-bottom w-100") + " card-body bg-white"
            }
          >
            <div className="mb-theme">
              <h1 className="mb-3">{props.pictures[props.activePic].title}</h1>
              {props.pictures[props.activePic].location !== null ? (
                <div className="d-flex align-items-center text-muted mb-3 font-weight-light">
                  <MdPlace className="h4 mb-0 mr-1" />
                  <span className="">
                    {props.pictures[props.activePic].location}
                  </span>
                </div>
              ) : (
                void 0
              )}
              <div className="d-inline-block rounded-sm position-relative overflow-hidden">
                <img
                  src={props.pictures[props.activePic].url}
                  alt={props.pictures[props.activePic].alt}
                  className="position-absolute rounded-sm h-100 w-100"
                />
                <div className="d-flex row mx-0 flex-nowrap blur-trans-md bg-w-50 p-2">
                  <motion.button
                    onClick={() => handleSave(props.pictures[props.activePic])}
                    whileTap={{ scale: 0.9 }}
                    className="focus-none btn mr-2 focus-none p-0 rounded-sm"
                  >
                    <div className="d-flex p-2 rounded-sm transition-base hover-icon">
                      {saved.some(
                        (code) =>
                          JSON.stringify(code) ===
                          JSON.stringify(props.pictures[props.activePic])
                      ) ? (
                        <MdFavorite className="text-danger h3 mb-0" />
                      ) : (
                        <MdFavoriteBorder className="text-danger h3 mb-0" />
                      )}
                    </div>
                  </motion.button>
                  <motion.a
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    className="focus-none btn focus-none p-0 rounded-sm"
                    href={props.pictures[props.activePic].url}
                    download={props.pictures[props.activePic].title}
                  >
                    <div className="d-flex p-2 rounded-sm transition-base hover-icon">
                      <MdFileDownload className="text-primary h3 mb-0" />
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
            <p className="text-muted mb-0">
              {props.pictures[props.activePic].description}
            </p>
          </div>
          <div className="col hover-parent position-relative px-0">
            <img
              src={props.pictures[props.activePic].url}
              alt={props.pictures[props.activePic].alt}
              className={
                props.isXLarge
                  ? "rounded-right wh-fullscreen "
                  : "rounded-top  w-fullscreen w-100"
              }
            />
            <div
              onClick={() => handlePicChange(-1)}
              className="d-flex hover-opacity-1 justify-content-center align-items-center position-absolute w-50 h-100 top-0 left-0"
            >
              {props.activePic === 0 ? (
                <span
                  className={
                    props.isXLarge
                      ? "h3 mb-0 text-white rounded p-3 font-amatic bg-cyan-20 blur-sm"
                      : void 0
                  }
                >
                  The Beginning
                </span>
              ) : (
                void 0
              )}
            </div>
            <div
              onClick={() => handlePicChange(1)}
              className="d-flex hover-opacity-1  justify-content-center align-items-center position-absolute w-50 h-100 top-0 right-0"
            >
              {props.activePic === props.pictures.length - 1 ? (
                <span
                  className={
                    props.isXLarge
                      ? "h3 mb-0 text-white rounded p-3 font-amatic bg-cyan-20 blur-sm"
                      : void 0
                  }
                >
                  The End
                </span>
              ) : (
                void 0
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function useOutsideAlerter(ref, history, type) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (type === null) {
          history.replace("");
        } else {
          history.replace(`galleria?type=${type}`);
        }
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default Fullscreen;
