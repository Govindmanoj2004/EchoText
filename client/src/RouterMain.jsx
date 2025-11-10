import React from "react";
import { Routes, Route } from "react-router-dom";
import User from "./user/User";
import Guest from "./guest/Guest";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/user/*" element={<User />} />
      {/* Add a default route if needed */}
      <Route path="/" element={<Guest />} />
    </Routes>
  );
};

export default RouterMain;
