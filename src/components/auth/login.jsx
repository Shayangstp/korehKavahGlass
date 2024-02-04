import React from "react";
// import logo from "../../img/logo/kavelogo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  RsetIsLoggedIn,
  RsetNationalCode,
  RsetPassword,
  selectNationalCode,
  selectPassword,
} from "../../slices/authSlices";
import { successMessage } from "../../utils/toast";
import { ToastContainer } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const nationalCode = useSelector(selectNationalCode);
  const password = useSelector(selectPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("token", "shayan");
    dispatch(RsetIsLoggedIn(true));
    console.log("National Code:", nationalCode);
    console.log("Password:", password);
    dispatch(RsetNationalCode(""));
    dispatch(RsetPassword(""));
  };
  return (
    <>
      {isLoggedIn ? (
        // Render this content when logged in
        <div>
          {/* <ToastContainer /> */}

          {/* Add any other content you want to show when logged in */}
        </div>
      ) : (
        <div
          dir="rtl"
          className="login-main-parent d-flex justify-content-center align-items-center  flex-column col-sm-12 col-md-6  w-100      "
          style={{ height: "100vh" }}
        >
          <div className="login-head-logo text-center">
            {/* <img
              src={logo}
              alt="logo"
              className="img-fluid d-block center"
              style={{ width: "50px", margin: "auto" }}
            /> */}
            <h1>درگاه ورود به کاوه</h1>
          </div>
          <div className="login-form   col-md-6 p-4 bg-white mt-5 rounded-3 shadow  ">
            <form
              action="#"
              method="post"
              className="d-flex justify-content-center align-items-start flex-column w-100 m-auto "
              onSubmit={handleLogin}
            >
              <label
                style={{ fontWeight: "bold", fontSize: "20px" }}
                htmlFor="national-code"
                className="my-3"
              >
                کد ملی
              </label>
              <input
                type="text"
                id="national-code"
                value={nationalCode}
                onChange={(e) => dispatch(RsetNationalCode(e.target.value))}
                placeholder="لطفا کد ملی خود را وارد نمایید"
                className="w-100 p-2 rounded-3  border-bottom border-0"
              />
              <label
                style={{ fontWeight: "bold", fontSize: "20px" }}
                htmlFor="national-code"
                className="mt-4"
              >
                رمز عبور
              </label>
              <input
                type="text"
                id="national-code"
                value={password}
                onChange={(e) => dispatch(RsetPassword(e.target.value))}
                placeholder="رمز عبور خود را وارد نمایید"
                className=" w-100 p-2 rounded-3 border-bottom border-0"
              />

              <a style={{ textDecoration: "none" }} className="my-3" href="#">
                فراموشی رمز عبور
              </a>
              <input
                type="submit"
                value="ورود"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                className="w-100"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
