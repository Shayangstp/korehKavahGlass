import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/nav/Sidebar";
import Header from "../components/nav/Header";
import { selectSmallNav } from "../slices/mainSlices";
import { useSelector, useDispatch } from "react-redux";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const smallNav = useSelector(selectSmallNav);
  return (
    <div className="bg-dark overflow-hidden">
      <div className="m-0 h-100 p-1" style={{ background: "#f2f2f2" }}>
        <Row className="m-0">
          <Col
            sm="2"
            xl={!smallNav ? "1" : "2"}
            className="d-none d-xl-inline border p-0"
          >
            <Sidebar />
          </Col>
          <Col sm="12" xl={!smallNav ? "11" : "10"} className="p-0 min-vh-100">
            <Header />
            {children}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainLayout;
