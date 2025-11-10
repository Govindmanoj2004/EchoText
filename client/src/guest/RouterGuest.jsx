import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const RouterGuest = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default RouterGuest;
