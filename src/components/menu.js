import React from "react";
import {Link} from "react-router-dom";
import {Container} from "reactstrap";
import Row from "reactstrap/es/Row";

const Menu = (props) => {
    return (
        <div className={(props.isLarge ? 'top-0 py-3' : 'bot-0 py-3') + " blur-trans-md bg-w-72 z-1 position-sticky"}>
            <Container fluid>
                <ul className={(props.isLarge ? 'd-flex row mx-0' : 'scrolling-wrapper-flexBox') + " position-sticky px-0 mb-0"}>
                    <Row className="flex-nowrap">
                        <li className="col-auto px-3">
                            <Link className={(props.type ? 'text-muted' : 'font-weight-bold') + ''} to="/">All</Link>
                        </li>
                        <li className="col-auto px-3">
                            <Link className={(props.type === 'Original' ? 'font-weight-bold' : 'text-muted') + ''}
                                  to="/galleria?type=Original">Original</Link>
                        </li>
                        <li className="col-auto px-3">
                            <Link className={(props.type === 'Mesmerizing' ? 'font-weight-bold' : 'text-muted') + ''}
                                  to={'/galleria?type=Mesmerizing'}>Mesmerizing</Link>
                        </li>
                    </Row>
                </ul>
            </Container>
        </div>
    )
};

export default Menu;