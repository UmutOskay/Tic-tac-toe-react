import React from "react";
import Games from "../components/home/Games";
import Feedback from "../components/home/Feedback";
import { Col, Row, Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container className="d-flex justify-content-around p-5">
          <Row className="mt-5">
          <Col xs={8} md={4} >
          <Games key={0} link={"rock_paper_scissors"} />
          </Col>
          <Col xs={8} md={4} >
          <Games key={1} link={"tic_tac_toe"} />
          </Col>
          <Col xs={8} md={4}>
          <Feedback/>
          </Col>
          </Row>
      </Container>
  );
};

export default HomePage;
