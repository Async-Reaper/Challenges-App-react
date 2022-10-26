import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainWrapper from "../components/UI/MainWrapper/MainWrapper";
import Challenges from "../pages/publicPages/Challenges";
import Login from "../pages/publicPages/Login";
import Signup from "../pages/publicPages/Signup";

const PublicRoute: FC = () => {
  return (
    <Routes>
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Challenges />} />
    </Routes>
  );
};

export default PublicRoute;
