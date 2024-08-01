import React from "react";
import {Route, Routes } from "react-router-dom";
import views from "./views";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path={views.home} element={<Home/>} />
      </Routes>
  );
};

export default AppRoutes;
