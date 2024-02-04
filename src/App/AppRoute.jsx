import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Dashboard from "../components/Dashboard";
import Login from "../components/auth/Login";

const AppRoutes = () => {
  return (
    <Fragment>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </Fragment>
  );
};

export default AppRoutes;
