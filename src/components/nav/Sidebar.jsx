import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectSmallNav,
  RsetSmallNav,
} from "../../slices/mainSlices";
import { selectIsLoggedIn, RsetIsLoggedIn } from "../../slices/authSlices";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const smallNav = useSelector(selectSmallNav);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="h-100">
      {!smallNav ? (
        <Navbar expand="lg" bg="dark" className="borderRadius-15 h-100">
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="w-100 h-100 d-flex flex-column justify-content-between"
          >
            <div className="mt-3 d-flex w-100">
              <Nav className="d-flex flex-column align-items-center w-100">
                <div className="mb-3">
                  <MenuIcon
                    style={{ cursor: "pointer" }}
                    className="fs-6 text-white"
                    onClick={() => {
                      dispatch(RsetSmallNav(!smallNav));
                    }}
                  />
                </div>
              </Nav>
            </div>

            <div>
              <span
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                {/* Your logout icon */}
              </span>
              <div style={{ height: "50px" }}></div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <Navbar
          expand="lg"
          bg="dark"
          className="h-100 borderRadius-15 w-100 text-center"
        >
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="w-100 h-100 d-flex flex-column justify-content-between"
          >
            <div className="w-100 mt-3">
              <Nav className="flex-column w-100">
                <Navbar.Brand className="text-center mb-3 d-flex justify-content-between align-items-center">
                  <div className="text-center text-white">
                    {/* Your logo or brand content */}
                  </div>
                  <div className="">
                    <MenuIcon
                      className="fs-6 text-white "
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        console.log("hi");
                        dispatch(RsetSmallNav(!smallNav));
                      }}
                    />
                  </div>
                </Navbar.Brand>
                <h2
                  class
                  onClick={() => navigate("/Dashboard")}
                  className="sidebar-link text-white mt-2 my-3 "
                  style={{ cursor: "pointer" }}
                >
                  <span className="ms-3">{/* Your home link content */}</span>
                  <span className="ms-3">داشبورد</span>
                </h2>
                <h2
                  class
                  onClick={() => navigate("/home")}
                  className="sidebar-link text-white mt-2 my-3 "
                  style={{ cursor: "pointer" }}
                >
                  <span className="ms-3">{/* Your home link content */}</span>
                  <span className="ms-3">داشبورد</span>
                </h2>
                <h2
                  class
                  onClick={() => navigate("/home")}
                  className="sidebar-link text-white mt-2 my-3 "
                  style={{ cursor: "pointer" }}
                >
                  <span className="ms-3">{/* Your home link content */}</span>
                  <span className="ms-3">داشبورد</span>
                </h2>
                <h2
                  class
                  onClick={() => navigate("/home")}
                  className="sidebar-link text-white mt-2 my-3 "
                  style={{ cursor: "pointer" }}
                >
                  <span className="ms-3">{/* Your home link content */}</span>
                  <span className="ms-3">داشبورد</span>
                </h2>
                <h2
                  class
                  onClick={() => navigate("/home")}
                  className="sidebar-link text-white mt-2 my-3 "
                  style={{ cursor: "pointer" }}
                >
                  <span className="ms-3">{/* Your home link content */}</span>
                  <span className="ms-3">داشبورد</span>
                </h2>
                {/* Additional links go here */}
              </Nav>
            </div>
            <div>
              <Button className="px-4 py-2 bg-transparent border-2 border-danger rounded-pill navItem">
                <span
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/");
                  }}
                >
                  {/* Your logout icon */}
                </span>
                <span
                  className="font12"
                  onClick={() => dispatch(RsetIsLoggedIn(false))}
                >
                  خروج
                </span>
              </Button>
              <div classstyle={{ height: "50px" }}></div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default Sidebar;
