import React from "react";
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import Fullscreen from "./fullscreen";
import getScrollbarWidth from "./scrollbarWidth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion"

const Gallery = (props) => {
    let lastUrl = `/galleria?type=${props.type}`;

    if (props.type === null) {
        lastUrl = `/galleria?`;
    }
    let columns = 2;
    let pictures = (props.data);
    if (props.type !== null) {
        pictures = props.data.filter(n => n.types.includes(props.type));
    }
    if (props.breakpoint === 'medium') {
        columns = 3
    }
    if (props.breakpoint === 'large') {
        columns = 4
    }
    if (props.breakpoint === 'xlarge') {
        /*columns = 6*/
        columns = 4
    }

    const handleModalOpen = (isOpen) => {
        if (isOpen) {
            document.body.classList.add('modal-open');
            document.body.style.paddingRight = `${getScrollbarWidth()}px`;
        } else {
            document.body.classList.remove('modal-open');
            document.body.style.paddingRight = "0";
        }
    };
    const handleSave = (e) => {
        e.preventDefault();
        console.log('Saved');
        console.log(e);
    };

    return (
        <Container fluid>
            <div className="pt-theme">
                <Row className='flex-row-reverse'>
                    <Col className="" xs={12 / columns}>
                        {pictures.map((picture, index) => index % columns === columns - 1 ?
                            <Link key={index} to={`${lastUrl}&pic=${index}`}>
                                <div
                                    className="overflow-hidden hover-parent position-relative img-hover img-hover mb-theme rounded shadow-lg">
                                    <img className="img-fluid w-100 " src={picture.url} alt={picture.alt}/>
                                    <motion.div whileHover={{scale: 1.1}}
                                                whileTap={{scale: 0.9}} onClick={handleSave}
                                                className="position-absolute hover-opacity-1 top-theme-2 left-theme-2 d-inline-flex">
                                        <div className="d-inline-flex p-3 hover-blur bg-w-50 rounded">
                                            <FontAwesomeIcon className="text-danger h4 mb-0" icon={["fa", "heart"]}/>
                                        </div>
                                    </motion.div>
                                </div>
                            </Link> : void 0
                        )}
                    </Col>
                    <Col className="" xs={12 / columns}>
                        {pictures.map((picture, index) => index % columns === columns - 2 ?
                            <Link key={index} to={`${lastUrl}&pic=${index}`}>
                                <div className="overflow-hidden img-hover img-hover mb-theme rounded shadow-lg">
                                    <img className="img-fluid w-100 " src={picture.url} alt={picture.alt}/>
                                </div>
                            </Link> : void 0
                        )}
                    </Col>
                    {columns > 2 ? <Col className="" xs={12 / columns}>
                        {pictures.map((picture, index) => index % columns === columns - 3 ?
                            <Link key={index} to={`${lastUrl}&pic=${index}`}>
                                <div className="overflow-hidden img-hover img-hover mb-theme rounded shadow-lg">
                                    <img className="img-fluid w-100 " src={picture.url} alt={picture.alt}/>
                                </div>
                            </Link> : void 0
                        )}
                    </Col> : void 0
                    }
                    {columns > 3 ? <Col className="" xs={12 / columns}>
                        {pictures.map((picture, index) => index % columns === columns - 4 ?
                            <Link key={index} to={`${lastUrl}&pic=${index}`}>
                                <div className="overflow-hidden img-hover img-hover mb-theme rounded shadow-lg">
                                    <img className="img-fluid w-100 " src={picture.url} alt={picture.alt}/>
                                </div>
                            </Link> : void 0
                        )}
                    </Col> : void 0
                    }
                    {columns > 4 ? <Col className="" xs={12 / columns}>
                        {pictures.map((picture, index) => index % columns === columns - 5 ?
                            <Link key={index} to={`${lastUrl}&pic=${index}`}>
                                <div className="overflow-hidden img-hover img-hover mb-theme rounded shadow-lg">
                                    <img className="img-fluid w-100 " src={picture.url} alt={picture.alt}/>
                                </div>
                            </Link> : void 0
                        )}
                    </Col> : void 0
                    }
                    {columns > 5 ? <Col className="" xs={12 / columns}>
                        {pictures.map((picture, index) => index % columns === columns - 6 ?
                            <Link key={index} to={`${lastUrl}&pic=${index}`}>
                                <div className="overflow-hidden img-hover img-hover mb-theme rounded shadow-lg">
                                    <img className="img-fluid w-100 " src={picture.url} alt={picture.alt}/>
                                </div>
                            </Link> : void 0
                        )}
                    </Col> : void 0
                    }
                </Row>
            </div>
            {props.activePic !== null ? handleModalOpen(true) : handleModalOpen(false)}
            {props.activePic !== null ?
                <Fullscreen isXLarge={props.breakpoint === 'xlarge'} type={props.type} pictures={pictures}
                            activePic={parseInt(props.activePic)}/> : void 0}
        </Container>
    )
};

export default Gallery;