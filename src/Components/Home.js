import React from "react";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import TableFilters from "./TableFilters";
import { Container, Row, Col } from "react-bootstrap";
import SideNavBar from "./SideNavBar";
import Board from "./Taskboard/Board"
import "../styles.scss";


function Home() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="col-l" id="sidebar-wrapper">
            <SideNavBar />
          </Col>
          <Col xs={10} className="col-r" id="page-content-wrapper">
            <header className="header w-100">
              <Header />
              <Breadcrumb />
            </header>
            <TableFilters />
            <Board/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;